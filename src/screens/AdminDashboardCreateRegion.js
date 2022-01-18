import React from 'react'
import { Link } from 'react-router-dom'
import AdminCreateRegion from '../components/AdminRegions/AdminCreateRegion'
import Navibar from '../components/Navibar'
import AdminNavibar from '../components/AdminNavibar'
import Alert from '../components/Alert'

const AdminDashboardCreateRegion = () => {
    return (
        <>
            <header>
                <Navibar/>
            </header>
            <main>
                <Alert/>
                <AdminNavibar/>
                <AdminCreateRegion/>
            </main>
        </>
    )
}

export default AdminDashboardCreateRegion
