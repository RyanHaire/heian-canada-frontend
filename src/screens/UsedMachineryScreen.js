import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Jumbotron } from 'react-bootstrap'
import Footer from '../components/Footer'
import Navibar from '../components/Navibar'
import Product from '../components/Product'
import CategoryNav from '../components/CategoryNav'

const UsedMachineryScreen = () => {
    return (
        <>
            <header>
                <Navibar/>
                <Jumbotron className="jumbotron">
                    <h1>Used Machinery</h1>
                    <p  style={{width: '26rem'}} className="fs-md">
                        Looking for a lower cost? Explore our collection of used machinery.
                    </p>
                </Jumbotron>
            </header>
            <main className="pr-5 d-flex">
                <CategoryNav />
                <div className="product-listing-rs d-flex flex-column align-items-center">
                    <div>
                        <Form className="pr-5">
                            <div className="d-flex">
                                <Form.Control as="select" className="mr-3 ml-5 w-lg">
                                    <option>Categories</option>   
                                </Form.Control>

                                <Form.Control as="select" className="mr-3 w-lg">
                                    <option>Brands</option>   
                                </Form.Control>
                
                                <Form.Control as="select" className="w-lg">
                                    <option>Regions</option>   
                                </Form.Control>
                            </div>
                        </Form>
                    </div>
                    <div className="d-flex flex-row flex-wrap justify-content-center">
                        <Product 
                            className="p-4 multiple-machine sale-machine"
                            img="https://via.placeholder.com/350" 
                            title="Heian HR Twin Table" 
                            priceUsed="55,000" onSale={false}
                        />
                         <Product 
                            className="p-4 multiple-machine sale-machine"
                            img="https://via.placeholder.com/350" 
                            title="Heian HR Twin Table" 
                            priceUsed="55,000" onSale={false}
                        />
                         <Product 
                            className="p-4 multiple-machine sale-machine"
                            img="https://via.placeholder.com/350" 
                            title="Heian HR Twin Table" 
                            priceUsed="55,000" onSale={false}
                        />
                         <Product 
                            className="p-4 multiple-machine sale-machine"
                            img="https://via.placeholder.com/350" 
                            title="Heian HR Twin Table" 
                            priceUsed="55,000" onSale={false}
                        />
                          <Product 
                            className="p-4 multiple-machine sale-machine"
                            img="https://via.placeholder.com/350" 
                            title="Heian HR Twin Table" 
                            priceUsed="55,000" onSale={false}
                        />
                          <Product 
                            className="p-4 multiple-machine sale-machine"
                            img="https://via.placeholder.com/350" 
                            title="Heian HR Twin Table" 
                            priceUsed="55,000" onSale={false}
                        />
                          <Product 
                            className="p-4 multiple-machine sale-machine"
                            img="https://via.placeholder.com/350" 
                            title="Heian HR Twin Table" 
                            priceUsed="55,000" onSale={false}
                        />
                         <Product 
                            className="p-4 multiple-machine sale-machine"
                            img="https://via.placeholder.com/350" 
                            title="Heian HR Twin Table" 
                            priceUsed="55,000" onSale={false}
                        />
                         <Product 
                            className="p-4 multiple-machine sale-machine"
                            img="https://via.placeholder.com/350" 
                            title="Heian HR Twin Table" 
                            priceUsed="55,000" onSale={false}
                        />
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default UsedMachineryScreen
