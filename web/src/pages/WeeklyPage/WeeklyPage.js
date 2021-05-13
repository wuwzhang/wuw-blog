
import BlogPostsCell from 'src/components/BlogPostsCell/BlogPostsCell.js'
// import BlogCatalogPostsCell from 'src/components/BlogCatalogPostsCell/BlogCatalogPostsCell.js'
import BlogLayout from 'src/layouts/BlogLayout/BlogLayout.js'

const WeeklyPage = () => {
  return (
    <BlogLayout>
      <BlogPostsCell catalog="每周资讯" size={5} />
    </BlogLayout>
  )
}

export default WeeklyPage
