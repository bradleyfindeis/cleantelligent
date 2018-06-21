import React from 'react'

import './base.css'

export const Text = ({
  children,
  jumbo,
  subtitle,
  option,
  light,
  fineprint,
  style
}) => {
  const classNames = `text${jumbo ? ' jumbo' : ''}${subtitle ? ' subtitle' : ''}${option ? ' option' : ''}${fineprint ? ' fineprint' : ''}${light ? ' light' : ''}`

  return (
    <span 
      className={classNames}
      style={style && style}
    >
      {option ? children.toUpperCase() : children}
    </span>
  )
}