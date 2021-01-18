import React from 'react'
import { Image, Badge } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import './index.css'

const Product = ({img, title, priceNew, priceUsed, onSale, className}) => {
    return (
        <Link to="/" className="machine-link">
            <div className={className + " multiple-machine sale-machine"}>
                <div className="multiple-machine-img-wrap">
                    <Image src={img}
                        className="img-cover multiple-machine-img"
                        rounded/>
                    { onSale && <Badge variant="danger" className="sale-badge">Sale</Badge>}
                    <LinkContainer to="/" className="multiple-machine-img-btn">
                        <span>
                            More Info
                        </span>
                    </LinkContainer>
                </div>
                
                <div className="ml-1 mt-2">
                    <h3 className="text-no-transform">{title}</h3>
                    <h5 className="text-no-transform">
                        {priceUsed !== undefined &&<span>Price: ${priceUsed} </span>} 
                        <span className={ onSale ? 'price-before'  :  ''}>{!onSale && priceNew !== undefined && <span>Price: $</span>}{priceNew}</span>
                    </h5>
                </div>
            </div>
        </Link>
    )
}

export default Product
