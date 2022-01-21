import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Navibar from '../components/Navibar'
import AdminNavibar from '../components/AdminNavibar'
import AdminDashboard from '../components/AdminDashboard'
import Alert from '../components/Alert'
import { loadUser } from '../actions/auth'


const AdminDashboardScreen = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadUser(window.location.pathname))
    }, [])

    const userState = useSelector((state) => state.auth) || []

    
    return (
        <>
        {userState.user !== null ?  
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
        : <Redirect to="/admin/login"/>}
        </>
        
       
    )
}

export default AdminDashboardScreen
