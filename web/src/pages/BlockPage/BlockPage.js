import { Button, Col, Row, Divider } from 'antd'
import { useState } from 'react'
import Text from 'src/components/Text'
import Ellipsis from 'src/components/Ellipsis'
import Gradient from 'src/components/Gradient'
import BlogLayout from 'src/layouts/BlogLayout/BlogLayout'

import { PlaceHolder, ItemC, Item } from './styled'

const BlockPage = () => {
  const [checked, setChecked] = useState('font')

  const ITEMS = [
    {
      key: 'font',
      label: 'Font - 字体',
      com: () => <Text show={true} />,
      demos: [
        { url: 'https://codepen.io/wuw/pen/QWdPrXq', title: 'text-decoration' },
        { url: 'https://codepen.io/wuw/pen/jOyRvRG', title: '字体特效' },
      ],
    },
    {
      key: 'gradient',
      label: 'Gradient - 渐变',
      com: () => <Gradient />,
      demos: [],
    },
    {
      key: 'ellipsis',
      label: 'Ellipsis - 省略',
      com: () => <Ellipsis />,
      demos: [{ url: 'https://codepen.io/wuw/pen/xxqxrzN', title: '文字省略' }],
    },
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
          {ITEM_OBJ[checked].demos?.length ? (
            <Row>
              {ITEM_OBJ[checked].demos.map((v, i) => (
                <section key={i}>
                  <a src={v.url}>
                    <Button type="link">codepen {v.title}</Button>
                  </a>
                  {i !== ITEM_OBJ[checked].demos.length - 1 && (
                    <Divider type="vertical" />
                  )}
                </section>
              ))}
            </Row>
          ) : null}
          <PlaceHolder>{ITEM_OBJ[checked].com()}</PlaceHolder>
        </Col>
      </Row>
    </BlogLayout>
  )
}

export default BlockPage
