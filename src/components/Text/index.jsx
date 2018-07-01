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
  hero,
}) => {
  const classNames = `text${jumbo ? ' jumbo' : ''}${subtitle ? ' subtitle' : ''}${option ? ' option' : ''}${fineprint ? ' fineprint' : ''}${body ? ' body' : ''}${light ? ' light' : ''}${centered ? ' centered' : ''}${mobile ? ' mobile' : ''}${hero ? ' hero' : ''}`

  return (
    <div 
      className={classNames}
    >
      {option ? children.toUpperCase() : children}
    </div>
  )
}