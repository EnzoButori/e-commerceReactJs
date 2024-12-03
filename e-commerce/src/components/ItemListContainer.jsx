import React from 'react'
import { data } from '../data'
import '../index.css'

const ItemListContainer = () => {
    return (
        <div className='container-items'>
            {data.map(product => (
                <div className="item" key={product.id}>
                    <figure className='product-img'>
                        <img src={product.urlImage} alt={product.nameProduct} />
                    </figure>

                    <div className="info-product">
                        <h2>{product.nameProduct}</h2>
                        <p className='price'>${product.price}</p>

                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemListContainer 