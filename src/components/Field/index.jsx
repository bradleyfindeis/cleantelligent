import React from 'react'
import { Field as FField } from 'formik'

import './base.css'

export class Field extends React.Component {
  render = () => {
    const {
      type,
      name
    } = this.props
    return (
      <FField
        name={name}
        render={({ field }) => {
          switch (type) {
            default:
              return (
                <input
                  type='text'
                  {...this.props}
                  {...field}
                />
              )

            case 'select':
              return (
                <select 
                  {...this.props}
                  {...field}
                >
                  {this.props.children}
                </select>
              )
          }
        }}
      />
    )
  }
}