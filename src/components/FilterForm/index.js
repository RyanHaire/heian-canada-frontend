import React from 'react'
import { Form } from 'react-bootstrap'

const FilterForm = () => {
    return (
        <div className="d-flex">
            {/*<h2 className="d-inline-block align-self-start">Products</h2>*/}
            <Form className="pr-5">
                <div className="d-flex">
                    <Form.Control as="select" className="mr-3 ml-5 w-lg">
                        <option hidden>Categories</option>
                        <option>Wood Saw</option>   
                    </Form.Control>

                    <Form.Control as="select" className="mr-3 w-lg">
                        <option hidden>Brands</option>   
                        <option>Heian</option>
                    </Form.Control>

                    <Form.Control as="select" className="w-lg">
                        <option hidden>Regions</option>
                        <option>East Canada</option>
                    </Form.Control>
                </div>
            </Form>
        </div>
    )
}

export default FilterForm
