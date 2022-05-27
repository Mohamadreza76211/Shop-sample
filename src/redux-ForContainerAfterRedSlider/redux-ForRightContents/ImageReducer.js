import React from 'react'
import BasketImage from '../../utility/images/BasketImage.png'
import './ImageReducerForRightContents.scss'

//قسمت کانتنت درست شود

const INITIAL_STATE=[
    {image:<div className='Takhfif'><h1>تا 56% تخفیف</h1></div>},
    {image:<img src='https://www.digikala.com/statics/img/svg/typography/fresh.svg'/>},
    {image:<img src={BasketImage}/>},
]

const ImageReducer = (state=INITIAL_STATE,action) => {
    switch(action.type){
        case 'ADD_IMAGE':
            return [...state,{image:action.image,content:action.content}]
        default:
            return state
    }
}

export default ImageReducer