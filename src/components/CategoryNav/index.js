import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import './index.css'
import { fetchMachineTypes } from '../../actions/machinesTypes'

/*
    get all the categories and display list of links to categories
*/
const CategoryNav = ({isUsed}) => {
    const dispatch = useDispatch()

    const types = useSelector((state) => state.machineTypes) || []
    const [path, setPath] = useState("")
    useEffect(() => {
        dispatch(fetchMachineTypes())

    }, [])

    return (
        <aside className="category-nav">
           <h3>Categories</h3>
           {types.machineTypes.map((t, i) => {
               const type = t.name
               return <Link key={i} to={isUsed ? `/used-machinery/type/${type}` : `/new-machinery/type/${type}`} className="d-block category-link">{t.name}</Link>
           })}
            
        </aside>
    )
}

export default CategoryNav
