import React from 'react'
import {
  Formik,
  Form as FForm
} from 'formik'


import './base.css'

export class Form extends React.Component {
  render = () => {
    const {
      initialValues,
      onSubmit,
      children,
      style
    } = this.props
    return (
      <Formik
        className='formik'
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <FForm 
          className='form'
        >
          {children}
        </FForm>
      </Formik>
    )
  }
}