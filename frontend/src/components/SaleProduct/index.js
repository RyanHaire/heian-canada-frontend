import React from 'react'
import { Image, Badge } from 'react-bootstrap'

const Product = ({title, priceNew, priceUsed, onSale}) => {
    return (
        <div className="multiple-machine sale-machine">
            <Image src="https://via.placeholder.com/350"
                className="img-cover"
                rounded/>
                <Badge variant="danger" className="sale-badge">Sale</Badge>
            <div className="ml-1 mt-2">
                <h3 className="text-no-transform">{title}</h3>
                <h4 className="text-no-transform">Price: ${priceUsed} <span className="price-before">${priceNew}</span></h4>
            </div>
        </div>
    )
}

export default Product
