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
        const scope = {
                maxWidth: 700,
                display: 'inline-block',
                padding: 100
       };
        return (
            <div style={scope}>
                <h3>{this.props.status}</h3>
                <ReactTable
                    data={data}
                    columns={[{
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

export default CompleteIncomplteTable;
