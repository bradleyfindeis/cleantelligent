import React from 'react'
import { Field } from 'formik'

import './base.css'

export class Field extends React.Component {
  render = () => {
    const { type } = this.props
    return (
      <Field render={({ field }) => (
        <input 
          className={`${type === 'text' ? 'input' : 'select'}`}
          {...this.props}
          {...field}
        />
      )}/>
    )
  }
}