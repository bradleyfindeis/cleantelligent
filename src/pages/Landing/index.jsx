import React from 'react'

import {
  Page,
  Card,
  Form,
  Field,
  Text,
  Button
} from '../../components'
import './style.css'

const initialValues = {
  "test-select": '',
  "test-text": ''
}

class Landing extends React.Component {
  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    })
  }

  render = () => {
    return (
      // <Form
      //   style={{
      //     backgroundColor: 'grey'
      //   }}
      //   initialValues={initialValues}
      //   onSubmit={(values) => {
      //     console.log(values)
      //   }}
      // >
      //   <Field
      //     type='select'
      //     name='test-select'
      //   >
      //     <option value=''>How did you hear about us?</option>
      //     <option value="test">test</option>
      //     <option value="other">other</option>
      //   </Field>
      //   <Field name='test-text' />
      //   <Button
      //     label='request a demo'
      //     size='large'
      //     filled
      //     type='submit'
      //     placeholder='Name'
      //   />
      // </Form>
      <Page>
        <Card jumbo>
          <div className="textGroup">
            <Text
              jumbo
              light
              style={{
                top: '300px',
                left: '60px',
                width: '60%',
              }}
            >Janitorial software designed to empower your business</Text>
            <Text
              subtitle
              light
              style={{
                top: '315px',
                left: '60px',
                width: '65%'
              }}
            >Get the job done better. Save money, run your operations more smoothly, and prove contract compliance with CleanTelligent.</Text>
          </div>
        </Card>
      </Page>
    )
  }
}

export default Landing