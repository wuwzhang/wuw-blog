// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/collect" page={CollectPage} name="collect" />
      <Route path="/books" page={BooksPage} name="books" />
      <Route path="/weekly" page={WeeklyPage} name="weekly" />
      <Route path="/block" page={BlockPage} name="block" />
      <Route path="/post/{id}" page={PostPage} name="post" />
      <Route path="/edit" page={EditPage} name="edit" />
      <Route path="/about" page={AboutPage} name="about" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
