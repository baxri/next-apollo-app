import React, { Component } from 'react'
import { Query } from "react-apollo";
import { SEARCH as QUERY } from "../../gql/Search";

export default class SearchData extends Component {
    render() {

        const { search } = this.props;

        return (
            <Query query={QUERY} variables={{ search }}>
                {({ loading, error, data }) => {
                    if (loading) return (<p>Loading...</p>);
                    return (
                        <div>
                            {data.search.map(({ id, title, body }) => (
                                <div key={id} className="search-item">
                                    <h5><a href="#">{title}</a></h5>
                                    <p>{body}</p>
                                </div>
                            ))}


                            <style jsx>{`

                                .search-item{
                                    border-bottom: 1px solid lightgray;
                                    margin-bottom: 10px;
                                }
                            
                            `}</style>
                        </div>
                    );
                }}
            </Query>
        )
    }
}
