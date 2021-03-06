import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import Input from '../Input'
import { createRegion } from '../../actions/regions'
import Alert from '../Alert'

const CreateRegionForm = styled.div`
    margin-top: 50px;
    width: 500px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`

const AdminCreateRegion = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [region, setRegion] = useState("")

    const handleChange = (e) => {
        setRegion(e.target.value)
    }

    const handleCreateRegion = () => {
        dispatch(createRegion(region.trim()))
        setRegion("")
        history.push('/admin/dashboard/regions')
        window.location.reload()
    }
    return (
        <CreateRegionForm>
            <Alert/>
            <Input type="text" label="Region" value={region} handleChange={handleChange}/>
            <button className="btn btn-primary w-100" onClick={() => handleCreateRegion()}>Create Region</button>
        </CreateRegionForm>
    )
}

export default AdminCreateRegion