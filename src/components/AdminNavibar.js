import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavibar = () => {
    return (
        <nav className="text-center mt-20">
            <Link className="btn btn-primary mr-20" to="/admin/dashboard">Home</Link>
            <Link className="btn btn-primary mr-20" to="/admin/dashboard/machines">Machines</Link>
            <Link className="btn btn-primary mr-20" to="/admin/dashboard/machinetypes">Machine Types</Link>
            <Link className="btn btn-primary mr-20" to="/admin/dashboard/regions">Regions</Link>
            <Link className="btn btn-primary mr-20" to="/admin/dashboard/manufacturers">Manufacturers</Link>
        </nav>
    )
}

export default AdminNavibar