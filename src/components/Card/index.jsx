import React from 'react'

import './base.css'

export class Card extends React.Component {
  render = () => {
    const {
      jumbo,
      angled,
      className,
      children
    } = this.props
    return (
      <div
        className={`card${jumbo ? ' jumbo' : ''}${angled ? ' angled' : ''}${className ? ` ${className}` : ''}`}
      >
        {angled ? (
          <div className={`content ${className ? ` ${className}` : ''}`}>
            {children}
          </div>
        ) : children}
      </div>
    )
  }
}