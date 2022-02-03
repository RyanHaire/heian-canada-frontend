import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Input from '../Input'
import { fetchRegion, updateRegion } from '../../actions/regions'
import { useNavigate } from 'react-router-dom'

const EditRegionForm = styled.div`
    margin-top: 50px;
    width: 500px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`

const AdminEditRegion = (props) => {
    const navigate= useNavigate()
    const dispatch = useDispatch()
    const [region, setRegion] = useState("")

    useEffect(() => {
        dispatch(fetchRegion(props.match.params.id))
    }, [dispatch, props.match.params.id])

    const regionState = useSelector((state) => state.region)

    const handleChange = (e) => {
        setRegion(e.target.value)
    }

    const handleUpdateRegion = () => {
        dispatch(updateRegion(region.trim(), props.match.params.id))
        navigate.push('/admin/dashboard/region')
        setRegion("")
    }
    return (
        <EditRegionForm>
            <Input type="text" label="Region" value={region === "" ? regionState.region.name : region} handleChange={handleChange}/>
            <button className="btn btn-primary w-100" onClick={() => handleUpdateRegion()}>Update Region</button>
        </EditRegionForm>
    )
}

export default AdminEditRegion
