import React from 'react'
import { Link } from 'react-router-dom'
import AdminRegions from '../components/AdminRegions/AdminRegions'
import Navibar from '../components/Navibar'
import AdminNavibar from '../components/AdminNavibar'
import Alert from '../components/Alert'

const AdminDashboardRegions = () => {
    return (
        <>
            <header>
                <Navibar/>
            </header>
            <main>
                <Alert/>
                <AdminNavibar/>
                <AdminRegions/>
            </main>
        </>
    )
}

export default AdminDashboardRegions
