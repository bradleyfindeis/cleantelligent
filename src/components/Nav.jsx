import React from 'react'
import styled from 'styled-components'

const initialState = {
  
}

const Main = styled.nav`
  width: 100%;
  height: 150px;
  padding-top: 50px;
  background: #454545;
`

export class Nav extends React.Component {
  state = initialState  

  render = () => (
    <Main />
  )
}
