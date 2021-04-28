// import MDEditor from '@uiw/react-md-editor'

import { Link, routes } from '@redwoodjs/router'

export const beforeQuery = ({ size }) => {
  return { variables: { size: size ? parseInt(size) : 5 } }
}

export const QUERY = gql`
  query posts($size: Int!) {
    posts(size: $size) {
      id
      title
      body
      tag
    }
  }
`

export const Loading = () => <div>Loading...</div>
export const Empty = () => <div>Empty</div>
export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ posts }) => {
  return (
    <>
      {Array.isArray(posts)
        ? posts.map((post, ind) => (
            <Link key={ind.toString()} to={routes.post({ id: post.id })}>
              <p>
                {post.title} - {post.tag}
              </p>
            </Link>
          ))
        : null}
    </>
  )
}
