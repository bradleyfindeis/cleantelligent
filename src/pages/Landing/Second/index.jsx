import React from 'react'
import MacisCool from 'react-reveal/Fade';

import './base.css'
import {
  Text,
  TextGroup
} from '../../../components'
import lapadphone from '../../../img/lapadphone.png'

export function Second() {
  return (
    <section className="second">
      {/* second mobile */}
      <TextGroup>
        <div style={{paddingLeft: 350, paddingRight: 350}}>
          <Text
            jumbo
            centered
          >Use CleanTelligent on all of your devices, anywhere.</Text>
        </div>
        <div style={{paddingLeft: 300, paddingRight: 300, marginBottom: 50}}>
          <Text
            subtitle
            centered
          >CleanTelligent is web-based software, accessible through your Internet browser or mobile device. Do quality inspections, work orders, reports and much more with our suite of tools.</Text>
        </div>
      </TextGroup>
      <MacisCool>
          <img
            src={lapadphone}
            alt="hardware render"
            className='lapadphone'
          />
        </MacisCool>
    </section>
  )
}