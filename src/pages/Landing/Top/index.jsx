import React from 'react'

import './base.css'
import Fade from 'react-reveal/Fade';
import {
  Card,
  Text,
  TextGroup,
  Button,
  Icon
} from '../../../components'
import iPhone1 from '../../../img/iphoneX_inspections.png'

export function Top() {
  console.log(document.body.style.width)
  return (
    <Card jumbo className='landing-top'>
      <div className="padding">
        <div className="info" style={{paddingTop: 400}}>
          <TextGroup centered>
            <Text
              hero
              light
            >Janitorial software designed to empower your business</Text>
            <Text
              subtitle
              light
            >Get the job done better. Save money, run your operations more smoothly, and prove contract compliance with CleanTelligent.</Text>
          </TextGroup>
          <div
            className='button-group'
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
          <div className="mobile-button-group">
            <Button
              large
              filled
              label='learn more'
              />
          </div>
          <div style={{marginTop: 50}}>
          <Icon
            light
            icon='angle-down'
            />
          </div>
        </div>
        <Fade>
          <img
            className='img-iPhone1'
            src={iPhone1}
            alt='iphone rendering'
            />
        </Fade>
      </div>
    </Card>
  )
}


 