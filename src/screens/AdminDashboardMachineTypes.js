import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AdminMachineTypes from '../components/AdminMachineTypes/AdminMachineTypes'
import Navibar from '../components/Navibar'
import AdminNavibar from '../components/AdminNavibar'
import Alert from '../components/Alert'
import { Navigate } from 'react-router-dom'
import { loadUser } from '../actions/auth'
const AdminDashboardMachineTypes = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadUser(window.location.pathname))
        // attach current url to dispatch
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
               <AdminMachineTypes/>
           </main>
        </>
        : <Navigate to="/admin/login"/>}
        </>
       
    )
}

export default AdminDashboardMachineTypes
