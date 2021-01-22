import MDEditor from '@uiw/react-md-editor';

export const beforeQuery = ({ size }) => {
  return { variables: { size: size ? parseInt(size) : 3 } }
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
  return (
    <>
      <MDEditor.Markdown source={data[0].body} />
      {
        data.slice(1).map((post, ind) => (
          <div key={ind.toString()}>
            <p>{post.title}</p>
          </div>
        ))
      }
    </>
  )
}
