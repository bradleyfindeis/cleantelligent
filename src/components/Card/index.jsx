import React from 'react'

import './base.css'

export class Card extends React.Component {
  render = () => {
    return (
      <div
        className={`card${this.props.mobile ? ' mobile' : ''}${this.props.comment ? ' comment' : ''}${this.props.jumbo ? ' jumbo' : ''}${this.props.angled ? ' angled' : ''}`}
      >
        {this.props.children}
      </div>
    )
  }
}