import { Layout } from 'antd'
import Header from 'src/components/Header'

const BlogLayout = ({ children }) => {
  return (
    <Layout>
      <Header />
      <section style={{ height: 'calc(100vh - 62px)', padding: '12px 0' }}>
        {children}
      </section>
    </Layout>
  )
}

export default BlogLayout
