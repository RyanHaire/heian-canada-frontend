import React from 'react'
import Footer from '../components/Footer'
import Navibar from '../components/Navibar'
import SearchForm from '../components/SearchForm'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
/*

get the product with the given id

*/
const ProductScreen = ({match}) => {
   // let params = match.params

    return (
        <>
        <header>
            <Navibar/>
        </header>
        <main className="p-5">
            <div className="d-flex justify-content-center">
                <SearchForm/>
            </div>
            <h1 className="product-heading">2018 Haas UMC-750 5- Axis CNC Vertical Machining Center</h1>
            <div className="d-flex">
                {/* Start of machine images */}
                <div className="image-gallery">
                    <Carousel>
                        <div>
                            <img src="https://via.placeholder.com/350" alt="machine"/>
                        </div>
                        <div>
                            <img src="https://via.placeholder.com/350" alt="machine"/>
                        </div>
                        <div>
                            <img src="https://via.placeholder.com/350" alt="machine"/>
                        </div>
                        <div>
                            <img src="https://via.placeholder.com/350" alt="machine"/>
                            <p className="legend">My Classic Still 3</p>
                        </div>
                    </Carousel>
                </div>
                {/* End of machine images */}
                {/* Start of machine info */}
                <div>
                    <h2>Product Description</h2>
                    <p></p>
                </div>
                {/* End of machine info */}
            </div>
            
        </main>
        <Footer/>
    </>
    )
}

export default ProductScreen
