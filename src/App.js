import React from 'react';

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            text: ''
        };
    }

    handleChange = (e) => {
        this.setState({text: e.target.value});
    }

    // Empty ToDo
    emptyTodo = () => {
        this.setState({items: []});
    }

    // Add item in ToDo
    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.text.length) {
            return;
        }
        const ifExist = (this.state.items.find(item => item.text === this.state.text));
        if (ifExist) {
            alert('Exist');
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState(state => ({
            items: state
                .items
                .concat(newItem),
            text: ''
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
                <TodoList deleteItem={this.handleDelete} items={this.state.items}/>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="new-todo">
                        Enter to do
                    </label>
                    <input id="new-todo" onChange={this.handleChange} value={this.state.text}/>
                    <button>
                        Add #{this.state.items.length + 1}
                    </button>
                    <button onClick={this.emptyTodo}>
                        Empty
                    </button>
                </form>
            </div>
        );
    }
}

class TodoList extends React.Component {
    render() {
        return (
            <ul>
                {this
                    .props
                    .items
                    .map(item => (
                        <li key={item.id}>{item.text}
                            <button onClick={() => this.props.deleteItem(item.id)}>
                                Empty
                            </button>
                        </li>
                    ))}
            </ul>
        );
    }
}

export default TodoApp;
