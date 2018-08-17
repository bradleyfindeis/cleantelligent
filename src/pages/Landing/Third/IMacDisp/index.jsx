import React from 'react'

import './base.css'
import { Button } from '../../../../components'
import organization from '../../../../img/Mac.png'
import Fade from 'react-reveal/Fade';

const images = {
  //detection,
  //efficiency,
  //competitiveness,
  organization
}

export const IMacDisp = ({ current }) => {
  return (
    <div className="imac-disp">
      <Fade>
        <img src={images[current]} className='img-iMac'/>
      </Fade>

      <Button 
        label='free demo'
        blue
        medium
      />
    </div>
  )
}