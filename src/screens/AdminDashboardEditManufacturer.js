import React from 'react'
import AdminEditManufacturer from '../components/AdminManufacturers/AdminEditManufacturer'
import Navibar from '../components/Navibar'
import AdminNavibar from '../components/AdminNavibar'
import Alert from '../components/Alert'

const AdminDashboardEditManufacturer = (props) => {
    return (
        <>
            <header>
                <Navibar/>
            </header>
            <main>
                <Alert/>
                <AdminNavibar/>
                <AdminEditManufacturer {...props}/>
            </main>
        </>
    )
}

export default AdminDashboardEditManufacturer
