import React from 'react';
/**
 *
 *
 * @class TodoList
 * @extends {React.Component}
 */
class TodoList extends React.Component {

    render() {
        const show = this.props.show;
        const data = this.props.items;
        let index = 0;
        return (
            <div style={this.props.style}>
                <h3 className="text-center">{this.props.tableName}</h3>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            {show
                                ? <th scope="col">IsComplete</th>
                                : ""
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr>
                                <th scope="row">{++index}</th>
                                <td>{item.title}</td>
                                <td>{item.description}</td>
                                <td>{show
                                    ? <input
                                        className="form-check-input"
                                        type="checkbox"
                                        checked={item.isToggleOn === true}
                                        onChange={() => this.props.changeToggle(item.id)} />
                                    : ""}</td>
                                <td>{show
                                    ? <button
                                        className="btn btn-outline-danger"
                                        onClick={() => this.props.deleteItem(item.id)}>Delete</button>
                                    : ""}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TodoList;
