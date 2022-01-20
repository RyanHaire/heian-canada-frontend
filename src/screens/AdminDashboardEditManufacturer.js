import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AdminEditManufacturer from '../components/AdminManufacturers/AdminEditManufacturer'
import Navibar from '../components/Navibar'
import AdminNavibar from '../components/AdminNavibar'
import Alert from '../components/Alert'
import { Redirect } from 'react-router-dom'
import { loadUser } from '../actions/auth'
const AdminDashboardEditManufacturer = (props) => {
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
               <AdminEditManufacturer {...props}/>
           </main>
        </>
        : <Redirect to="/admin/login"/>}
        </>
    )
}

export default AdminDashboardEditManufacturer
