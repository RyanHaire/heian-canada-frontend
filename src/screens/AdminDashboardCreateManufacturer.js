import React from 'react'
import AdminCreateManufacturer from '../components/AdminManufacturers/AdminCreateManufacturer'
import Navibar from '../components/Navibar'
import AdminNavibar from '../components/AdminNavibar'
import Alert from '../components/Alert'

const AdminDashboardCreateManufacturer = () => {
    return (
        <>
            <header>
                <Navibar/>
            </header>
            <main>
                <Alert/>
                <AdminNavibar/>
                <AdminCreateManufacturer/>
            </main>
        </>
    )
}

export default AdminDashboardCreateManufacturer
