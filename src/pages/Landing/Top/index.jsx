import React from 'react'

import './base.css'

import {
  Card,
  Text,
  Button,
  Icon
} from '../../../components'
import iPhone1 from '../../../img/iphoneX_inspections.png'

export function Top() {
  return (
    <Card jumbo className='landing-top'>
      <div className='top-left'>
        <div className='text-group'
        >
          <Text
            jumbo
            light
          >Janitorial software designed to empower your business</Text>
          <Text
            subtitle
            light
          >Get the job done better. Save money, run your operations more smoothly, and prove contract compliance with CleanTelligent.</Text>
        </div>
        <div
          className='buttonGroup'
        >
          <Button
            filled
            small
            label='request a demo'
          />
          <Button
            small
            label='learn more'
          />
        </div>
        <Icon
          light
          icon='angle-down'
        />
      </div>
      {/* mobile top */}
      <div className="mobile-top">
        <div className="text-group">
          <Text
            mobile
            centered
            jumbo
            light
          >Janitorial software designed to empower your business</Text>
          <Text
            mobile
            centered
            subtitle
            light
          >CleanTelligent is the most award-winning, comprehensive quality control and janitorial software solution on the market.</Text>
        </div>
        <Button 
          filled
          large
          label='learn more'
        />
      </div>
      <img
        className='img-iPhone1'
        src={iPhone1}
        alt='iphone rendering'
      />
    </Card>
  )
}

