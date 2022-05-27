import React from 'react'
import { connect } from 'react-redux'

const ProductsWithoutHook = (props) => {
    return (
        <div className='ContainerForIcons'>
            {
                props.products.map(item => {
                return (
                        <div>
                            <div className='Icons'>
                                <a href='#'>
                                    {item.image}
                                </a>  
                            </div>
                            <div>
                                <h4 className='Content'>{item.content}</h4>
                            </div>
                       </div>
                )})
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        products: state
    }
}

export default connect (mapStateToProps)(ProductsWithoutHook) //HOC (Higher Order Component)