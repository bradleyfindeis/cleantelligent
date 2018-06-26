import React from 'react'

import './base.css'
import { MiniNav } from '../MiniNav'
import {
  Card,
  Text
} from '../../../components'
import iMac from '../../../img/imac.png'

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
        <div className="text-group">
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
        </div>
        <div className="mobile-text-group">
          <Text
            mobile
            jumbo
            light
            centered
          >Why Do I need CleanTelligent?</Text>
          <Text
            mobile
            subtitle
            light
            centered
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quisquam ipsa, aspernatur incidunt nostrum iure modi.</Text>
        </div>
        <MiniNav
          current={this.state.why}
          handleClick={this.handleChangeWhy}
        />
        <div className='imac-disp'>
          <Card
            mobile
          >
            card</Card>
          <img
            src={iMac}
            alt="imac render"
            className='img-iMac'
          />
        </div>
      </Card>
    )
  }
}
