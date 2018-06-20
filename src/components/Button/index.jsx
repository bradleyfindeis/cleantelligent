import React from 'react'

import './styles/base.css'

export class Button extends React.Component {
  render = () => {
    const {
      label,
      size,
      filled,
      onClick
    } = this.props

    return (
      <button
        className={`button ${size} ${filled && 'filled'}`}
        onClick={onClick && onClick}
      >
        {label.toUpperCase()}
      </button>
    )
  }
}