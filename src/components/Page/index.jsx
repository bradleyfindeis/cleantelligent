import React from 'react'

import './base.css'
import { Nav } from '../'

export const Page = ({ children }) => (
  <React.Fragment>
    <Nav />
    {children}
  </React.Fragment>
)