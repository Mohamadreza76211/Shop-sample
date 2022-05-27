import React from 'react'
import { useSelector } from 'react-redux'
import LightGreenContainer from './redux-ForContainerAfterRedSlider/LightGreenContainer'

const LeftContentAfterRedSlider = () => {

    const images=useSelector(state=>state)

  return (
    <div className='Content'>
        <LightGreenContainer>
            <div className='ContentForImages'>
                {images.map((item)=>{
                    return(
                        <a href='#'>
                            <div className='Images'>
                                {item.image}
                            </div>
                        </a>
                    )
                })}
            </div>
        </LightGreenContainer>
    </div>
  )
}

export default LeftContentAfterRedSlider