import React from 'react'
import { Link } from 'react-router-dom'
import AdminCreateMachineType from '../components/AdminMachineTypes/AdminCreateMachineType'
import Navibar from '../components/Navibar'
import AdminNavibar from '../components/AdminNavibar'
import Alert from '../components/Alert'

const AdminDashboardCreateMachineType = () => {
    return (
        <>
            <header>
                <Navibar/>
            </header>
            <main>
                <Alert/>
                <AdminNavibar/>
                <AdminCreateMachineType/>
            </main>
        </>
    )
}

export default AdminDashboardCreateMachineType