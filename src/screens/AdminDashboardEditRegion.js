import React from 'react'
import { Link } from 'react-router-dom'
import AdminEditRegion from '../components/AdminRegions/AdminEditRegion'
import Navibar from '../components/Navibar'
import AdminNavibar from '../components/AdminNavibar'
import Alert from '../components/Alert'

const AdminDashboardEditRegion = (props) => {
    return (
        <>
            <header>
                <Navibar/>
            </header>
            <main>
                <Alert/>
                <AdminNavibar/>
                <AdminEditRegion {...props}/>
            </main>
        </>
    )
}

export default AdminDashboardEditRegion
