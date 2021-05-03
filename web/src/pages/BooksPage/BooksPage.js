import { Link, routes } from '@redwoodjs/router'

const BooksPage = () => {
  return (
    <>
      <h1>BooksPage</h1>
      <p>
        Find me in <code>./web/src/pages/BooksPage/BooksPage.js</code>
      </p>
      <p>
        My default route is named <code>books</code>, link to me with `
        <Link to={routes.books()}>Books</Link>`
      </p>
    </>
  )
}

export default BooksPage
