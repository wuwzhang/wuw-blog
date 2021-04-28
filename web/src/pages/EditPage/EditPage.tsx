import { useMutation } from '@redwoodjs/web'
import MDEditor from '@uiw/react-md-editor'
import { Button, Input, Space } from 'antd'
import React, { useState } from 'react'
import BlogLayout from 'src/layouts/BlogLayout/BlogLayout'

const CREATE_POST_MUTATION = gql`
  mutation CreatePostMutation($title: String, $body: String, $tag: String) {
    createPost(title: $title, body: $body, tag: $tag) {
      id
    }
  }
`

const EditPage = () => {
  const [title, setTitle] = useState<string>('')
  const [value, setValue] = useState<string>('**Hello world!!!**')

  const [createPost] = useMutation(CREATE_POST_MUTATION)

  const onSubmit = async () => {
    createPost({ variables: { title, body: value, tag: '道德经' } })
  }

  return (
    <BlogLayout>
      <Space direction="vertical" className="w-full mt-12">
        <Space className="pw-12">
          <Input value={title} onChange={(v) => setTitle(v.target.value)} />
          <Button onClick={onSubmit} type="primary">
            提交
          </Button>
        </Space>
        <MDEditor
          value={value}
          onChange={setValue}
          height="calc(100vh - 120px)"
        />
      </Space>
    </BlogLayout>
  )
}

export default EditPage
