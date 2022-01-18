import React from 'react'
import AdminManufacturers from '../components/AdminManufacturers/AdminManufacturers'
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
                <AdminManufacturers/>
            </main>
        </>
    )
}

export default AdminDashboardRegions
