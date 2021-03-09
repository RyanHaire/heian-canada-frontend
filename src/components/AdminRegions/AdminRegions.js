import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import { Table } from '../../elements/components/Table.js'
import { fetchRegions, deleteRegion } from '../../actions/regions'
const AdminRegions = () => {
    const dispatch = useDispatch()
    const regionState = useSelector(({
        region: { regions }
    }) => ({ regions }), shallowEqual)

    useEffect(() => {
        dispatch(fetchRegions())
    }, [])

    const handleDeleteRegion = (id) => {
        dispatch(deleteRegion(id))
        window.location.reload()
    }
    return (
        <div>
            <div className="text-center">
                <Link className="btn btn-primary mb-20 mt-20" to="/admin/dashboard/regions/create">Create a New Region</Link>
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
                    {regionState.regions === [] 
                        ? <div>No Regions</div>
                        : 
                        regionState.regions.map((item, i) => 
                            <tr key={i}>
                                <td>{item.name}</td>
                                <td>
                                    <Link className="btn btn-dark mr-3 w-25" to={`/admin/dashboard/regions/edit/${item._id}`}>Edit</Link>
                                    <button className="btn btn-danger w-25" onClick={() => handleDeleteRegion(item._id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
               
              
               
            </Table>
        </div>
    )
}

export default AdminRegions
