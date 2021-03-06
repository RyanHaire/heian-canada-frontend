import React, { useState }from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import Input from '../Input'
import { createMachineType } from '../../actions/machinesTypes'

const CreateMachineTypeForm = styled.div`
    margin-top: 50px;
    width: 500px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`

const AdminCreateMachineType = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [machineType, setMachineType] = useState("")

    const onChange = (e) => {
        setMachineType(e.target.value)
    }

    const handleCreateMachineType = () => {
        dispatch(createMachineType(machineType.trim()))
        setMachineType("")
        history.push('/admin/dashboard/machinetypes')
        window.location.reload()
    }

    return (
        <CreateMachineTypeForm>
            <Input type="text" label="Machine Type" value={machineType} handleChange={(e) => onChange(e)}/>
            <button className="btn btn-primary w-100" onClick={() => handleCreateMachineType()}>Create Machine Type</button>
        </CreateMachineTypeForm>
    )
}

export default AdminCreateMachineType