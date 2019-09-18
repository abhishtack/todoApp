import React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";

/**
 *
 *
 * @class CompleteIncomplteTable
 * @extends {React.Component}
 */
class CompleteIncomplteTable extends React.Component {

    render() {
        const data = this.props.items;
        const style = {
            maxWidth: 700,
            display: 'inline-block',
            padding: 100
        };
        const tableColumn = [
            {
                Header: 'Id',
                accessor: 'id'
            }, {
                Header: "Title",
                accessor: "title",
                render: data => <input value={data.row.title} onChange={this.props}/>
            }, {
                Header: 'Description',
                accessor: "description"
            }
        ];
        return (
            <div style={style}>
            <div className="card">
                <h3 className="card-header text-center">{this.props.status}</h3>
                    <ReactTable
                        data={data}
                        columns={tableColumn}
                        defaultPageSize={10}
                        className="-striped -highlight"/>
                    <br/>
                </div>
            </div>
        );
    }
}

export default CompleteIncomplteTable;
