import { Col, Row } from 'antd'
import PostDetailCell from 'src/components/PostDetailCell'

const PostPage = ({ id }) => {
  return (
    <section className="pw-24 mt-24">
      <Row justify="center">
        <Col xs={24} md={20} xl={18}>
          <PostDetailCell id={id} />
        </Col>
      </Row>
    </section>
  )
}

export default PostPage
