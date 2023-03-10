import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {EditorState, Editor, convertFromRaw} from 'draft-js'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Navibar from '../components/Navibar'
import { Form, Button } from 'react-bootstrap'
import SearchForm from '../components/SearchForm'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import { fetchMachine } from '../actions/machine'
import { fetchRegion, fetchRegions } from '../actions/regions'
import { fetchManufacturer } from '../actions/manufacturers'
/*

get the product with the given id

*/
const ProductScreen = (props) => {
    let {id } = useParams()
    const dispatch = useDispatch()
    var machine = useSelector((state) => state.machine) || []
    machine = machine.machines.find(obj => {
        return obj._id = id
    })
    const [images, setImages] = useState(machine.images)
    const desc = convertFromRaw(JSON.parse(machine.additionalDescription))
    const editorState = EditorState.createWithContent(desc)

    const manufacturer = useSelector((state) => state.manufacturers) || []
    const regionState = useSelector(({
        region: { regions }
    }) => ({ regions }), shallowEqual)

    const region = regionState.regions.find(obj => {
        return obj._id == machine.region
    })

    const [formData, setFormData] = useState({
        fullname: '',
        phonenumber: '',
        email: '',
        companyname: '',
        message: ''
    })

    const onChange = e => {
        let val = e.target.value
        setFormData({...formData, [e.target.name]: val})
    } 

    useEffect(() => {
        // get machine types
        // get brands
        // get machines - used machines (2 - 4) and featured machines
        dispatch(fetchMachine(id))
        setImages(machine.images)
        dispatch(fetchManufacturer(machine.manufacturer))
        dispatch(fetchRegion(machine.region))
        dispatch(fetchRegions())
    }, [])

    return (
        <>
        <header>
            <Navibar/>
        </header>
        <main className="p-5">
            {/* <div className="d-flex justify-content-center">
                <SearchForm/>
            </div> */}
            <h1 className="product-heading text-center">{machine.name}</h1>
            <div className="d-flex mt-5" >
                {/* Start of machine images */}
                <div className="image-gallery">
                    <Carousel showThumbs={true}>
                        {images.map((img, i) => {
                            return  <div key={i}>
                            <img className="image-gallery-img" src={img} alt="machine"/>
                        </div>
                        })}
                    </Carousel>
                </div>
                {/* End of machine images */}
                {/* Start of machine info */}
                <div className="ml-5">
                    <div>
                        <h3>Product Description</h3>
                        <Editor editorState={editorState} readOnly={true}/>
                    </div>
                   
                    <h3>Pricing</h3>
                    {/* Call for Pricing State */}
                    <p>
                        <a href="tel:416-951-9505" className="call-for-pricing">
                            Call for Pricing
                            <br></br>416-951-9505
                        </a>
                    </p>
                    
                    {/* End of Call for Price State */}
                    {/* Pricing Available State */}
                    <h3 className="mb-4">
                        Price:
                        <span className="product-price">${machine.price.used} </span>
                        <span className="product-price-new">${machine.price.new}</span>
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
                                    <span className="col">{manufacturer.manufacturer.name}</span>
                                </span>
                                <span className="row mt-2 mb-2">
                                    <span className="col product-info-left">Model</span>
                                    <span className="col">{machine.model}</span>
                                </span>
                                <span className="row mt-2 mb-2">
                                    <span className="col product-info-left">Year</span>
                                    <span className="col">{machine.year}</span>
                                </span>
                                <span className="row mt-2 mb-2">
                                    <span className="col product-info-left">Condition</span>
                                    <span className="col">{machine.condition.description}</span>
                                    <span className="col">{machine.condition.rating} Stars</span>
                                </span>
                                <span className="row mt-2 mb-2">
                                    <span className="col product-info-left">Region</span>
                                    <span className="col">{region.name}</span>
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
