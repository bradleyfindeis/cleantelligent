import React from 'react'

import {
  Input,
  Button
} from '../components'

class Landing extends React.Component {
  state = {
    value: ''
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    })
  }

  render = () => {
    return (
      <Input
        type='text'
        value={this.state.value}
        
        onChange={this.handleChange}
        placeholder='Email'
      />
    )
  }
}

export default Landing