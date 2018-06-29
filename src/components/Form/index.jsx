import React from 'react'
import {
  Formik,
  Form as FForm
} from 'formik'


export class Form extends React.Component {
  render = () => {
    const {
      initialValues,
      onSubmit,
      children,
      className,
    } = this.props
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <FForm className={`form${className ? ` ${className}` : ''}`}>
          {children}
        </FForm>
      </Formik>
    )
  }
}