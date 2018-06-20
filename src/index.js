import React from 'react'
import ReactDOM from 'react-dom'
import {
  HashRouter as Router,
  Route
} from 'react-router-dom'

import './global.css'
import { Landing } from './pages'

const App = () => (
  <Router>
    <main className='App'>
      <Route
        exact
        path='/'
        component={Landing}
      />
    </main>
  </Router>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)