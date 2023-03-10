import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import Navibar from '../components/Navibar'
import CategoryNav from '../components/CategoryNav'
import SearchForm from '../components/SearchForm'
import FilterForm from '../components/FilterForm'
import ProductList from '../components/ProductList'


const NewMachineryScreen = () => {
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
                <div className={`jumbotron ${hiddenStyle} container-fluid bg-light text-dark p-5`}>
                    <h1 className={`${displayNone}`}>New Machinery</h1>
                    <p style={{width: '26rem'}} className={`fs-md ${displayNone}`}>
                        Looking for the highest quality machines? Explore our collection of new machinery.
                    </p>
                </div>
            </header>
            <main className="d-flex">
                {/* <CategoryNav /> */}
                <div className="d-flex">
                    {/* <SearchForm/> */}
                    {/* <FilterForm/> */}
                    <ProductList isUsed={false}/>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default NewMachineryScreen
