import { Link, routes } from '@redwoodjs/router'
import MDEditor from '@uiw/react-md-editor'
import { Card, Col, Row, Space } from 'antd'

export const beforeQuery = ({ size, catalog }) => {
  return { variables: { size: size ? parseInt(size) : 5, catalog } }
}

export const QUERY = gql`
  query posts($size: Int!, $catalog: String!) {
    posts(size: $size, catalog: $catalog) {
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

export const Success = ({ posts }) => {
  return (
    <Row>
      <Col md={20} xs={12}>
        <Space direction="vertical">
          {Array.isArray(posts)
            ? posts.map((v, ind) => (
                <Link key={ind.toString()} to={routes.post({ id: v.id })}>
                  <Card title={v.title} key={v.id}>
                    <MDEditor.Markdown source={v.body.slice(0, 200)} />
                  </Card>
                </Link>
              ))
            : null}
        </Space>
      </Col>
      <Col md={4} xs={0}></Col>
    </Row>
  )
}
