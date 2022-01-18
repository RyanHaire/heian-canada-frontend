import React from 'react'
import { Link } from 'react-router-dom'
import AdminCreateMachine from '../components/AdminMachines/AdminCreateMachine'
import Navibar from '../components/Navibar'
import AdminNavibar from '../components/AdminNavibar'
import Alert from '../components/Alert'

const AdminDashboardCreateMachine = () => {
    return (
        <>
            <header>
                <Navibar/>
            </header>
            <main>
                <Alert/>
                <AdminNavibar/>
                <AdminCreateMachine/>
            </main>
        </>
    )
}

export default AdminDashboardCreateMachine
