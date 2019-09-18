import React from 'react';
import TodoList from './ReactTable';
import CompleteIncompleteTable from './ToDoTable';

/**
 *
 *
 * @class TodoApp
 * @extends {React.Component}
 */
class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            text: '',
            value: '',
            isToggleOn: false
        };
    }

    // Set toggle value in state
    handleChangeToggle = (e) => {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn,
            items: prevState
                .items
                .map(item => item.id === e
                    ? {
                        ...item,
                        isToggleOn: !prevState.isToggleOn
                    }
                    : item)

        }))
    }

    // Set iput value in state
    handleChange = (e) => {
        this.setState({text: e.target.value});
    }

    // Set textarea value in state
    handleTextarea = (e) => {
        this.setState({value: e.target.value});
    }

    // Empty ToDo
    emptyTodo = () => {
        this.setState({items: []});
    }

    // Add item in ToDo
    handleSubmit = (e) => {
        const text = this.state.text;
        const isToggleOn = false;
        e.preventDefault();
        if (!text.length) {
            return;
        }
        // Check existing todo
        const ifExist = (this.state.items.find(item => item.title === text));
        if (ifExist) {
            alert('Exist');
            return;
        }
        const newItem = {
            title: text,
            description: this.state.value,
            id: Date.now(),
            isToggleOn
        };
        this.setState(state => ({
            items: state
                .items
                .concat(newItem),
            text: '',
            value: ''
        }));
    }

    // Delete item from ToDo
    handleDelete = (itemId) => {
        this.setState(prevState => ({
            items: prevState
                .items
                .filter(item => item.id !== itemId)
        }));
    }

    render() {
        return (
            <div>
                <h3>TODO</h3>
                <TodoList
                    deleteItem={this.handleDelete}
                    changeToggle={this.handleChangeToggle}
                    items={this.state.items}/>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="new-todo">
                        Enter to do
                    </label>
                    <input
                        id="new-todo"
                        placeholder='Title'
                        onChange={this.handleChange}
                        value={this.state.text}/>
                    <textarea
                        type="text"
                        placeholder='Description'
                        value={this.state.value}
                        onChange={this.handleTextarea}/>
                    <button>
                        Add #{this.state.items.length + 1}
                    </button>
                    <button onClick={this.emptyTodo}>
                        Empty
                    </button>
                </form>
                <CompleteIncompleteTable
                    items={this
                    .state
                    .items
                    .filter(item => item.isToggleOn !== true)}
                    status='Incomplete'/>
                <CompleteIncompleteTable
                    items={this
                    .state
                    .items
                    .filter(item => item.isToggleOn !== false)}
                    status='Complete'/>
            </div>
        );
    }
}

export default TodoApp;
