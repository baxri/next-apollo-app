import React, { Component } from 'react'
import { Query } from "react-apollo";
import BootstrapTable from 'react-bootstrap-table-next';
import Link from 'next/link'

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
                    },
                        // {
                        //     dataField: '',
                        //     text: '',
                        //     formatter: priceFormatter
                        // }
                    ];

                    return (<div>


                        <div className="d-none d-md-block">
                            <BootstrapTable keyField='id' data={data.feeds} columns={columns} bootstrap4={true} />
                        </div>

                        <div className="d-block d-md-none">
                            {data.feeds.map((item, key) => {
                                return (<div key={key} className="d-flex flex-column list-row">
                                    {columns.map((col, ckey) => {
                                        return (<div key={ckey} className="d-flex item-field">
                                            <strong>{col['text']} :</strong>&nbsp;
                                            <p>{item[col['dataField']]}</p>
                                        </div>);
                                    })}
                                    <div className="d-flex controle-buttons">
                                        <Link prefetch href='/users'>
                                            <a href="#"><i className="far fa-edit fa-fw"></i> Edit</a>
                                        </Link>
                                        &nbsp;
                                        <Link prefetch href='/users'>
                                            <a href="#"><i className="far fa-eye-card fa-fw"></i> Show</a>
                                        </Link>
                                        &nbsp;
                                        <Link prefetch href='/users'>
                                            <a href="#"><i className="far fa-remove-card fa-fw"></i> Delete</a>
                                        </Link>
                                    </div>
                                </div>)
                            })}
                        </div>

                        <style jsx>{`

                            .list-row{
                                border-bottom: 1px dotted lightgray;
                                margin-bottom: 15px;
                                padding-bottom: 15px;
                            }

                            strong, p{
                                font-size: 10pt; 
                                line-height: 5px;
                            }
                        
                        `}</style>

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
