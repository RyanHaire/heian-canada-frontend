import React from 'react'
import Footer from '../components/Footer'
import Navibar from '../components/Navibar'
import Contact from '../components/Contact'

const ContactScreen = () => {
    return (
        <>
            <header>
                <Navibar/>
            </header>
            <main className="row-flex-center">
                <div style={{marginTop: '50px'}}>
                    <Contact/>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default ContactScreen
