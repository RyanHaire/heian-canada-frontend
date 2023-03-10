import React from 'react'
import { Nav, Image, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import WhiteLogo from '../../assets/heian-logo-white.svg'
import './index.css'

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
                     <LinkContainer to="/">
                        <Image className="footer-link mt-3 footer-logo" src={WhiteLogo}/>
                     </LinkContainer>
                 </Nav>
                 
            </div>
            <div>
                 <h3 style={{width: '300px'}} className="txt-white cap fw-normal footer-header">Get In Touch With Us For A Quote!</h3>
                 <LinkContainer to="/contact" style={{width:'15rem'}}>
                     <Button  className="primary mt-3">Contact</Button>
                 </LinkContainer>
            </div>
        </div>
        <div className="text-center p-4">
             Copyright &copy; Heian Canada Inc.
        </div>
     </footer>
    )
}

export default Footer
