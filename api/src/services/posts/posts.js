import { gql } from 'graphql-request'
import { request } from 'src/lib/db'

export const posts = async (size) => {
  const query = gql`
    {
      posts {
        data {
          title
          body
        }
      }
    }
  `

  const data = await request(query, 'https://graphql.fauna.com/graphql')

  return data['posts']
}
