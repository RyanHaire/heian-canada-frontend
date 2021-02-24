import React from 'react'
import Footer from '../components/Footer'
import Navibar from '../components/Navibar'
import { Form, Button } from 'react-bootstrap'
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
            <h1 className="product-heading text-center">2018 Haas UMC-750 5- Axis CNC Vertical Machining Center</h1>
            <div className="d-flex mt-5" >
                {/* Start of machine images */}
                <div className="image-gallery">
                    <Carousel showThumbs={true}>
                        <div>
                            <img className="image-gallery-img" src="https://via.placeholder.com/350" alt="machine"/>
                        </div>
                        <div>
                            <img className="image-gallery-img" src="https://via.placeholder.com/350" alt="machine"/>
                        </div>
                        <div>
                            <img className="image-gallery-img" src="https://via.placeholder.com/350" alt="machine"/>
                        </div>
                        <div>
                            <img className="image-gallery-img" src="https://via.placeholder.com/350" alt="machine"/>
                            <p className="legend">My Classic Still 3</p>
                        </div>
                    </Carousel>
                </div>
                {/* End of machine images */}
                {/* Start of machine info */}
                <div className="ml-5">
                    <h3>Product Description</h3>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit 
                        voluptatem accusantium doloremque laudantium, totam 
                        rem aperiam, eaque ipsa quae ab illo inventore veritatis 
                        et quasi architecto beatae vitae dicta sunt explicabo. 
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur 
                        aut odit aut fugit, sed quia consequuntur magni dolores 
                        eos qui ratione voluptatem sequi nesciunt.
                    </p>
                    <h3>Pricing</h3>
                    {/* Call for Pricing State */}
                    <p>
                        <a href="tel:416-951-9505" className="call-for-pricing">
                            Call for Pricing
                        </a>
                    </p>
                    
                    {/* End of Call for Price State */}
                    {/* Pricing Available State */}
                    <h3 className="mb-4">
                        <span className="product-price">$70,000</span>
                        <br/>
                        <span className="product-price">$70,000 </span>
                        <span className="product-price-new">$100,000</span>
                        {/* {priceUsed !== undefined &&<span>Price: ${priceUsed} </span>} 
                        <span className={ onSale ? 'price-before'  :  ''}>
                            {!onSale && priceNew !== undefined && 
                            <span>Price: $</span>}
                            {priceNew}
                        </span> */}
                    </h3>
                    {/* End Pricing Available State */}

                    {/* Start of Product Information */}
                    <div>
                        <div>
                            <h4 className="product-info-header">Overview</h4>
                            <div className="container">
                               <span className="row mt-2 mb-2">
                                    <span className="col product-info-left">Brand</span>
                                    <span className="col">Haas</span>
                                </span>
                                <span className="row mt-2 mb-2">
                                    <span className="col product-info-left">Model</span>
                                    <span className="col">UMC-730</span>
                                </span>
                                <span className="row mt-2 mb-2">
                                    <span className="col product-info-left">Year</span>
                                    <span className="col">2017</span>
                                </span>
                                <span className="row mt-2 mb-2">
                                    <span className="col product-info-left">Condition</span>
                                    <span className="col">New</span>
                                    {/* <span className="col">Rating Here</span> */}
                                </span>
                                <span className="row mt-2 mb-2">
                                    <span className="col product-info-left">Region</span>
                                    <span className="col">East Canada</span>
                                    {/* <span className="col">Rating Here</span> */}
                                </span>
                            </div>
                        </div>
                        <div>
                            <h4 className="product-info-header">Specifications</h4>
                            <div className="container">
                               <span className="row mt-2 mb-2">
                                    <h5 className="col product-info-left">Voltage</h5>
                                    <span className="col">480W</span>
                                </span>
                                <span className="row mt-2 mb-2">
                                    <h5 className="col product-info-left">Example Spec</h5>
                                    <span className="col">Example Spec Value</span>
                                </span>
                                <span className="row mt-2 mb-2">
                                    <h5 className="col product-info-left">Example Spec</h5>
                                    <span className="col">Example Spec Value</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End of machine info */}
            </div>
            <div className="w-50">
                <p className="text-center">Are you interested or have questions? Send us a message!</p>
                <Form>
                    <Form.Group>
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Full Name"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Email"/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Company (optional)</Form.Label>
                        <Form.Control type="text" placeholder="Full Name"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Country</Form.Label>
                        <Form.Control as="select">
                            <option>Canada</option>
                            <option>United States</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="City"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Province/State</Form.Label>
                        <Form.Control type="text" placeholder="Province/State"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Zip / Postal Code</Form.Label>
                        <Form.Control type="text" placeholder="Zip/Postal Code"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Full Name"/>
                    </Form.Group>
                    {/* <Form.Group>
                        <Form.Label>Are you interested?</Form.Label>
                        <Form.Check type="checkbox"/>
                    </Form.Group> */}
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
           
        </main>
        <Footer/>
    </>
    )
}

export default ProductScreen
