import React from 'react';
import TodoList from './Components/ToDoTable';
import ToDoForm from './Components/ToDoForm';

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
            value: ''
        };
    }

    // Set toggle value in state
    handleChangeToggle = (e) => {
        this.setState(prevState => ({
            items: prevState
                .items
                .map(item => item.id === e
                    ? {
                        ...item,
                        isToggleOn: !item.isToggleOn
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
            return (
                <div class="alert alert-danger">
                    <strong>Exist</strong>
                </div>
            );
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
        const style = {
            display: 'inline-block',
            padding: 150
        };
        const itemLength = this.state.items.length;
        return (
            <div>
                <ToDoForm
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    handleTextarea={this.handleTextarea}
                    emptyTodo={this.emptyTodo}
                    items={this.state.items}
                    text={this.state.text}
                    value={this.state.value}/> {itemLength > 0
                    ? <TodoList
                            deleteItem={this.handleDelete}
                            changeToggle={this.handleChangeToggle}
                            items={this.state.items}
                            tableName="ToDo"
                            show={true}/>
                    : ""}{itemLength > 0
                    ? <TodoList
                            items={this
                            .state
                            .items
                            .filter(item => item.isToggleOn !== true)}
                            tableName='Incomplete'
                            style={style}
                            show={false}/>
                    : ""} {itemLength > 0
                    ? <TodoList
                            items={this
                            .state
                            .items
                            .filter(item => item.isToggleOn !== false)}
                            tableName='Complete'
                            style={style}
                            show={false}/>
                    : ""}
            </div>
        );
    }
}

export default TodoApp;
