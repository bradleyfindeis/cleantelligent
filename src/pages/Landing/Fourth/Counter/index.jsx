import React from 'react'
import CountUp from 'react-countup'

import './base.css'

export const Counter = ({
  start,
  end,
  duration,
  decimals,
  adornment,
  info
}) => {
  return (
    <div className="counter">
      <CountUp
        className='number'
        start={start}
        end={end}
        duration={duration}
        decimals={decimals}
        suffix={adornment}
      />
      <span className='info'>{info}</span>
    </div>
  )
}