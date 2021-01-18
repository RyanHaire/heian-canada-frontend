import React from 'react'
import { Image, Badge } from 'react-bootstrap'

const Product = ({img, title, priceNew, priceUsed, onSale, className}) => {
    return (
        <div className={className}>
            <Image src={img}
                className="img-cover"
                rounded/>
                { onSale && <Badge variant="danger" className="sale-badge">Sale</Badge>}
            <div className="ml-1 mt-2">
                <h3 className="text-no-transform">{title}</h3>
                <h4 className="text-no-transform">
                    {priceUsed !== undefined &&<span>Price: ${priceUsed} </span>} 
                    <span className={ onSale ? 'price-before'  :  ''}>{!onSale && priceNew != undefined && <span>Price: $</span>}{priceNew}</span>
                </h4>
            </div>
        </div>
    )
}

export default Product
