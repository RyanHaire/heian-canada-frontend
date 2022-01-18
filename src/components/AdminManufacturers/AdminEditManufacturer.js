import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Input from '../Input'
import { fetchManufacturer, updateManufacturer } from '../../actions/manufacturers'
import { useHistory } from 'react-router-dom'

const EditManufacturerForm = styled.div`
    margin-top: 50px;
    width: 500px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`

const AdminEditManufacturer = (props) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const manufacturerState = useSelector((state) => state.manufacturers)
    const [manufacturer, setManufacturer] = useState('')

    useEffect(() => {
        dispatch(fetchManufacturer(props.match.params.id))
        if(manufacturerState.manufacturer != null)
            setManufacturer(manufacturerState.manufacturer.name)
        console.log(manufacturerState)
    }, [dispatch, props.match.params.id])

    

    const handleChange = (e) => {
        setManufacturer(e.target.value)
        e.preventDefault()
    }

    const handleUpdateManufacturer = () => {
        dispatch(updateManufacturer(manufacturer.trim(), props.match.params.id))
        history.push('/admin/dashboard/manufacturers')
        setManufacturer("")
    }
    return (
        <EditManufacturerForm>
            {console.log("manufacturerState = " + JSON.stringify(manufacturerState))}
            {manufacturerState.isPending || manufacturerState.manufacturer == null ? <p>Loading...</p> :
                <div>
                    <Input type="text" label="Manufacturer" value={manufacturer} handleChange={handleChange}/>
                    <button className="btn btn-primary w-100" onClick={() => handleUpdateManufacturer()}>Update Manufacturer</button>
                </div>
            }
            {console.log(manufacturer)}
           
        </EditManufacturerForm>
    )
}

export default AdminEditManufacturer
