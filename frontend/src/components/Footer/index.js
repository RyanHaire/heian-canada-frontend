import React from 'react'
import { Nav, Image, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Footer = () => {
    return (
        <footer>
        <div className="footer-container">
            <div >
                 <Nav className="ml-auto mr-3 footer-nav">
                     <LinkContainer to="/">
                         <Nav.Link className="footer-link fs-normal text-no-transform">Home</Nav.Link>
                     </LinkContainer>
                     <LinkContainer to="/new-machinery">
                         <Nav.Link className="footer-link fs-normal text-no-transform">New Machinery</Nav.Link>
                     </LinkContainer>
                     <LinkContainer to="/used-machinery">
                         <Nav.Link className="footer-link fs-normal text-no-transform">Used Machinery</Nav.Link>
                     </LinkContainer>
                     <LinkContainer to="/services">
                         <Nav.Link className="footer-link fs-normal text-no-transform">Services</Nav.Link>
                     </LinkContainer>
                     <LinkContainer to="/contact">
                         <Nav.Link className="footer-link fs-normal text-no-transform">Contact</Nav.Link>
                     </LinkContainer>
                 </Nav>
                 <LinkContainer style={{marginLeft: '15px', marginTop: '10px'}} to="/">
                     <Image src={window.location.origin + '/images/heian-logo-white.svg'}/>
                 </LinkContainer>
            </div>
            <div>
                 <h3 style={{width: '300px'}} className="txt-white cap fw-normal">Get In Touch With Us For A Quote!</h3>
                 <LinkContainer to="/contact" style={{width:'300px'}}>
                     <Button  className="primary mt-3">Contact</Button>
                 </LinkContainer>
            </div>
        </div>
        <div className="text-center p-4">
             Copright &copy; Heian Canada Inc.
        </div>
     </footer>
    )
}

export default Footer
