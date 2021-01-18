import React from 'react'
import Product from '../Product'


/*

**isUsed will help decide on which list of machines to gather from
**Need to add pagination after implementing getting items

*/
const ProductList = ({isUsed}) => {
    return (
        <div className="d-flex flex-row flex-wrap justify-content-center">
            <Product 
                className="p-4"
                img="https://via.placeholder.com/350" 
                title="Heian HR Twin Table" 
                priceUsed="55,000" onSale={false}
            />
            <Product 
                className="p-4"
                img="https://via.placeholder.com/350" 
                title="Heian HR Twin Table" 
                priceUsed="55,000" onSale={false}
            />
            <Product 
                className="p-4"
                img="https://via.placeholder.com/350" 
                title="Heian HR Twin Table" 
                priceUsed="55,000" onSale={false}
            />
            <Product 
                className="p-4"
                img="https://via.placeholder.com/350" 
                title="Heian HR Twin Table" 
                priceUsed="55,000" onSale={false}
            />
            <Product 
                className="p-4"
                img="https://via.placeholder.com/350" 
                title="Heian HR Twin Table" 
                priceUsed="55,000" onSale={false}
            />
            <Product 
                className="p-4"
                img="https://via.placeholder.com/350" 
                title="Heian HR Twin Table" 
                priceUsed="55,000" onSale={false}
            />
            <Product 
                className="p-4"
                img="https://via.placeholder.com/350" 
                title="Heian HR Twin Table" 
                priceUsed="55,000" onSale={false}
            />
            <Product 
                className="p-4"
                img="https://via.placeholder.com/350" 
                title="Heian HR Twin Table" 
                priceUsed="55,000" onSale={false}
            />
            <Product 
                className="p-4"
                img="https://via.placeholder.com/350" 
                title="Heian HR Twin Table" 
                priceUsed="55,000" onSale={false}
            />
        </div>
    )
}

export default ProductList
