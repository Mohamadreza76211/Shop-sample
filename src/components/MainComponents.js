import Gif from './header/Gif'
import React from 'react'
import MainSlider from './body/MainSlider'
import Carousel from './body/Carousel'
import IconsAfterSlider from './header/IconsAfterSlider'
import { Provider } from 'react-redux'
import Store from '../redux-ForIconsBeforeRedSlider/Store'
import StoreAf from '../redux-ForContainerAfterRedSlider/redux-ForRightContents/StoreAf'
import LightGreenContainer from '../redux-ForContainerAfterRedSlider/LightGreenContainer'
import LeftContentAfterRedSlider from '../LeftContentAfterRedSlider'
import ProductsWithHook from './header/ProductWithHook'
const MainComponents = () => {
  return (
    <div>
        <Gif/>
        <MainSlider/>
        <Provider store={Store}>
          <ProductsWithHook/>
        </Provider>
        <Carousel/>
        {/* <IconsAfterSlider/> */}
        <LightGreenContainer/>
        <Provider store={StoreAf}>
          <LeftContentAfterRedSlider/>
        </Provider>
        
    </div>
  )
}

export default MainComponents