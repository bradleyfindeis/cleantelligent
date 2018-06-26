import React from 'react'

import './base.css'
import {
  Text
} from '../../../components'
import lapadphone from '../../../img/lapadphone.png'

export function Second() {
  return (
    <section className="second">
      {/* second mobile */}
      <div className="second-mobile">
        <Text
          mobile
          jumbo
          centered
          style={{
            top: '150px'
          }}
        >Use CleanTelligent on all of your devices, anywhere.</Text>
        <Text
          mobile
          subtitle
          centered
          style={{
            top: '165px',
            width: '75%'
          }}
        >CleanTelligent is web-based software, accessible through your Internet browser or mobile device. Do quality inspections, work orders, reports and much more with our suite of tools.</Text>
      </div>
      <div className="second-text">
        <Text
          jumbo
          centered
          style={{
            top: '150px'
          }}
        >Use CleanTelligent on all of your devices, anywhere.</Text>
        <Text
          subtitle
          centered
          style={{
            top: '165px',
            width: '75%'
          }}
        >CleanTelligent is web-based software, accessible through your Internet browser or mobile device. Do quality inspections, work orders, reports and much more with our suite of tools.</Text></div>
      <img
        src={lapadphone}
        alt="hardware render"
        className='lapadphone'
      />
    </section>
  )
}