import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import AdminCreateRegion from '../components/AdminRegions/AdminCreateRegion'
import Navibar from '../components/Navibar'
import AdminNavibar from '../components/AdminNavibar'
import Alert from '../components/Alert'
import { Navigate } from 'react-router-dom'
import { loadUser } from '../actions/auth'
const AdminDashboardCreateRegion = () => {
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
               <AdminCreateRegion/>
           </main>
        </>
        : <Navigate to="/admin/login"/>}
        </>
    )
}

export default AdminDashboardCreateRegion
