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
    posts(size: Int!): [Post]
    findPostByID(id: ID!): Post
    # findPostsByTag(tag: String!): Post
  }

  input CreatePostInput {
    title: String!
    body: String!
    tag: String!
  }

  type Mutation {
    createPost(title: String, body: String, tag: String): Post!
  }
`
