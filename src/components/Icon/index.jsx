import React from 'react'

import './base.css'

export const Icon = ({
  icon,
  light,
  brand
}) => {
  const classNames = `fa${brand ? 'b' : ''} fa-${icon}${light ? ' light' : ''}`

  return (
    <div
      className='icon'
    >
      <i className={classNames}></i>
    </div>
  )
}