import React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";

/**
 *
 *
 * @class TodoList
 * @extends {React.Component}
 */
class TodoList extends React.Component {

    render() {
        const data = this.props.items;
        return (
            <div>
                <ReactTable
                    data={data}
                    columns={[
                    {
                        Header: "Incomplete",
                        accessor: 'isToggleOn',
                        Cell: row => (
                            <div className="form-check"><input
                                className="form-check-input"
                                type="checkbox"
                                checked={row.original.isToggleOn === true}
                                onChange={() => this.props.changeToggle(row.original.id)}/>
                                <button
                                    className="btn btn-outline-danger"
                                    onClick={() => this.props.deleteItem(row.original.id)}>Delete</button>
                            </div>
                        )
                    }, {
                        Header: 'Id',
                        accessor: 'id'
                    }, {
                        Header: "Title",
                        accessor: "title"
                    }, {
                        Header: 'Description',
                        accessor: "description"
                    }
                ]}
                    defaultPageSize={10}
                    className="-striped -highlight"/>
                <br/>
            </div>
        );
    }
}

export default TodoList;
