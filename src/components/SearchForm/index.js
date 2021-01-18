import React from 'react'
import { Form } from 'react-bootstrap'

const SearchForm = () => {
    return (
        <Form className="d-flex align-items-center mb-4 w-75">
            <i className="fas fa-search mr-2" />
            <Form.Control type="text" placeholder="Search for a product..."></Form.Control>
        </Form>
    )
}

export default SearchForm
