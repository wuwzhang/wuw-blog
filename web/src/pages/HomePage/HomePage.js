import BlogPostsCell from 'src/components/BlogPostsCell/BlogPostsCell.js'
import BlogLayout from 'src/layouts/BlogLayout'

const HomePage = () => {
  return (
    <BlogLayout>
      <p>最近更新</p>
      <BlogPostsCell />
    </BlogLayout>
  )
}

export default HomePage
