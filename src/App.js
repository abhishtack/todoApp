import React from 'react';

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
            selectValue: 'ToDo'
        };
    }

    // Set iput value in state
    handleChange = (e) => {
        this.setState({text: e.target.value});
    }

    // Set dropdown value in state
    handleChangeDropDown = (e) => {
        this.setState({selectValue: e.target.value});
    }

    // Empty ToDo
    emptyTodo = () => {
        this.setState({items: []});
    }

    // Add item in ToDo
    handleSubmit = (e) => {
        const text = this.state.text;
        const selectCategory = this.state.selectValue;
        e.preventDefault();
        if (!text.length) {
            return;
        }
        // Check existing todo
        const ifExist = (this.state.items.find(item => item.text === text));
        if (ifExist) {
            alert('Exist');
            return;
        }
        const newItem = {
            text: text,
            id: Date.now(),
            selectCategory
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
                    <select value={this.state.selectValue} onChange={this.handleChangeDropDown}>
                        <option value="ToDO">ToDo</option>
                        <option value="InProgress">InProgress</option>
                        <option value="Completed">Completed</option>
                    </select>
                </form>
            </div>
        );
    }
}

/**
 *
 *
 * @class ProductCategoryRow
 * @extends {React.Component}
 * It will shows the category as a header
 */
class ProductCategoryRow extends React.Component {
    render() {
        const category = this.props.category;
        return (
                <h3 colSpan="2">
                    {category}
                </h3>
        );
    }
}

/**
 *
 *
 * @class CategoryRow
 * @extends {React.Component}
 * It will contains all the item which belong to category
 */
class CategoryRow extends React.Component {
    render() {
        const item = this.props.categoryItem;
        return (
            <li key={item.id}>{item.text}
                <button onClick={() => this.props.deleteItem(item.id)}>
                    Empty
                </button>
            </li>
        );
    }
}

/**
 *
 *
 * @class TodoList
 * @extends {React.Component}
 */
class TodoList extends React.Component {
    render() {
        let prevCategory = null;
        const rows = [];

        this
            .props
            .items
            .forEach((item) => {
                if (item.selectCategory !== prevCategory) {
                    rows.push(<ProductCategoryRow category={item.selectCategory} key={item.selectCategory}/>);
                }
                rows.push(<CategoryRow
                    deleteItem={this.props.deleteItem}
                    categoryItem={item}
                    key={item.id}/>);
                prevCategory = item.selectCategory;
            });
        return (
            <ul>
                {rows}
            </ul>
        );
    }
}

export default TodoApp;
