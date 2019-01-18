import React, { Component } from 'react'

export default class ResponsiveTable extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }


    _head(columns) {

        columns = columns.map(function (colName) {
            return (
                <th>{colName}</th>
            );
        });
        return (
            <tr>{columns}</tr>
        );
    }

    _rows(columns, rows) {
        return rows.map(function (row) {
            var values = columns.map(function (colName, colKey) {
                return (
                    <td data-label={colName}>{row[colKey]}</td>
                );
            })
            return (
                <tr>{values}</tr>
            );
        })
    }

    render() {

        const { columns } = this.props;

        console.log(columns)

        return (
            <table className="responsive-table">
                <thead>
                    {this._head(columns)}
                </thead>
                <tbody>
                    {this._rows(columns, rows)}
                </tbody>
            </table>
        );
    }
}

// React.render(
//     <ResponsiveTable columns={cols} rows={rows} />,
//     document.getElementById('table_container')
// );