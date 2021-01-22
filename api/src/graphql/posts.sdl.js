import gql from 'graphql-tag'

export const schema = gql`
  type Post {
    id: ID!
    title: String!
    body: String!
  }

  type PostPage {
    data: [Post]
  }

  type Query {
    posts(size: Int!): PostPage
  }

  input CreatePostInput {
    title: String!
    body: String!
  }

  type Mutation {
    createPost(title: String, body: String): Post!
  }
`
