// See https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/constructor
// for options.

import faunadb from 'faunadb'
import { GraphQLClient } from 'graphql-request'

const URL = 'fnAD_RdiZxACAamGJrCa06g7ik-B1GYvQUtFflGZ'

export const request = async (query = {}) => {
  const endpoint = 'https://graphql.fauna.com/graphql'

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: 'Bearer ' + URL,
    },
  })

  try {
    return await graphQLClient.request(query)
  } catch (error) {
    console.log(error)
    return error
  }
}


export const client = new faunadb.Client({
  secret: URL
})

export const q = faunadb.query