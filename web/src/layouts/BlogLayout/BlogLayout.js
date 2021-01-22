import { Link, routes } from '@redwoodjs/router'

const BlogLayout = ({ children }) => {
  return (
    <>
      <header style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <h2>wuw's blog 🚀</h2>
        <nav>
          <ul style={{ display: 'flex' }}>
            <li style={{ width: '80px' }}>
              <Link to={routes.home()}>Home</Link>
            </li>
            <li style={{ width: '80px' }}>
              <Link to={routes.about()}>About</Link>
            </li>
            <li style={{ width: '80px' }}>
              <Link to={routes.edit()}>Edit</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <div>{children}</div>
      </main>
    </>
  )
}

export default BlogLayout
