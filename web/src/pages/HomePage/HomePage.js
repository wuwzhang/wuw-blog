import BlogPostsCell from 'src/components/BlogPostsCell/BlogPostsCell.js'
import BlogLayout from 'src/layouts/BlogLayout'

const HomePage = () => {
  return (
    <BlogLayout>
      <p>Weekly</p>
      <BlogPostsCell />
    </BlogLayout>
  )
}

export default HomePage
