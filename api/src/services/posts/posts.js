import { gql } from 'graphql-request'
import { request, q, client } from 'src/lib/db'

export const posts = async ({ size }) => {
  const ans = await client.query(
    q.Map(
      q.Paginate(
        q.Match(q.Ref("indexes/posts")),
        { size }
      ),
      q.Lambda('posts', q.Let({ posts: q.Get(q.Var('posts')) }, {
        id: q.Select(["ref", "id"], q.Var("posts")),
        title: q.Select(["data", "title"], q.Var("posts")),
        body: q.Select(["data", "body"], q.Var("posts")),
      }))
    )
  )

  return ans
}