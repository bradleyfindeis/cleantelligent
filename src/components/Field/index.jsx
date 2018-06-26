import React from 'react'
import { Field as FField } from 'formik'

import './base.css'

export class Field extends React.Component {
  render = () => {
    const {
      type,
      className,
      children,
      name,
      ...rest
    } = this.props
    return (
      <FField
        name={name}
        render={({ field }) => {
          switch (type) {
            default:
              return (
                <input
                  className={`field${className ? ` ${className}` : ''}`}
                  type='text'
                  {...rest}
                  {...field}
                />
              )

            case 'select':
              return (
                <select 
                  className={`field${className ? ` ${className}` : ''}`}
                  {...rest}
                  {...field}
                >
                  {children}
                </select>
              )
          }
        }}
      />
    )
  }
}