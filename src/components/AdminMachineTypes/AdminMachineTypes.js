import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Table } from '../../elements/components/Table.js'
import {fetchMachineTypes, deleteMachineType } from '../../actions/machinesTypes'

const AdminMachineTypes = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchMachineTypes())
    }, [dispatch])

    const machineTypeState = useSelector((state) => state.machineTypes) || []

    const handleDeleteMachine = (id) => {
        dispatch(deleteMachineType(id))
        window.location.reload()
    }
    return (
        <div>
            <div className="text-center">
                <Link className="btn btn-primary mb-20 mt-20" to="/admin/dashboard/machinetypes/create">Create a New Machine Type</Link>
            </div>
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
               
               {/* Loop through machines */}
                <tbody>
                    {machineTypeState.machineTypes === [] 
                        ? <div>No Machine Types</div> : 
                        machineTypeState.machineTypes.map((item) => 
                            <tr key={item.name}>
                                <td>{item.name}</td>
                                <td>
                                    <Link className="btn btn-dark mr-3 w-25" to={`/admin/dashboard/machinetypes/edit/${item._id}`}>Edit</Link>
                                    <button className="btn btn-danger w-25" onClick={() => handleDeleteMachine(item._id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
              
              
               
            </Table>
        </div>
    )
}

export default AdminMachineTypes
