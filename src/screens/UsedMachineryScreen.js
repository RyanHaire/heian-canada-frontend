import React, { useState, useEffect} from 'react'
import { Jumbotron } from 'react-bootstrap'
import Footer from '../components/Footer'
import Navibar from '../components/Navibar'
import CategoryNav from '../components/CategoryNav'
import SearchForm from '../components/SearchForm'
import FilterForm from '../components/FilterForm'
import ProductList from '../components/ProductList'

const UsedMachineryScreen = () => {
    const [shouldHideBanner, setShouldHideBanner] = useState(false)
    const [scrollTop, setScrollTop] = useState(0)
    

    useEffect(() => {

        const onScroll = e => {
            setScrollTop(e.target.documentElement.scrollTop)
            setShouldHideBanner(e.target.documentElement.scrollTop > scrollTop)
        }

        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [scrollTop])

    const hiddenStyle = shouldHideBanner ? 'hidden' : ''
    const displayNone = hiddenStyle ? 'd-none' : ''

    return (
        <>
            <header>
                <Navibar/>
                <Jumbotron className={`jumbotron ${hiddenStyle}`}>
                    <h1 className={`${displayNone}`}>Used Machinery</h1>
                    <p style={{width: '26rem'}} className={`fs-md ${displayNone}`}>
                        Looking for a lower cost? Explore our collection of used machinery.
                    </p>
                </Jumbotron>
            </header>
            <main className="d-flex">
                <CategoryNav />
                <div className="product-listing-rs d-flex flex-column align-items-center">
                    <SearchForm/>
                    <FilterForm/>
                    <ProductList/>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default UsedMachineryScreen
