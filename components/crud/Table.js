import React, { Component } from 'react'
import { Query } from "react-apollo";
import BootstrapTable from 'react-bootstrap-table-next';
import Link from 'next/link'
import ContentLoaderTable from './ContentLoaderTable'
import { Mutation } from "react-apollo";

export default class Table extends Component {

    loadMore = (fetchMore) => {

        const { field } = this.props;

        fetchMore({
            variables: {
                offset: 15
            },
            updateQuery: (prev, { fetchMoreResult }) => {

                if (!fetchMoreResult) return prev;

                return {
                    [field]: [...prev[field], ...fetchMoreResult[field]]
                };
            }
        })
    }

    actionBar(col, row, t, data) {
        return (
            <Mutation mutation={data.remove}>
                {(action, { loading, error }) => {
                    return (<div className="d-flex controle-buttons">
                        <Link prefetch href={data.route + '/' + row['id'] + '/edit'}>
                            <a href="#"><i className="far fa-edit fa-fw"></i></a>
                        </Link>
                        &nbsp;
                <Link prefetch href={data.route + '/' + row['id']}>
                            <a href="#"><i className="fas fa-eye fa-fw"></i> </a>
                        </Link>
                        &nbsp;
                        <Link prefetch href='#'>
                            <a onClick={() => this.delete(row['id'], action)} href="#"><i className="fas fa-id-card fa-fw"></i></a>
                        </Link>
                    </div>);
                }}
            </Mutation>


        );
    }

    delete(id, action) {

        action({ variables: { id: id } }).then(({ data }) => {

            console.log(data)

        }).catch(err => {
            toast.error(err.graphQLErrors[0]['message']);
        })
    }

    render() {

        const { query, remove, columns, route, field } = this.props;

        columns.push({
            dataField: 'actions',
            text: '',
            formatter: this.actionBar,
            route: route,
            formatExtraData: {
                route: route,
                remove: remove,
            }
        });

        return (
            <Query query={query} ssr={false} variables={{ offset: 0, limit: 10 }}
            // fetchPolicy="cache-and-network"
            >
                {({ loading, error, data, fetchMore }) => {
                    if (loading && !data[field]) return (<ContentLoaderTable />);

                    return (<div>

                        {/* Desktop mode */}
                        <div className="d-none d-md-block">
                            <BootstrapTable striped hover dark
                                // condensed 
                                keyField='id' data={data[field]} columns={columns} bootstrap4={true} />
                        </div>
                        {/* End Desktop mode */}

                        {/* Mobile mode */}
                        <div className="d-block d-md-none">
                            {data[field].map((item, key) => {
                                return (<div key={key} className="d-flex flex-column list-row">
                                    {columns.map((col, ckey) => {

                                        // If has formater
                                        if (col['formatter']) {

                                            if (col['formatExtraData']) {
                                                return (<div key={ckey}>
                                                    {this.actionBar(col, item, null, col['formatExtraData'])}
                                                </div>);
                                            } else {
                                                return (<div key={ckey}>
                                                    {this.actionBar(col, item)}
                                                </div>);
                                            }
                                        }

                                        // Without formater
                                        return (<div key={ckey} className="d-flex item-field">
                                            <strong>{col['text']} :</strong>&nbsp;
                                            <p>{item[col['dataField']]}</p>
                                        </div>);
                                    })}
                                </div>)
                            })}
                        </div>
                        {/* End Mobile mode */}

                        <button onClick={() => this.loadMore(fetchMore)} className="btn btn-secondary btn-block">
                            {loading ? "Loading!..." : "Load more"}
                        </button>


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
                    </div>)
                }}
            </Query>
        )
    }
}



