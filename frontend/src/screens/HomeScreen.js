import React from 'react'
import {Navbar, Nav, Container, Row, Col, Image, Button, Jumbotron } from 'react-bootstrap'

const HomeScreen = () => {
    return (
        <>
            <header>
                <Navbar bg="light" expand="lg" collapseOnSelect>
                    <Container>
                        <Navbar.Brand href="#home">
                            <Image src={window.location.origin + '/images/heian-logo.svg'}/>      Heian Canada Inc.
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link href="#">New Machinery</Nav.Link>
                                <Nav.Link href="#">Used Machinery</Nav.Link>
                                <Nav.Link href="#">Services</Nav.Link>
                                <Nav.Link href="#">Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Jumbotron className="jumbtron">
                        <h1>Hello, world!</h1>
                        <p  style={{width: '325px',}}>
                            This is a simple hero unit, a simple jumbotron-style component for calling
                            extra attention to featured content or information.
                        </p>
                        <p>
                            <Button className="primary">Call to Action!</Button>
                        </p>

                </Jumbotron>
            </header>

            <main>
                <Container>
                    <Container>
                        <Col sm={12} md={6} lg={6}>

                        </Col>
                        <Col sm={12} md={6} lg={6}>
                        </Col>
                    </Container>
                </Container>
            </main>

            <footer>
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
