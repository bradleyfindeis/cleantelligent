import React from 'react'

import './base.css'

export class Button extends React.Component {
  render = () => {
    const {
      label,
      medium,
      large,
      small,
      filled,
      ...rest
    } = this.props
    const classNames = `button${medium ? ' medium' : ''}${large ? ' large' : ''}${small ? ' small' : ''}${filled ? ' filled' : ''}`

    return (
      <button
        className={classNames}
        {...rest}
      >
        {label.toUpperCase()}
      </button>
    )
  }
}