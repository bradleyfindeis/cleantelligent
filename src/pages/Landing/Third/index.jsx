import React from 'react'

import './base.css'
import { MiniNav } from '../MiniNav'
import {
  Card,
  TextGroup,
  Text
} from '../../../components'
import { IMacDisp } from './IMacDisp'

const initialState = {
  why: 'organization'
}

export class Third extends React.Component {
  state = initialState

  handleChangeWhy = ({ label }) => {
    this.setState({
      why: label
    })
  }

  render = () => {
    return (
      <Card
        className='third'
        jumbo
        angled
      >
        <TextGroup>
          <Text
            jumbo
            light
            centered
          >Why Do I need CleanTelligent?</Text>
          <Text
            subtitle
            light
            centered
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quisquam ipsa, aspernatur incidunt nostrum iure modi.</Text>
        </TextGroup>
        <MiniNav
          current={this.state.why}
          handleClick={this.handleChangeWhy}
        />
        <IMacDisp current={this.state.why}/>
      </Card>
    )
  }
}
