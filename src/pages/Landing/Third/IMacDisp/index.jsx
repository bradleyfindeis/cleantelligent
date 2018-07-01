import React from 'react'

import './base.css'
import { Button } from '../../../../components'
import organization from '../../../../img/Mac.png'

const images = {
  //detection,
  //efficiency,
  //competitiveness,
  organization
}

export const IMacDisp = ({ current }) => {
  return (
    <div className="imac-disp">
      <img src={images[current]} className='img-iMac'/>
      <Button 
        label='free demo'
        blue
        medium
      />
    </div>
  )
}