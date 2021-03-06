import { useMutation } from '@redwoodjs/web'
import MDEditor from '@uiw/react-md-editor'
import { Button, Input, Space } from 'antd'
import React, { useState } from 'react'
import BlogLayout from 'src/layouts/BlogLayout/BlogLayout'

const CREATE_POST_MUTATION = gql`
  mutation CreatePostMutation(
    $title: String
    $body: String
    $tag: String
    $catalog: String
    $ind: Int
  ) {
    createPost(
      title: $title
      body: $body
      tag: $tag
      catalog: $catalog
      ind: $ind
    ) {
      id
    }
  }
`

const EditPage = () => {
  const [title, setTitle] = useState('')
  const [ind, setInd] = useState('')
  const [tag, setTag] = useState('')
  const [catalog, setCatalog] = useState('')
  const [value, setValue] = useState('')

  const [createPost] = useMutation(CREATE_POST_MUTATION)

  const onSubmit = async () => {
    createPost({
      variables: { title, body: value, tag, catalog, ind: +ind },
    })
  }

  return (
    <BlogLayout>
      <Space direction="vertical" className="w-full mt-12">
        <Space className="pw-12">
          <Input
            placeholder="标题"
            value={title}
            onChange={(v) => setTitle(v.target.value)}
          />
          <Input
            placeholder="表签"
            value={tag}
            onChange={(v) => setTag(v.target.value)}
          />
          <Input
            placeholder="分类"
            value={catalog}
            onChange={(v) => setCatalog(v.target.value)}
          />
          <Input
            placeholder="序号"
            value={ind}
            type="number"
            onChange={(v) => setInd(v.target.value)}
          />
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
