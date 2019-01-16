import React, { Component } from 'react'
import { Query } from "react-apollo";

export default class Table extends Component {
    render() {

        const { query } = this.props;

        return (
            <Query query={query} variables={{ offset: 0, limit: 10 }} fetchPolicy="cache-and-network">
                {({ loading, error, data, fetchMore }) => {
                    if (loading) return (<div>Loading...</div>);

                    return (<div>

                        {JSON.stringify(data)}
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
