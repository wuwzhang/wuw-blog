import { useMutation, useFlash } from '@redwoodjs/web'
import MDEditor from '@uiw/react-md-editor';
import React, { useState } from "react";

import { QUERY } from 'src/components/BlogPostsCell/BlogPostsCell'

const CREATE_POST_MUTATION = gql`
  mutation CreatePostMutation($title: String, $body: String) {
    createPost(title: $title, body: $body) {
      id
    }
  }
`

export default function Edit() {
  const [title, setTitle] = useState('')
  const [value, setValue] = useState("**Hello world!!!**");

  const { addMessage } = useFlash()

  const [createPost, { loading, error }] = useMutation(
    CREATE_POST_MUTATION,
    {
      onCompleted: () => {
        navigate('/')
        addMessage('Post created.', { classes: 'rw-flash-success' })
      },
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
    }
  )

  const onSubmit = async () => {
    createPost({ variables: { title, body: value } })
  }


  return (
    <section>
      <section>
        <input value={title} onChange={(v) => setTitle(v.target.value)} />
        <button onClick={onSubmit}>提交</button>
      </section>
      <MDEditor
        value={value}
        onChange={setValue}
        height={800}
      />
    </section>
  );
}
