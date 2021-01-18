import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

/*
    get all the categories and display list of links to categories
*/
const CategoryNav = () => {
    return (
        <aside className="category-nav">
           {/*<h3>Categories</h3> */} 
            <Link to="#" className="d-block category-link">Wood Saw</Link>
            <Link to="#" className="d-block category-link">Wood Saw</Link>
            <Link to="#" className="d-block category-link">Wood Saw</Link>
            <Link to="#" className="d-block category-link">Wood Saw</Link>
            <Link to="#" className="d-block category-link">Wood Saw</Link>
        </aside>
    )
}

export default CategoryNav
