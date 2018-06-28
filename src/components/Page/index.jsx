import React from 'react'

import './base.css'
import { 
  Nav,
  Footer
} from '../'

export const Page = ({ children, className }) => (
  <main className={className}>
    <Nav />
    {children}
    <Footer />
  </main>
)