import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import Input from '../Input'
import { createManufacturer } from '../../actions/manufacturers'
import Alert from '../Alert'

const CreateManufacturerForm = styled.div`
    margin-top: 50px;
    width: 500px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`

const AdminCreateManufacturer = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [manufacturer, setManufacturer] = useState("")

    const handleChange = (e) => {
        setManufacturer(e.target.value)
    }

    const handleCreateManufacturer = () => {
        dispatch(createManufacturer(manufacturer.trim()))
        setManufacturer("")
        history.push('/admin/dashboard/manufacturers')
        window.location.reload()
    }
    
    return (
        <CreateManufacturerForm>
            <Alert/>
            <Input type="text" label="Manufacturer" value={manufacturer} handleChange={handleChange}/>
            <button className="btn btn-primary w-100" onClick={() => handleCreateManufacturer()}>Create Manufacturer</button>
        </CreateManufacturerForm>
    )
}

export default AdminCreateManufacturer