import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import Footer from '../components/Footer'
import Navibar from '../components/Navibar'
import CategoryNav from '../components/CategoryNav'
import SearchForm from '../components/SearchForm'
import FilterForm from '../components/FilterForm'
import ProductList from '../components/ProductList'

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
            <main className="pr-5 d-flex">
                <CategoryNav />
                <div className="product-listing-rs d-flex flex-column align-items-center">
                    <SearchForm/>
                    <FilterForm/>
                    <ProductList isUsed={false}/>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default NewMachineryScreen
