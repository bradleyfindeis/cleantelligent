import React from 'react'

import './base.css'

export const Icon = ({
  icon,
  light,
  style
}) => {
  const classNames = `fa fa-${icon}${light ? ' light' : ''}`

  return (
    <div 
      className='icon'
      style={style}
    >
      <i className={classNames}></i>
    </div>
  )
}