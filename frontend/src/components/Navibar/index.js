import React from 'react'
import {
    Navbar,
    Nav,
    Image
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Navibar = () => {
    return (
        <Navbar style={{width: '100%'}} bg="light" expand="lg" collapseOnSelect>
            <LinkContainer to="/">
                <Navbar.Brand href="#home" className="ml-3">
                    <Image className="logo" src={window.location.origin + '/images/heian-logo.svg'}/>
                    <span className="bold">&nbsp;&nbsp;Heian Canada Inc.</span>
                </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto mr-3">
                    <LinkContainer to="/">
                        <Nav.Link className="navbar-link fs-normal text-no-transform">Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/new-machinery">
                        <Nav.Link className="navbar-link fs-normal text-no-transform">New Machinery</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/used-machinery">
                        <Nav.Link className="navbar-link fs-normal text-no-transform">Used Machinery</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/services">
                        <Nav.Link className="navbar-link fs-normal text-no-transform">Services</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/contact">
                        <Nav.Link className="navbar-link fs-normal text-no-transform">Contact</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navibar
