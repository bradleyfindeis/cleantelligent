import React from 'react'

import './base.css'
import { 
  Text,
  TextGroup,
  Card 
} from '../../../../components'
import organization from '../../../../img/imac.png'
// import competitiveness from '../../../../img/competitiveness.png'
// import efficiency from '../../../../img/efficiency.png'
// import detection from '../../../../img/detection.png'

const options = {
  organization: (
    <Card
      mobile
    >
      <TextGroup>
        <Text
          body
        >
          organization
        </Text>
      </TextGroup>
    </Card>
  ),
  competitiveness: (
    <Card
      mobile
    >
      <TextGroup>
        <Text
          body
        >
          competitiveness
        </Text>
      </TextGroup>
    </Card>
  ),
  detection: (
    <Card
      mobile
    >
      <TextGroup>
        <Text
          body
        >
          detection
        </Text>
      </TextGroup>
    </Card>
  ),
  efficiency: (
    <Card
      mobile
    >
      <TextGroup>
        <Text
          body
        >
          efficiency
        </Text>
      </TextGroup>
    </Card>
  )
}

const images = {
  //detection,
  //efficiency,
  //competitiveness,
  organization
}

export const IMacDisp = ({ current }) => {
  return (
    <div className="imac-disp">
      {options[current]}
      <img src={images[current]} className='img-iMac'/>
    </div>
  )
}