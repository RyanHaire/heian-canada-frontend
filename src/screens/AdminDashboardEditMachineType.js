import React from 'react'
import AdminEditMachineType from '../components/AdminMachineTypes/AdminEditMachineType'
import Navibar from '../components/Navibar'
import AdminNavibar from '../components/AdminNavibar'
import Alert from '../components/Alert'

const AdminDashboardEditMachineType = (props) => {
    return (
        <>
            <header>
                <Navibar/>
            </header>
            <main>
                <Alert/>
                <AdminNavibar/>
                <AdminEditMachineType {...props}/>
            </main>
        </>
    )
}

export default AdminDashboardEditMachineType
