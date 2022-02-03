import React, { useEffect, useState } from 'react'
import {
    Container,
    Row,
    Col,
    Image,
    Button,
    Card,
    Form,
    FormGroup,
    Carousel
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Carousel2 from 'react-grid-carousel'
import Navibar from '../components/Navibar'
import Footer from '../components/Footer'
import Product from '../components/Product'
import { useSelector, useDispatch } from 'react-redux'
import NewMachineryLogo from '../assets/drilling.png'
import UsedMachineryLogo from '../assets/laser-cutting-machine.png'

const HomeScreen = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        // get machine types
        // get brands
        // get machines - used machines (2 - 4) and featured machines
    }, [])

    return (
        <>
            <header>
                <Navibar/>

                <div className="jumbotron container-fluid bg-light text-dark p-5">
                        <h1>CNC Machinery & <br/>Laminating Presses </h1>
                        <p style={{width: '330px'}}>
                         Heian Canada proudly offers market leading
                         machinery for materials including wood, plastics, composites,
                         carbon fiber, glass, stone, and nonferrous
                         manufacturing need. Explore our new and used inventory today.
                        </p>
                        <LinkContainer to="/new-machinery" style={{width: '150px'}}>
                            <Button className="primary">Shop Now</Button>
                        </LinkContainer>

                </div>
            </header>

            <main>
                <Container style={{marginTop: '10rem'}}>
                    <Row>
                        <Col sm={12} md={12} lg={6} className="mb-4">
                            <Card className="pt-3">
                                <div className="ml-4 mt-4 text-center">
                                    <Image className="w-25" src={NewMachineryLogo} />
                                </div>
                                <div className="m-4">
                                    <h5 className="fw-normal italic text-no-transform">Quick Search</h5>
                                    <h2 className="text-no-transform">New Machinery</h2>
                                    <p className="fw-normal fw-md">
                                        New machinery to suit your manufacturing needs. The best quality and most reputable machinery. 
                                    </p>
                                    <Form>
                                        <h3 className="text-no-transform">Filter By</h3>
                                        <FormGroup>
                                            <Form.Control as="select" style={{width: '18rem'}}>
                                                <option>Select Machine Type</option>
                                            </Form.Control>
                                        </FormGroup>
                                        <p>or</p>
                                        <Form.Group>
                                            <Form.Control as="select" style={{width: '18rem'}}>
                                                <option>Filter By Brand</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group>
                                            <Button style={{ width: '15rem'}} className="mt-1 primary" type="submit">Search</Button>
                                        </Form.Group>
                                    </Form>
                                </div>
                            </Card>
                        </Col>
                        <Col sm={12} md={12} lg={6} className="mb-4">
                            <Card className="pt-3">
                                <div className="ml-4 mt-4 text-center">
                                    <Image className="w-25" src={UsedMachineryLogo}/>
                                </div>
                                <div className="m-4">
                                    <h5 className="fw-normal italic text-no-transform">Quick Search</h5>
                                    <h2 className="text-no-transform">Used Machinery</h2>
                                    <p className="fw-normal">
                                        Used machinery to suit your manufacturing needs. The best prices for the best machinery.
                                    </p>
                                    <Form>
                                        <h3 className="text-no-transform">Filter By</h3>
                                        <FormGroup>
                                            <Form.Control as="select">
                                                <option>Select Machine Type</option>
                                            </Form.Control>
                                        </FormGroup>
                                        <p>or</p>
                                        <Form.Group>
                                            <Form.Control as="select">
                                                <option>Filter By Brand</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group>
                                            <Button style={{ width: '15rem'}} className="mt-1 btn-primary" type="submit">Search</Button>
                                        </Form.Group>
                                    </Form>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>

                <Container style={{marginTop: '10rem'}}>
                    <h2 className="text-no-transform">Featured Machines</h2>
                    <Carousel2 cols={2} showDots loop mobileBreakpoint={[{
                            breakpoint: 800,
                            cols: 1,
                            rows: 1
                    }]}>
                        <Carousel2.Item key={1}>
                            <Product 
                                img="https://via.placeholder.com/350" 
                                title="Heian HR Twin Table" 
                                priceNew="55,000" onSale={false}
                            />
                        </Carousel2.Item>
                        <Carousel2.Item key={2}>
                            <Product 
                                    img="https://via.placeholder.com/350" 
                                    title="Heian HR Twin Table" 
                                    priceNew="55,000" onSale={false}
                                />
                        </Carousel2.Item>
                        <Carousel2.Item key={3}>
                            <Product 
                                    img="https://via.placeholder.com/350" 
                                    title="Heian HR Twin Table" 
                                    priceNew="55,000" onSale={false}
                                />
                        </Carousel2.Item>
                        <Carousel2.Item key={4}>
                            <Product 
                                    img="https://via.placeholder.com/350" 
                                    title="Heian HR Twin Table" 
                                    priceNew="55,000" onSale={false}
                                />
                        </Carousel2.Item>
                        {/*
                        {products.map((val, i) => (
                            <Carousel.Item key={i}>
                            <Card>
                                <img src={val.img} />
                                <div>
                                <Title>{val.title}</Title>
                                <span>{val.specialPrice}</span>
                                <span>{val.oriPrice}</span>
                                </div>
                                <Mask />
                            </Card>
                            </Carousel.Item>
                         ))}
                        */ }
                    </Carousel2>
                </Container>

                <Container style={{marginTop: '10rem'}}>
                    <h2 className="text-no-transform">Machines On Sale</h2>
                    <Carousel2 cols={2} showDots loop mobileBreakpoint={[{
                            breakpoint: 800,
                            cols: 1,
                            rows: 1
                    }]}>
                        <Carousel2.Item key={1}>
                            <Product 
                                img="https://via.placeholder.com/350" 
                                title="Heian HR Twin Table" 
                                priceNew="75,000" 
                                priceUsed="55,000"
                                onSale={true}
                            />
                        </Carousel2.Item>
                        <Carousel2.Item key={2}>
                        <Product 
                                img="https://via.placeholder.com/350" 
                                title="Heian HR Twin Table" 
                                priceNew="75,000" 
                                priceUsed="55,000"
                                onSale={true}
                            />
                        </Carousel2.Item>
                        <Carousel2.Item key={3}>
                        <Product 
                                img="https://via.placeholder.com/350" 
                                title="Heian HR Twin Table" 
                                priceNew="75,000" 
                                priceUsed="55,000"
                                onSale={true}
                            />
                        </Carousel2.Item>
                        <Carousel2.Item key={4}>
                        <Product 
                                img="https://via.placeholder.com/350" 
                                title="Heian HR Twin Table" 
                                priceNew="75,000" 
                                priceUsed="55,000"
                                onSale={true}
                            />
                        </Carousel2.Item>
                        {/*
                        {products.map((val, i) => (
                            <Carousel.Item key={i}>
                            <Card>
                                <img src={val.img} />
                                <div>
                                <Title>{val.title}</Title>
                                <span>{val.specialPrice}</span>
                                <span>{val.oriPrice}</span>
                                </div>
                                <Mask />
                            </Card>
                            </Carousel.Item>
                         ))}
                        */ }
                    </Carousel2>
                </Container>
                <Container style={{marginTop: '10rem'}}>
                    <Row className="row-flex-center">
                        <Col sm={12} md={6} lg={6}>
                            <Container style={{marginTop: '1rem', marginBottom: '5rem'}}>
                                <h2 className="fs-xl">Contact us!</h2>
                                <h5 className="fw-normal text-no-transform">Whether you’re looking for a price, a specific machine, or just want to ask us something, we’re more than happy to help.</h5>
                            </Container>
                        </Col>
                        <Col sm={12} md={6} lg={6}>
                            <Card className="p-5">
                                <Container>
                                    <Form>
                                        <Form.Group>
                                            <Form.Label>Full Name</Form.Label>
                                            <Form.Control type="text" placeholder="Full Name"/>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Email Address</Form.Label>
                                            <Form.Control type="email" placeholder="Full Name"/>
                                            <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                            </Form.Text>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Company Name</Form.Label>
                                            <Form.Control type="text" placeholder="Full Name"/>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Phone Number</Form.Label>
                                            <Form.Control type="text" placeholder="Full Name"/>
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Message</Form.Label>
                                            <Form.Control as="textarea" rows={8} />
                                        </Form.Group>
                                        <Form.Group>
                                            <Button style={{ width: '100%'}} className="mt-1 btn-primary" type="submit">Send Message</Button>
                                        </Form.Group>
                                    </Form>
                                </Container>
                            </Card>
                        </Col>

                    </Row>
                </Container>
                    {/* <div className="testimonial-slider">
                        <Carousel style={{width: '100%'}}>
                            <Carousel.Item>
                               <p>First Slide</p>
                            </Carousel.Item>
                            <Carousel.Item>
                                <p>Second Slide</p>
                            </Carousel.Item>
                            <Carousel.Item>
                                <p>Third Slide</p>
                            </Carousel.Item>
                        </Carousel>
                    </div> */}
            </main>

            <Footer/>
        </>
    )
}
export default HomeScreen
