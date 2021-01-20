export const beforeQuery = ({ size }) => {
  return { variables: { size: size ? parseInt(size) : 2 } }
}

export const QUERY = gql`
  query post($size: Int!) {
    posts(size: $size) {
      data {
        title
        body
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>
export const Empty = () => <div>Empty</div>
export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ posts }) => {
  const { data } = posts
  return data.map((post, ind) => (
    <div key={ind.toString()}>
      <header>
        <h2>{post.title}</h2>
      </header>
      <p>{post.body}</p>
    </div>
  ))
}
