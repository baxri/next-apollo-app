import React, { Component } from 'react'
import { Query } from "react-apollo";
import ContentLoaderTable from './ContentLoaderTable'

export default class View extends Component {
    render() {
        const { query, field, id } = this.props;
        return (
            <Query query={query} variables={{ id: parseInt(id) }} ssr={false}
            // fetchPolicy="cache-and-network"
            >
                {({ loading, error, data }) => {
                    if (loading) return (<ContentLoaderTable />);
                    if (error) return (<p>{error}</p>);

                    return (<div>

                        {Object.keys(data[field]).map(key => {
                            return (<div className="d-flex">
                                <strong>{key}</strong>: &nbsp;
                                <p>{data[field][key]}</p>
                            </div>);
                        })}

                    </div>);
                }}
            </Query>
        )
    }
}

