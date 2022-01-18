import React from 'react'
import { Link } from 'react-router-dom'
import AdminMachineTypes from '../components/AdminMachineTypes/AdminMachineTypes'
import Navibar from '../components/Navibar'
import AdminNavibar from '../components/AdminNavibar'
import Alert from '../components/Alert'

const AdminDashboardMachineTypes = () => {
    return (
        <>
            <header>
                <Navibar/>
            </header>
            <main>
                <Alert/>
                <AdminNavibar/>
                <AdminMachineTypes/>
            </main>
        </>
    )
}

export default AdminDashboardMachineTypes
