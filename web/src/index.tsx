import ReactDOM from 'react-dom'
import { RedwoodProvider, FatalErrorBoundary } from '@redwoodjs/web'
import FatalErrorPage from 'src/pages/FatalErrorPage'
import { ThemeProvider } from 'theme-ui'
import theme from './theme/light'

import Routes from 'src/Routes'

import 'antd/dist/antd.css'
import './index.css'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <FatalErrorBoundary page={FatalErrorPage}>
      <RedwoodProvider>
        <Routes />
      </RedwoodProvider>
    </FatalErrorBoundary>
  </ThemeProvider>,
  document.getElementById('redwood-app')
)
