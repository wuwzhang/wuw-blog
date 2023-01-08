import React from 'react'

import { Menu, MenuItem, Container } from './styled'

import { Link, routes } from '@redwoodjs/router'

const Header = () => {
  const path = window.location.pathname
  const ROUTER = [
    // { key: 'home', label: '首页' },
    { key: 'weekly', label: '资讯' },
    { key: 'collect', label: '合集' },
    { key: 'block', label: '物料' },
    { key: 'books', label: '经典' },
    { key: 'about', label: '关于' },
  ]

  return (
    <Container>
      <section />
      <Menu>
        {ROUTER.map((v) => (
          <Link key={v.key} to={routes[v.key]()}>
            <MenuItem checked={path === routes[v.key]()}>{v.label}</MenuItem>
          </Link>
        ))}
      </Menu>
    </Container>
  )
}

export default Header
