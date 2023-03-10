import React, { useState, useEffect} from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Footer from '../components/Footer'
import Navibar from '../components/Navibar'
import CategoryNav from '../components/CategoryNav'
import SearchForm from '../components/SearchForm'
import FilterForm from '../components/FilterForm'
import ProductList from '../components/ProductList'
import { fetchMachines, fetchMachinesByTypeId, searchMachines} from '../actions/machine'
import { fetchMachineTypes } from '../actions/machinesTypes'

const UsedMachineryScreen = () => {
    const dispatch = useDispatch()
    const {type} = useParams()
    const [shouldHideBanner, setShouldHideBanner] = useState(false)
    const [scrollTop, setScrollTop] = useState(0)
    const [searchValue, setSearchValue] = useState("")

    const machines = useSelector((state) => state.machine) || []

    useEffect(() => {
       
        const onScroll = e => {
            setScrollTop(e.target.documentElement.scrollTop)
            setShouldHideBanner(e.target.documentElement.scrollTop > scrollTop)
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [scrollTop])

    const handleChange = (e) => {
        setSearchValue(e.target.value)
        dispatch(searchMachines(searchValue))
    }

    const hiddenStyle = shouldHideBanner ? 'hidden' : ''
    const displayNone = hiddenStyle ? 'd-none' : ''

    return (
        <>
            <header>
                <Navibar/>
                <div className={`jumbotron ${hiddenStyle} container-fluid bg-light text-dark p-5`}>
                    <h1 className={`${displayNone}`}>Used Machinery</h1>
                    <p style={{width: '26rem'}} className={`fs-md ${displayNone}`}>
                        Looking for a lower cost? Explore our collection of used machinery.
                    </p>
                </div>
            </header>
            <main className="d-flex">
                {/* <CategoryNav isUsed={true}/> */}
                <div className="d-flex">
                    {/* <SearchForm searchValue={searchValue} onChange={handleChange}/> */}
                    {/* <FilterForm/> */}
                    <ProductList isUsed={true} type={type} searchMachines={machines.machines}/>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default UsedMachineryScreen
