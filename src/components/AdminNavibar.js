import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../actions/auth'

const AdminNavibar = () => {
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
        window.location.reload()
    }

    return (
        <nav className="text-center mt-20">
            <Link className="btn btn-primary mr-20" to="/admin/dashboard">Home</Link>
            <Link className="btn btn-primary mr-20" to="/admin/dashboard/machines">Machines</Link>
            <Link className="btn btn-primary mr-20" to="/admin/dashboard/machinetypes">Machine Types</Link>
            <Link className="btn btn-primary mr-20" to="/admin/dashboard/regions">Regions</Link>
            <Link className="btn btn-primary mr-20" to="/admin/dashboard/manufacturers">Manufacturers</Link>
            <button onClick={handleLogout}>Logout</button>
        </nav>
    )
}

export default AdminNavibar