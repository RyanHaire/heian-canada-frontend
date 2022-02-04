import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Table } from '../../elements/components/Table.js'
import { fetchMachines, deleteMachine } from '../../actions/machine'
import { useNavigate } from 'react-router-dom'

const AdminMachines = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(fetchMachines())
    }, [dispatch])
    

    const machinesState = useSelector((state) => state.machine) || []

    const createMachinePage = () => {
        navigate('/admin/dashboard/machines/create')    
    }

    const handleDelete =(id) => {
        dispatch(deleteMachine(id))
        window.location.reload()  
    }

    const handleEdit = (id) => {
        navigate(`/admin/dashboard/machines/edit/${id}`)    
    }


    return (
        <main className="vh-100">
            <div className="text-center">
                <button className="btn btn-primary mb-20 mt-20" onClick={() => createMachinePage()}>Create a New Machine</button>
            </div>
            <Table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price New</th>
                        <th>Price Used</th>
                        <th>Condition</th>
                        <th>Actions</th>
                    </tr>
                </thead>
              
               {/* Loop through machines */}
                <tbody>
                    {machinesState.machines === []
                        ? 
                            <div>No Machines</div>
                        : 
                        machinesState.machines.map((item, i) => 
                            <tr key={i}>
                                <td><img src={item.images[0]} /></td>
                                <td>{item.name}</td>
                                <td>{item.price.new}</td>
                                <td>{item.price.used}</td>
                                <td>{`${item.condition.rating} - ${item.condition.description}`}</td>
                                <td>
                                    <button className="btn btn-dark mr-3 w-25" onClick={() => handleEdit(item._id)}>Edit</button>
                                    <button className="btn btn-danger w-25" onClick={() => handleDelete(item._id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
              
            </Table>
        </main>
    )
}

export default AdminMachines
