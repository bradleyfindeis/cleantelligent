import React from 'react'
import ReactDOM from 'react-dom'
import { 
  HashRouter as Router, 
  Route
} from 'react-router-dom'
import styled from 'styled-components'

import { Landing } from './views'

function App(){
  const Main = styled.main`
    box-sizing: border-box;
    &:after, &:before {
      box-sizing: inherit;
    };
    margin: 0;
    padding: 0;
  `

  return (
    <Router>
      <Main>
        <Route 
          exact
          path='/'
          component={Landing}
        />
      </Main>
    </Router>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)