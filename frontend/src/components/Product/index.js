import React from 'react'

const Product = () => {
    return (
        <div className="multiple-machine sale-machine">
            <Image src="https://via.placeholder.com/350" 
                className="img-cover" 
                rounded/>
                <Badge variant="danger" className="sale-badge">Sale</Badge>
            <div className="ml-1 mt-2">
                <h3 className="text-no-transform">Heian HR Twin Table</h3>
                <h4 className="text-no-transform">Price: $55,000.00 <span className="price-before">$75,000.00</span></h4>
            </div>
        </div>
    )
}

export default Product
