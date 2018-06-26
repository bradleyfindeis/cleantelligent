import React from 'react'
import CountUp from 'react-countup'
import Waypoint from 'react-waypoint'

import './base.css'
import {
  Text,
  Card,
} from '../../../components'
import { Counter } from './Counter'

const initialState = {
  waypoint: false
}

export class Fourth extends React.Component {
  state = initialState

  render = () => {
    return (
      <div className="fourth">
        <Text
          body
          centered
          style={{
            top: '3%'
          }}
        >
          For over <strong>fifteen years</strong> we've helped cleaning businesses succeed and grow. CleanTelligent is the most <strong>award-winning, comprehensive</strong> quality control and janitorial software solution.
        </Text>
        <div className="mobile-text">
          <Text
            mobile
            jumbo
            centered
          >For over <strong>fifteen years</strong> we've helped cleaning businesses succeed and grow. CleanTelligent is the most <strong>award-winning, comprehensive</strong> quality control and janitorial software solution.</Text>
        </div>
        <Waypoint onEnter={() => {this.setState({waypoint: true})}}/>
        {this.state.waypoint && (
          <div className="counters">
            <Counter
              start={0}
              end={33}
              duration={3}
              adornment='K'
              info='TOTAL USERS'
            />
            <Counter
              start={0}
              end={4.6}
              duration={2}
              decimals={1}
              adornment='M'
              info='INSPECTIONS PERFORMED'
            />
            <Counter
              start={0}
              end={5.6}
              duration={3}
              decimals={1}
              adornment='M'
              info='WORK ORDERS SUBMITTED'
            />
            <Counter
              start={0}
              end={145}
              duration={3.2}
              adornment='K'
              info='SERVICE LOCATIONS'
            />
          </div>
        )}
        <div className="comments">
          <Card comment></Card>
          <Card comment></Card>
          <Card comment></Card>
          <Card comment></Card>
        </div>
      </div>
    )
  }
}