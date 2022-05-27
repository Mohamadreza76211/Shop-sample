import React from 'react'
import './LightGreenContainer.scss'

const LightGreenContainer = (props) => {
  return (
    <div className='ContainerForThisRedux w-100'>
        {props.children}
    </div>
  )
}

export default LightGreenContainer