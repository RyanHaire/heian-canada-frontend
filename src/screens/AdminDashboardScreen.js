import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navibar from '../components/Navibar'
import AdminNavibar from '../components/AdminNavibar'
import AdminDashboard from '../components/AdminDashboard'
import Alert from '../components/Alert'


const AdminDashboardScreen = () => {
    return (
        <>
            <header>
                <Navibar/>
            </header>
            <main>
                <Alert/>
                <AdminNavibar/>
                <AdminDashboard/>
            </main>
        </>
    )
}

export default AdminDashboardScreen
