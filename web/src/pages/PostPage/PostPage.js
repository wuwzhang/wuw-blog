import PostDetailCell from 'src/components/PostDetailCell'

const PostPage = ({ id }) => {
  return (
    <section className="pw-24 mt-24">
      <PostDetailCell id={id} />
    </section>
  )
}

export default PostPage
