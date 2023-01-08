import BlogPostsCell from 'src/components/BlogPostsCell/BlogPostsCell.js'
// import BlogCatalogPostsCell from 'src/components/BlogCatalogPostsCell/BlogCatalogPostsCell.js'
import BlogLayout from 'src/layouts/BlogLayout/BlogLayout.js'

const CollectPage = () => {
  return (
    <BlogLayout>
      <BlogPostsCell catalog="collect" size={10} />
    </BlogLayout>
  )
}

export default CollectPage
