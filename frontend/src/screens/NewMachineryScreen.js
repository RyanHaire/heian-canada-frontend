import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import Footer from '../components/Footer'
import Navibar from '../components/Navibar'


const NewMachineryScreen = () => {
    return (
        <>
            <header>
                <Navibar/>
                <Jumbotron className="jumbotron">
                    <h1>New Machinery</h1>
                    <p  style={{width: '26rem'}} className="fs-md">
                        Looking for a lower cost? Explore our collection of used machinery.
                    </p>
                </Jumbotron>
            </header>
            <main>

            </main>
            <Footer/>
        </>
    )
}

export default NewMachineryScreen
