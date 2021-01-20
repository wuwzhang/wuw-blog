import gql from 'graphql-tag'

export const schema = gql`
  type Post {
    _id: ID!
    title: String!
    body: String!
  }

  type PostPage {
    data: [Post]
  }

  type Query {
    posts(size: Int!): PostPage
  }
`
