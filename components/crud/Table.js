import React, { Component } from 'react'
import { Query } from "react-apollo";
import BootstrapTable from 'react-bootstrap-table-next';

function priceFormatter(cell, row) {

    return (
        <div>
            <button>1</button>
            <button>2</button>
            <button>3</button>
        </div>
    );
}

export default class Table extends Component {
    render() {

        const { query } = this.props;

        return (
            <Query query={query} variables={{ offset: 0, limit: 10 }} fetchPolicy="cache-and-network">
                {({ loading, error, data, fetchMore }) => {
                    if (loading) return (<div>Loading...</div>);

                    console.log(data.feeds)

                    const columns = [{
                        dataField: 'id',
                        text: 'Product ID'
                    }, {
                        dataField: 'title',
                        text: 'Product title'
                    }, {
                        dataField: 'description',
                        text: 'Description'
                    }, {
                        dataField: '',
                        text: '',
                        formatter: priceFormatter
                    }];

                    return (<div>

                        <BootstrapTable keyField='id' data={data.feeds} columns={columns} bootstrap4={true} />

                        {/* {JSON.stringify(data)} */}
                        {/* <button onClick={() => fetchMore({
                            variables: {
                                offset: 15
                            },
                            updateQuery: (prev, { fetchMoreResult }) => {

                                // Return only new data
                                return fetchMoreResult.feeds;

                                if (!fetchMoreResult) return prev;

                                return Object.assign({}, prev, {
                                    feeds: [...prev.feeds, ...fetchMoreResult.feeds]
                                });
                            }
                        })}>{loading ? "Loading!..." : "Load more"}</button> */}
                    </div>)
                }}
            </Query>
        )
    }
}
