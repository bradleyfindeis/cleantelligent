import React from 'react'

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
        <Text
          jumbo
          centered
        >Use CleanTelligent on all of your devices, anywhere.</Text>
        <Text
          subtitle
          centered
        >CleanTelligent is web-based software, accessible through your Internet browser or mobile device. Do quality inspections, work orders, reports and much more with our suite of tools.</Text>
      </TextGroup>
      <img
        src={lapadphone}
        alt="hardware render"
        className='lapadphone'
      />
    </section>
  )
}