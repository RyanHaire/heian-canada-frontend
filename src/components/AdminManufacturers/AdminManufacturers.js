import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import { Table } from '../../elements/components/Table.js'
import { fetchManufacturers, deleteManufacturer } from '../../actions/manufacturers'

const AdminManufacturers = () => {
    const dispatch = useDispatch()
    const manufacturerState = useSelector(({
        manufacturers: { manufacturers }
    }) => ({ manufacturers }), shallowEqual)

    useEffect(() => {
        dispatch(fetchManufacturers())
    }, [])

    const handleDeleteManufacturer = (id) => {
        dispatch(deleteManufacturer(id))
        window.location.reload()
    }
    return (
        <div>
            <div className="text-center">
                <Link className="btn btn-primary mb-20 mt-20" to="/admin/dashboard/manufacturers/create">Create a New Manufacturer</Link>
            </div>
            <Table>
                <thead>
                    <tr>
                        <th>Manufacturer Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
              
               {/* Loop through machines */}
                <tbody>
                    {manufacturerState.manufacturers === [] 
                        ? <div>No Manufacturers</div>
                        : 
                        manufacturerState.manufacturers.map((item, i) => 
                            <tr key={i}>
                                <td>{item.name}</td>
                                <td>
                                    <Link className="btn btn-dark mr-3 w-25" to={`/admin/dashboard/manufacturers/edit/${item._id}`}>Edit</Link>
                                    <button className="btn btn-danger w-25" onClick={() => handleDeleteManufacturer(item._id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>               
            </Table>
        </div>
    )
}

export default AdminManufacturers
