import React from 'react'

import './base.css'
import {
  Card,
  Text,
  TextGroup,
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

function handleSubmit(values) {
  /**
   * @todo
   */
  console.log(values)
}

export const Fifth = () => {
  return (
    <Card
      className='fifth'
      jumbo
      angled
    >
      <TextGroup>
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
      </TextGroup>
      <Form
        style={{
          backgroundColor: 'grey'
        }}
        initialValues={initialValues}
        onSubmit={handleSubmit}
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

