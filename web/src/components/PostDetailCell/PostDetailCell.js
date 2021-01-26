import MDEditor from '@uiw/react-md-editor'

export const beforeQuery = ({ id }) => {
  return { variables: { id } }
}

export const QUERY = gql`
  query findPostByID($id: ID!) {
    findPostByID(id: $id) {
      title
      body
    }
  }
`

export const Loading = () => <div>Loading...</div>
export const Empty = () => <div>走丢了~</div>
export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ findPostByID }) => {
  // const { data } = findPostByID
  return (
    <>
      <MDEditor.Markdown source={findPostByID.body} />
    </>
  )
}
