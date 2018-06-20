import React from 'react'

import './styles/base.css'

export class Button extends React.Component {
  render = () => {
    const {
      label,
      size,
      filled,
    } = this.props

    return (
      <button
        className={`button ${size} ${filled && 'filled'}`}
        {...this.props}
      >
        {label.toUpperCase()}
      </button>
    )
  }
}