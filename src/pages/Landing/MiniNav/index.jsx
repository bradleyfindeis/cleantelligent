import React from 'react'

import './base.css'
import { Text } from '../../../components'

export const MiniNav = ({ current, handleClick }) => {
  const Opt = ({ label }) => {
    return (
      <li
        onClick={() => handleClick({ label })}
        name={label}
        className={`mini-nav-opt ${current === label ? ' active' : ''}`}
      >
        <Text option>
          {label}
        </Text>
        <Text 
          mobile
          option
        >
          {label}
        </Text>
      </li>
    )
  }

  return (
    <ul className='mini-nav'>
      <Opt label='detection' />
      <hr />
      <Opt label='organization' />
      <hr />
      <Opt label='competitiveness' />
      <hr />
      <Opt label='efficiency' />
    </ul>
  )
}
