import React from 'react'

export const Split = ({
  primary = () => null,
  secondary = () => null,
  direction = 'vertical',
  split = 50,
  style = {}
}) => {
  const flexDirection = direction === 'horizontal' ?
    'column' :
    'row'
  const primHeight = direction === 'horizontal' ?
    `${split}%` :
    '100%'
  const primWidth = direction === 'vertical' ?
    `${split}%` :
    '100%'
  const secHeight = direction === 'horizontal' ?
    `${100 - split}%` :
    '100%'
  const secWidth = direction === 'vertical' ?
    `${100 - split}%` :
    '100%'

  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection,
      justifyContent: 'center',
      alignItems: 'center',
      ...style
    }}>
      <div style={{
        height: primHeight,
        width: primWidth,
        position: 'relative',
        overflow: 'scroll'
      }}>
        {primary()}
      </div>
      <div style={{
        height: secHeight,
        width: secWidth,
        overflow: 'scroll',
        position: 'relative'
      }}>
        {secondary()}
      </div>
    </div>
  )
}