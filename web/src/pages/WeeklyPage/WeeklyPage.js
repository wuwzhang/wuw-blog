import BlogPostsCell from 'src/components/BlogPostsCell/BlogPostsCell.js'
// import BlogCatalogPostsCell from 'src/components/BlogCatalogPostsCell/BlogCatalogPostsCell.js'
import BlogLayout from 'src/layouts/BlogLayout/BlogLayout.js'

const WeeklyPage = () => {
  return (
    <BlogLayout>
      {/* <BlogPostsCell size={10} /> */}
      <BlogPostsCell catalog="每周资讯" size={10} />
    </BlogLayout>
  )
}

export default WeeklyPage
