import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Table } from '../../elements/components/Table.js'

const AdminMachineTypes = () => {

    const machineTypeState = useSelector((state) => state.machineTypes)

    return (
        <div>
            <div className="text-center">
                <button className="btn btn-primary mb-20 mt-20">Create a New Machine Type</button>
            </div>
            <Table>
                <tr>
                    <th>Name</th>
                </tr>
               {/* Loop through machines */}

               {machineTypeState.machineTypes == [] 
                ? <tr>
                    <td>No Machines</td>
                   </tr> : 
                 machineTypeState.machineTypes.map((item) => 
                    <tr>
                        <td>{item.name}</td>
                        <td>
                            <button className="btn btn-dark mr-3 w-25">Edit</button>
                            <button className="btn btn-danger w-25">Delete</button>
                        </td>
                    </tr>
                )
               }
              
               
            </Table>
        </div>
    )
}

export default AdminMachineTypes
