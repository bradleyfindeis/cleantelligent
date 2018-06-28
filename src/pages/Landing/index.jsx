import React from 'react'

import './style.css'
import { Page } from '../../components'
import { Top } from './Top'
import { Second } from './Second'
import { Third } from './Third'
import { Fourth } from './Fourth'
import { Fifth } from './Fifth'

class Landing extends React.Component {
  render = () => {
    return (
      <Page className='landing'>
        <Top />
        <Second />
        <Third />
        <Fourth />
        <Fifth />
      </Page>
    )
  }
}

export default Landing