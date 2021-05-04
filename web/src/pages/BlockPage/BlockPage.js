import { Col, Row } from 'antd'
import { useState } from 'react'
import BG from 'src/components/TextBG'
import BlogLayout from 'src/layouts/BlogLayout/BlogLayout'

import { PlaceHolder, ItemC, Item } from './styled'

const BlockPage = () => {
  const [checked, setChecked] = useState('font')

  const ITEMS = [
    { key: 'font', label: 'Font - 字体', com: () => <BG show={true} /> },
    { key: 'gradient', label: 'Gradient - 渐变', com: () => <>gradient</> },
  ]

  const ITEM_OBJ = ITEMS.reduce((a, c) => ({ ...a, [c.key]: c }), {})

  return (
    <BlogLayout>
      <Row style={{ height: '100%' }}>
        <Col xs={0} md={4}>
          <ItemC>
            {ITEMS.map((v) => (
              <Item
                key={v.key}
                onClick={() => setChecked(v.key)}
                checked={v.key === checked}
              >
                {v.label}
              </Item>
            ))}
          </ItemC>
        </Col>
        <Col xs={24} md={20} style={{ height: '100%' }}>
          <PlaceHolder>{ITEM_OBJ[checked].com()}</PlaceHolder>
        </Col>
      </Row>
    </BlogLayout>
  )
}

export default BlockPage
