import React from 'react'

import './base.css'

export class Card extends React.Component {
  render = () => {
    return (
      <div 
        className="card"
        {...this.props.style}
      >
        {this.props.children()}
      </div>
    ) 
  }
}