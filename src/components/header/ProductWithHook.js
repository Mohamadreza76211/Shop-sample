import React from 'react'
import { useSelector } from 'react-redux'

const ProductsWithHook = () => {

    const products=useSelector(state=>state)

  return (
    <div className='ContainerForIcons'>
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