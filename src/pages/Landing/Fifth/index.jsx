import React from 'react'

import './base.css'
import {
  Card,
  Text,
  Form,
  Field,
  Button
} from '../../../components'

const initialValues = {
  name: '',
  email: '',
  phone: '',
  discovery: ''
}

export const Fifth = () => {
  return (
    <Card
      className='fifth'
      jumbo
      angled
    >
      <div className="text-group">
        <Text
          jumbo
          centered
          light
        >Get Started</Text>
        <Text
          subtitle
          centered
          light
        >
          Schedule a free demo today! Discover how CleanTelligent can simplify your life and cleaning business needs.
        </Text>
      </div>
      <div className="mobile-text-group">
        <Text
          jumbo
          mobile
          centered
          light
        >Get Started</Text>
        <Text
          subtitle
          mobile
          centered
          light
        >
          Schedule a free demo today! Discover how CleanTelligent can simplify your life and cleaning business needs.
        </Text>
      </div>
      <Form
        style={{
          backgroundColor: 'grey'
        }}
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        <div className="fields">
          <Field
            className='name'
            name='name'
            placeholder='Name'
          />
          <Field
            className='email'
            name='email'
            placeholder='Email'
          />
          <Field
            className='phone'
            name='phone'
            placeholder='Phone'
          />
          <Field
            className='discovery'
            type='select'
            name='discovery'
          >
            <option value=''>How did you hear about us?</option>
            <option value="test">test</option>
            <option value="other">other</option>
          </Field>
        </div>

        <Button
          label='request a demo'
          large
          filled
          type='submit'
          placeholder='Name'
        />
      </Form>
    </Card>
  )
}

