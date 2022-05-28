import React from 'react'
import { useSelector } from 'react-redux'
import './ProductWithHook.scss'

const ProductsWithHook = () => {

    const products=useSelector(state=>state)

  return (
    <div className='ContainerForIcons col-sm-11'>
        {products.map((item)=>{
            return(
                <div>
                    <div className='Icons'>
                        <a href='#'>
                            {item.image}
                        </a> 
                    </div>
                    <div>
                        <h4 className='ContentForIcons'>{item.content}</h4>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default ProductsWithHook