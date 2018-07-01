import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

import './base.css'
import { 
  Button,
  Text
} from '../'
import Icon from '../../img/CT ICON white.png'
import Logo from '../../img/CT_Logo-01 copyyy.png'

const Brand = () => (
  <Fragment>
    <img className='icon' src={Icon} alt="" />
    <img className='logo' src={Logo} alt="" />
  </Fragment>
)

class Burger extends React.Component {
  state = {
    isActive: false
  }

  handleClick = () => {
    const { isActive } = this.state
    this.setState({
      isActive: !isActive
    })
  }
  
  render = () => {
    const { isActive } = this.state

    return (
      <button 
        className={`hamburger hamburger--emphatic${isActive ? ' is-active' : ''}`} 
        type='button'
        onClick={this.handleClick}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    )
  }
}

const Options = () => (
  <ul className='nav-opts'>
    <li>
      <NavLink
        className='nav-opt'
        to='#'
      >
        <Text 
          option
          light
        >solutions</Text>
      </NavLink>
    </li>
    <li>
      <NavLink
        className='nav-opt'
        to='#'
      >
        <Text 
          option
          light
        >pricing</Text>
      </NavLink>
    </li>
    <li>
      <NavLink
        className='nav-opt'
        to='#'
      >
        <Text 
          option
          light
        >resources</Text>  
      </NavLink>
    </li>
  </ul>
)

const Buttons = () => (
  <div>
    <Button
      filled
      label='demo'
      small
    />
    <Button
      label='login'
      small
    />
  </div>
)

export class Nav extends React.Component {
  render = () => {
    return (
      <nav>
        <div className="padding">
          <Burger />
          <div className='content'>
            <Brand />
            <Options />
            <Buttons />
          </div>
          <hr /></div>
      </nav>
    )
  }
}