import React, { Component } from 'react'
import { POSTS } from "../gql/Auth";
import { Query } from "react-apollo";

export default class PostList extends Component {
  render() {
    return (
      <Query query={POSTS} variables={{ count: 2 }}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;

          return (
            <div>
              {data.allPosts.map(post => (
                <div key={post.id}>
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                </div>
              ))}
            </div>
          );

        }}
      </Query>
    )
  }
}
