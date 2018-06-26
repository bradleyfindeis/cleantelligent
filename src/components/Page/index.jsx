import React from 'react'

import './base.css'
import { 
  Nav,
  Footer
} from '../'

export const Page = ({ children }) => (
  <React.Fragment>
    <Nav />
    {children}
    <Footer />
  </React.Fragment>
)