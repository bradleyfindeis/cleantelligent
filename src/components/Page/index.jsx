import React from 'react'

import './base.css'
import { 
  Nav,
  Footer
} from '../'

export const Page = ({ children, className }) => (
  <main className={`page ${className}`}>
    <Nav />
    {children}
    <Footer />
  </main>
)