import React from 'react'
import { Form } from 'react-bootstrap'

const SearchForm = ({value, onChange}) => {

    const handleClick = e => {
        window.location.reload()
    }
    return (
        <Form className="d-flex align-items-center mb-4 w-75">
            <i className="fas fa-search mr-2" />
            <input type="text" value={value} placeholder="Search for a product..." onChange={ e => onChange(e)}></input>
            <button onClick={e => handleClick(e)}>Search</button>
        </Form>
    )
}

export default SearchForm
