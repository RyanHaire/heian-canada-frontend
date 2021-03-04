import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AdminCreateMachine from './AdminCreateMachine'
import { Table } from '../../elements/components/Table.js'
import { fetchMachines } from '../../actions/machine'

const AdminMachines = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        //dispatch(fetchMachines())
    }, [])
    
    const [createPage, setCreatePage] = useState(0)

    const machinesState = useSelector((state) => state.machine)

    const toggleView = (page) => {
        if(page === 'create') {
            setCreatePage(true)
        }
    }


    return (
        <main className="vh-100">
        { createPage ? <AdminCreateMachine/> : <div>
            <div className="text-center">
                <button className="btn btn-primary mb-20 mt-20" onClick={() => toggleView('create')}>Create a New Machine</button>
            </div>
            <Table>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price New</th>
                    <th>Price Used</th>
                    <th>Condition</th>
                    <th>Actions</th>
                </tr>
               {/* Loop through machines */}

               {machinesState.machines == []
                ? 
                    <div>No Machines</div>
                  : 
                 machinesState.machines.map((item) => 
                    <tr>
                        <td>{item.images[0]}</td>
                        <td>{item.name}</td>
                        <td>{item.price.new}</td>
                        <td>{item.price.used}</td>
                        <td>{`${item.condition.rating} - ${item.condition.description}`}</td>
                        <td>
                            <button className="btn btn-dark mr-3 w-25">Edit</button>
                            <button className="btn btn-danger w-25">Delete</button>
                        </td>
                    </tr>
                )
               }
            </Table>
        </div>}
        </main>
    )
}

export default AdminMachines
