import React, { Component } from 'react'
import { POSTS } from "../gql/Auth";
import { Query } from "react-apollo";

export default class PostList extends Component {
  render() {
    return (
      <Query query={POSTS} variables={{ count: 20 }}>
        {({ loading, error, data }) => data.allPosts.map(post => (
          <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </Query>
    )
  }
}
