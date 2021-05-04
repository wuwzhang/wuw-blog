import gql from 'graphql-tag'

export const schema = gql`
  type Post {
    id: ID!
    title: String!
    body: String!
    tag: String!
  }

  type PostPage {
    data: [Post]
  }

  type Query {
    posts(size: Int!, catalog: String!): [Post]
    findPostByID(id: ID!): Post
  }

  input CreatePostInput {
    title: String!
    body: String!
    tag: String!
    catalog: String
  }

  type Mutation {
    createPost(title: String, body: String, tag: String, catalog: String): Post!
  }
`
