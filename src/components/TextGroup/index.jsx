import React from 'react'

import './base.css'

export const TextGroup = ({ children }) => {
  const mobileChildren = React.Children.map(children, child => (
    React.cloneElement(child, {
      mobile: true
    })
  ))

  return (
    <div className="text-group">
      <div className="desktop">
        {children}
      </div>
      <div className="mobile">
        {mobileChildren}
      </div>
    </div>
  )
}