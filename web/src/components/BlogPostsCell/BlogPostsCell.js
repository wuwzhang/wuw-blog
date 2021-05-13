import { Link, routes } from '@redwoodjs/router'
import MDEditor from '@uiw/react-md-editor'
import { Card, Col, Divider, Pagination, Row, Space } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import { useState } from 'react'
import { Container, LineItem, ItemContainer } from './styled'

const PAGE_SIZE = 5

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
  const [pageNum, setPageNum] = useState(1)

  return (
    <Container>
      <ItemContainer justify="center" style={{ width: '100%' }}>
        <Col md={20} xs={24}>
          <Space direction="vertical" style={{ width: '100%' }}>
            {Array.isArray(posts)
              ? posts
                  .slice((pageNum - 1) * PAGE_SIZE, pageNum * PAGE_SIZE)
                  .map((v, ind) => (
                    <Link key={ind.toString()} to={routes.post({ id: v.id })}>
                      <Card key={v.id}>
                        <Space direction="vertical" style={{ width: '100%' }}>
                          <Row style={{ width: '100%' }}>
                            <Space style={{ width: '100%' }}>
                              <Avatar>{v.tag?.slice(0, 1) || 'W'}</Avatar>
                              <section style={{ marginRight: 5 }}>
                                <LineItem>{v.title}</LineItem>
                                <section>{v.catalog}</section>
                              </section>
                            </Space>
                          </Row>
                          <MDEditor.Markdown source={v.body.slice(0, 80)} />
                        </Space>
                      </Card>
                    </Link>
                  ))
              : null}
          </Space>
        </Col>
      </ItemContainer>
      <Divider />
      <Row justify="center" style={{ width: '100%' }}>
        <Pagination
          current={pageNum}
          pageSize={5}
          total={posts.length}
          onChange={(v) => setPageNum(v)}
        />
      </Row>
    </Container>
  )
}
