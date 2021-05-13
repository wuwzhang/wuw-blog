import { client, q } from 'src/lib/db'

const {
  Map,
  Paginate,
  Lambda,
  Match,
  Get,
  Let,
  Index,
  Select,
  Var,
  Collection,
  Create,
  Ref,
  Join,
} = q

// eslint-disable-next-line no-unused-vars
export const posts = async ({ size, catalog }) => {
  const ans = await client.query(
    Map(
      Paginate(
        Join(
          Match(Index('post_search_by_catalog'), catalog),
          Index('post_sort_by_ind_desc')
        ),
        // { size }
      ),
      Lambda(
        ['ind', 'ref'],
        Let(
          { posts: Get(Var('ref')) },
          {
            id: Select(['ref', 'id'], Var('posts')),
            title: Select(['data', 'title'], Var('posts')),
            tag: Select(['data', 'tag'], Var('posts')),
            catalog: Select(['data', 'catalog'], Var('posts')),
            body: Select(['data', 'body'], Var('posts')),
          }
        )
      )
    )
  )

  return ans.data
}

export const createPost = async ({ title, body, tag, catalog, ind }) => {
  const ans = await client.query(
    Create(Collection('Post'), { data: { title, body, tag, catalog, ind } })
  )
  return ans
}

export const findPostByID = async ({ id }) => {
  const ans = await client.query(Get(Ref(Collection('Post'), id)))
  return ans.data
}
