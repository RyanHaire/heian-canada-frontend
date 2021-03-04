import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Table } from '../../elements/components/Table.js'

const AdminRegions = () => {

    const regionState = useSelector((state) => state.region)

    return (
        <div>
            <div className="text-center">
                <button className="btn btn-primary mb-20 mt-20">Create a New Region</button>
            </div>
            <Table>
                <tr>
                    <th>Name</th>
                    <th>Actions</th>
                </tr>
               {/* Loop through machines */}

               {regionState.regions === [] 
                ? <tr>
                    <td>No Regions</td>
                   </tr> 
                   : 
                 regionState.regions.map((item) => 
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
        </div>
    )
}

export default AdminRegions
