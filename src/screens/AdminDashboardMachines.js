import React from 'react'
import { Link } from 'react-router-dom'
import AdminMachines from '../components/AdminMachines/AdminMachines'
import Navibar from '../components/Navibar'
import AdminNavibar from '../components/AdminNavibar'
import Alert from '../components/Alert'

const AdminDashboardMachines = () => {
    return (
        <>
            <header>
                <Navibar/>
            </header>
            <main>
                <Alert/>
                <AdminNavibar/>
                <AdminMachines/>
            </main>
        </>
    )
}

export default AdminDashboardMachines
