import React from 'react'

export const Split = ({
  primary = () => null,
  secondary = () => null,
  horizontal = false,
  split = 50,
  style = {}
}) => {
  const flexDirection = horizontal ?
    'column' :
    'row'
  const primHeight = horizontal ?
    `${split}%` :
    '100%'
  const primWidth = horizontal ?
    `${split}%` :
    '100%'
  const secHeight = horizontal ?
    `${100 - split}%` :
    '100%'
  const secWidth = horizontal ?
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
        // overflow: 'scroll'
      }}>
        {primary()}
      </div>
      <div style={{
        height: secHeight,
        width: secWidth,
        // overflow: 'scroll',
        position: 'relative'
      }}>
        {secondary()}
      </div>
    </div>
  )
}