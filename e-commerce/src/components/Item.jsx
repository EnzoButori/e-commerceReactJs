import { Link } from 'react-router'
import { data } from '../data'

function Item ({ data }) {
    return (
        <div className='container-items'>
                {data.map(product => (
                    <div className="item" key={data.id}>
                        <figure className='product-img'>
                            <img src={data.urlImage} alt={data.nameProduct} />
                        </figure>
        
                        <div className="info-product">
                            <h2>{data.nameProduct}</h2>
                            <p className='price'>${data.price}</p>
        
                        </div>
        
                        <button as={Link} to={'/item/id'} style={{backgroundColor: bg, color: colorTexto}} className='botonDetail' type="button">Ver Detalles</button>
                    </div>
                ))}
        </div>
    )
}

export default Item