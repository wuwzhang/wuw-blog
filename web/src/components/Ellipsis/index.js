import React from 'react'
import { Container, Item, Tip } from './styled'

const Ellipsis = () => (
  <Container gutter={[24, 24]}>
    <Item xs={24} md={6}>
      <p>单行的文字溢出, 单行的文字溢出, 单行的文字溢出</p>
      <Tip show={true}>单行文字省略</Tip>
    </Item>
    <Item xs={24} md={6}>
      <p>
        多行的文字溢出, 多行的文字溢出, 多行的文字溢出, 多行的文字溢出,
        多行的文字溢出, 多行的文字溢出
      </p>
      <Tip show={true}>多行文字省略</Tip>
    </Item>
    <Item xs={24} md={6}>
      <p>
        整块文字省略 <span>react</span> <span>vue</span> <span>aaaaaaa</span>{' '}
        <span>bbbbbbbbb</span>
      </p>
      <Tip show={true}>整块文字省略</Tip>
    </Item>
  </Container>
)

export default Ellipsis
