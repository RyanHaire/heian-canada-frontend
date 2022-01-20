import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AdminRegions from '../components/AdminRegions/AdminRegions'
import Navibar from '../components/Navibar'
import AdminNavibar from '../components/AdminNavibar'
import Alert from '../components/Alert'
import { loadUser } from '../actions/auth'
import { Redirect } from 'react-router-dom'
const AdminDashboardRegions = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadUser())
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
               <AdminRegions/>
           </main>
        </>
        : <Redirect to="/admin/login"/>}
        </>
    )
}

export default AdminDashboardRegions
