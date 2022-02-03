import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
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
    const navigate= useNavigate()
    const dispatch = useDispatch()
    const [manufacturer, setManufacturer] = useState("")

    const handleChange = (e) => {
        setManufacturer(e.target.value)
    }

    const handleCreateManufacturer = () => {
        dispatch(createManufacturer(manufacturer.trim()))
        setManufacturer("")
        navigate.push('/admin/dashboard/manufacturers')
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