import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AdminCreateManufacturer from '../components/AdminManufacturers/AdminCreateManufacturer'
import Navibar from '../components/Navibar'
import AdminNavibar from '../components/AdminNavibar'
import Alert from '../components/Alert'
import { Navigate } from 'react-router-dom'
import { loadUser } from '../actions/auth'
const AdminDashboardCreateManufacturer = () => {
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
               <AdminCreateManufacturer/>
           </main>
        </>
        : <Navigate to="/admin/login"/>}
        </>
    )
}

export default AdminDashboardCreateManufacturer
