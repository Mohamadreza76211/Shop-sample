import React from 'react'
import t1 from '../../src/utility/images/digiclub.png'
import t2 from '../../src/utility/images/digiplus.png'
import t3 from '../../src/utility/images/mamoriat.png'
import t4 from '../../src/utility/images/digikalamehr.png'
import t5 from '../../src/utility/images/digipay.png'
import t6 from '../../src/utility/images/digistyle.png'
import t7 from '../../src/utility/images/digikalajet.png'
import './ImageReducer.scss'

const INITIAL_STATE=[
    {image:<img src={t1}/>,content:"دیجی کلاب"},
    {image:<img src={t2}/>,content:"دیجی پلاس"},
    {image:<img src={t3}/>,content:"ماموریت"},
    {image:<img src={t4}/>,content:"دیجی کالامهر"},
    {image:<img src={t5}/>,content:"دیجی پی"},
    {image:<img src={t6}/>,content:"دیجی استایل"},
    {image:<img src={t7}/>,content:"دیجی کالاجت"},

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