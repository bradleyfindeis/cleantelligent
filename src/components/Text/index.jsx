import React from 'react'

import './base.css'

export const Text = ({
  children,
  jumbo,
  subtitle,
  option,
  light,
  body,
  mobile,
  fineprint,
  centered,
  style
}) => {
  const classNames = `text${jumbo ? ' jumbo' : ''}${subtitle ? ' subtitle' : ''}${option ? ' option' : ''}${fineprint ? ' fineprint' : ''}${body ? ' body' : ''}${light ? ' light' : ''}${centered ? ' centered' : ''}${mobile ? ' mobile' : ''}`

  return (
    <div 
      className={classNames}
      style={style && style}
    >
      {option ? children.toUpperCase() : children}
    </div>
  )
}