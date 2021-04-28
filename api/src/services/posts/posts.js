import { client, q } from 'src/lib/db'

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
            tag: q.Select(['data', 'tag'], q.Var('posts')),
            body: q.Select(['data', 'body'], q.Var('posts')),
          }
        )
      )
    )
  )

  return ans.data
}

export const createPost = async ({ title, body, tag }) => {
  const ans = await client.query(
    q.Create(q.Collection('Post'), { data: { title, body, tag } })
  )
  return ans
}

export const findPostByID = async ({ id }) => {
  const ans = await client.query(q.Get(q.Ref(q.Collection('Post'), id)))
  return ans.data
}

export const findPostsByTas = async ({ tag }) => {
  const ans = await client.query(q.Get(q.Ref(q.Collection('Post'), tag)))
  return ans.data
}
