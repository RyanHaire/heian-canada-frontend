import React from 'react'
import { 
    Navbar, 
    Nav, 
    Container, 
    Row, 
    Col, 
    Image, 
    Button, 
    Jumbotron, 
    Card,
    Form,
    FormGroup,
} from 'react-bootstrap'
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css';

const HomeScreen = () => {
    return (
        <>
            <header>
                <Navbar style={{width: '100%'}} bg="light" expand="lg" collapseOnSelect>
                    <Navbar.Brand href="#home" className="ml-3">
                        <Image className="logo" src={window.location.origin + '/images/heian-logo.svg'}/>
                        <span className="bold">&nbsp;&nbsp;Heian Canada Inc.</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto mr-3">
                            <Nav.Link className="navbar-link fs-normal text-no-transform" href="#">New Machinery</Nav.Link>
                            <Nav.Link className="navbar-link fs-normal text-no-transform" href="#">Used Machinery</Nav.Link>
                            <Nav.Link className="navbar-link fs-normal text-no-transform" href="#">Services</Nav.Link>
                            <Nav.Link className="navbar-link fs-normal text-no-transform" href="#">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <Jumbotron className="jumbotron">
                        <h1>Hello, world!</h1>
                        <p  style={{width: '26rem',}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Nunc sed augue lacus viverra vitae congue eu consequat.
                        </p>
                        <p>
                            <Button className="primary">Call to Action!</Button>
                        </p>

                </Jumbotron>
            </header>

            <main>
                <Container style={{marginTop: '10rem'}}>
                    <Row>
                        <Col sm={12} md={12} lg={6} className="mb-4">
                            <Card style={{width: '32rem', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}} className="pt-3">
                                <div className="ml-4 mt-4">
                                    <Image src="https://via.placeholder.com/100" roundedCircle/>
                                </div>
                                <div className="m-4">
                                    <h5 className="fw-normal italic text-no-transform">Quick Search</h5>
                                    <h2 className="text-no-transform">New Machinery</h2>
                                    <p className="fw-normal">
                                        Lorem ipsum dolor sit amet, 
                                        consectetur adipiscing elit, 
                                        sed do eiusmod tempor incididunt 
                                        ut labore et dolore magna aliqua. 
                                        Leo vel fringilla est ullamcorper 
                                        eget nulla.
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
                                            <Button style={{ width: '15rem'}} className="mt-1 primary" type="submit">Search</Button>
                                        </Form.Group>
                                    </Form>
                                </div>
                            </Card>
                        </Col>
                        <Col sm={12} md={12} lg={6} className="mb-4">
                            <Card style={{width: '32rem', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}} className="pt-3">
                                <div className="ml-4 mt-4">
                                    <Image src="https://via.placeholder.com/100" roundedCircle/>
                                </div>
                                <div className="m-4">
                                    <h5 className="fw-normal italic text-no-transform">Quick Search</h5>
                                    <h2 className="text-no-transform">New Machinery</h2>
                                    <p className="fw-normal">
                                        Lorem ipsum dolor sit amet, 
                                        consectetur adipiscing elit, 
                                        sed do eiusmod tempor incididunt 
                                        ut labore et dolore magna aliqua. 
                                        Leo vel fringilla est ullamcorper 
                                        eget nulla.
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
                                            <Button style={{ width: '15rem'}} className="mt-1 primary" type="submit">Search</Button>
                                        </Form.Group>
                                    </Form>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <Container style={{marginTop: '10rem'}}>
                    <Row class="row-flex-center">
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
                                    </Form>
                                </Container>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={6}>
                            <Container className="flex">
                                <h2 className="fs-xl">get in touch with us for the best prices available</h2>
                                <h5 className="fw-normal text-no-transform">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris vitae ultricies leo integer malesuada. Egestas fringilla phasellus faucibus scelerisque eleifend. Enim eu turpis egestas pretium. Scelerisque viverra mauris in aliquam sem. Vivamus at augue eget arcu dictum. Pharetra magna ac placerat vestibulum lectus mauris ultrices. Aliquam purus sit amet luctus venenatis lectus</h5>
                            </Container>
                        </Col>
                    </Row>
                </Container>
                <Container style={{marginTop: '10rem'}}>
                    <h2 className="text-no-transform">Featured Machines</h2>
                    <Carousel
                        plugins={[
                            'infinite',
                            'arrows',
                            {
                            resolve: slidesToShowPlugin,
                            options: {
                            numberOfSlides: 2
                            }
                            },
                        ]}>
                        <div className="multiple-machine">
                            <Image src="https://via.placeholder.com/350" className="img-cover" rounded/>
                            <div className="ml-1 mt-2">
                                <h3 className="text-no-transform">Heian HR Twin Table</h3>
                                <h4 className="text-no-transform">Price: $55,000.00 <span className="price-before">$75,000.00</span></h4>
                            </div>
                        </div>
                        <div className="multiple-machine">
                            <Image src="https://via.placeholder.com/350" className="img-cover" rounded/>
                            <div className="ml-1 mt-2">
                                <h3 className="text-no-transform">Heian HR Twin Table</h3>
                                <h4 className="text-no-transform">Price: $55,000.00 <span className="price-before">$75,000.00</span></h4>
                            </div>
                        </div>
                        <div className="multiple-machine">
                            <Image src="https://via.placeholder.com/350" className="img-cover" rounded/>
                            <div className="ml-1 mt-2">
                                <h3 className="text-no-transform">Heian HR Twin Table</h3>
                                <h4 className="text-no-transform">Price: $55,000.00 <span className="price-before">$75,000.00</span></h4>
                            </div>
                        </div>
                        <div className="multiple-machine">
                            <Image src="https://via.placeholder.com/350" className="img-cover" rounded/>
                            <div className="ml-1 mt-2">
                                <h3 className="text-no-transform">Heian HR Twin Table</h3>
                                <h4 className="text-no-transform">Price: $55,000.00 <span className="price-before">$75,000.00</span></h4>
                            </div>
                        </div>
                    </Carousel>
                    <Row className="mt-4">
                        <Col sm={12} md={6} lg={6}>
                            <div className="multiple-machine">
                                <Image src="https://via.placeholder.com/350" className="img-cover" rounded/>
                                <div className="ml-1 mt-2">
                                    <h3 className="text-no-transform">Heian HR Twin Table</h3>
                                    <h4 className="text-no-transform">Price: $55,000.00 <span className="price-before">$75,000.00</span></h4>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={6}q>
                            <div className="multiple-machine">
                                <Image src="https://via.placeholder.com/350" className="img-cover" rounded/>
                                <div className="ml-1 mt-2">
                                    <h3 className="text-no-transform">Heian HR Twin Table</h3>
                                    <h4 className="text-no-transform">Price: $55,000.00 <span className="price-before">$75,000.00</span></h4>
                                </div>
                            </div>
                        </Col>
                    </Row>
                   
                </Container>
            </main>

            <footer style={{marginTop: '10rem'}}>
                <Container>
                    <Row>
                        <Col className="text-center py-3">
                            Copright &copy; Heian Canada Inc.
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}
export default HomeScreen
