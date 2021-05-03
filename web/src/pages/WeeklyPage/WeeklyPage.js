import { Link, routes } from '@redwoodjs/router'
import BlogLayout from 'src/layouts/BlogLayout/BlogLayout'

const WeeklyPage = () => {
  return (
    <BlogLayout>
      <h1>WeeklyPage</h1>
      <p>
        Find me in <code>./web/src/pages/WeeklyPage/WeeklyPage.js</code>
      </p>
      <p>
        My default route is named <code>weekly</code>, link to me with `
        <Link to={routes.weekly()}>Weekly</Link>`
      </p>
    </BlogLayout>
  )
}

export default WeeklyPage
