import BlogPostsCell from 'src/components/BlogPostsCell/BlogPostsCell.js'
import BG from 'src/components/TextBG'
import BlogLayout from 'src/layouts/BlogLayout/BlogLayout.js'

const HomePage = () => {
  return (
    <BlogLayout>
      <section className="mt-12 pw-24" style={{ height: 420 }}>
        <p className="font-lg">最近更新</p>
        <BlogPostsCell />
      </section>
      <section style={{ height: 'calc(100% - 432px)' }}>
        <BG />
      </section>
    </BlogLayout>
  )
}

export default HomePage
