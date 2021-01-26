import { q, client } from 'src/lib/db'

export const posts = async ({ size }) => {
  const ans = await client.query(
    q.Map(
      q.Paginate(q.Match(q.Index('posts')), { size }),
      q.Lambda(
        'posts',
        q.Let(
          { posts: q.Get(q.Var('posts')) },
          {
            id: q.Select(['ref', 'id'], q.Var('posts')),
            title: q.Select(['data', 'title'], q.Var('posts')),
            body: q.Select(['data', 'body'], q.Var('posts')),
          }
        )
      )
    )
  )

  return ans
}

export const createPost = async ({ title, body }) => {
  const ans = await client.query(
    q.Create(q.Collection('Post'), { data: { title, body } })
  )
  return ans
}

export const findPostByID = async ({ id }) => {
  const ans = await client.query(q.Get(q.Ref(q.Collection('Post'), id)))
  return ans.data
}
