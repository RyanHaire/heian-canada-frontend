import React from 'react'
import { Link } from 'react-router-dom'
import AdminMachines from '../components/AdminMachines/AdminMachines'
import Navibar from '../components/Navibar'
import Alert from '../components/Alert'

const AdminDashboardMachines = () => {
    return (
        <>
            <header>
                <Navibar/>
            </header>
            <main>
                <Alert/>
                <nav className="text-center mt-20">
                    <Link className="btn btn-primary mr-20" to="/admin/dashboard">Home</Link>
                    <Link className="btn btn-primary mr-20" to="/admin/dashboard/machines">Machines</Link>
                    <Link className="btn btn-primary mr-20" to="/admin/dashboard/machinetypes">Machine Types</Link>
                    <Link className="btn btn-primary mr-20" to="/admin/dashboard/regions">Regions</Link>
                </nav>
                <AdminMachines/>
            </main>
        </>
    )
}

export default AdminDashboardMachines
