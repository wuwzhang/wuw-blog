export const QUERY = gql`
  query findPostsByCatalog($catalog: String!) {
    findPostsByCatalog(catalog: $catalog) {
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

export const Success = ({ blogCatalogPosts }) => {
  return JSON.stringify(blogCatalogPosts)
}
