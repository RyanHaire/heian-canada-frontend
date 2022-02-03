import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Input from '../Input'
import { fetchMachineType, updateMachineType } from '../../actions/machinesTypes'
import { useNavigate } from 'react-router-dom'

const EditMachineTypeForm = styled.div`
    margin-top: 50px;
    width: 500px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`

const AdminEditMachineType = (props) => {
    const navigate= useNavigate()
    const dispatch = useDispatch()
    const [machineType, setMachineType] = useState("")

    useEffect(() => {
        dispatch(fetchMachineType(props.match.params.id))
    }, [dispatch, props.match.params.id])

    // const machineTypeState = useSelector((state) => {
    //     console.log(state)
    // })

    const machineTypeState = useSelector((state) => state.machineTypes)

    const handleChange = (e) => {
        setMachineType(e.target.value)
    }

    const handleUpdateMachineType = () => {
        dispatch(updateMachineType(machineType.trim(), props.match.params.id))
        navigate.push('/admin/dashboard/machinetype')
        setMachineType("")
    }
    return (
        <EditMachineTypeForm>
            {console.log("machineTypeState.machineType = " + machineTypeState.machineType)}
            <Input type="text" label="Machine Type" value={machineType === "" ? machineTypeState.machineType.name : machineType} handleChange={handleChange}/>
            <button className="btn btn-primary w-100" onClick={() => handleUpdateMachineType()}>Update Machine Type</button>
        </EditMachineTypeForm>
    )
}

export default AdminEditMachineType
