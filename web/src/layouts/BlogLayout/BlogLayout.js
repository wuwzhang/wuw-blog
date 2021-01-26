import { Layout, Menu, Row } from 'antd'
import { Link, routes } from '@redwoodjs/router'

const { Content, Header } = Layout

const BlogLayout = ({ children }) => {
  return (
    <Layout>
      <Header>
        <Row justify="space-between">
          <section className="color-white font-lg">wuw blog 🚀</section>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item>
              <Link to={routes.home()}>Home</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to={routes.about()}>About</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to={routes.edit()}>Upload</Link>
            </Menu.Item>
          </Menu>
        </Row>
      </Header>
      <Content>{children}</Content>
    </Layout>
  )
}

export default BlogLayout
