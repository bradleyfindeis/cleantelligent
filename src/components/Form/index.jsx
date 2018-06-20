import React from 'react'
import {
  Formik,
  Form
} from 'formik'

import './base.css'

export class Form extends React.Component {
  render = () => {
    const {
      initialValues,
      onSubmit,
      children
    } = this.props
    return (
      <Formik
        className='formik'
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <Form className='form'>
          {children()}
        </Form>
      </Formik>
    )
  }
}