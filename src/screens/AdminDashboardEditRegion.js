import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AdminEditRegion from '../components/AdminRegions/AdminEditRegion'
import Navibar from '../components/Navibar'
import AdminNavibar from '../components/AdminNavibar'
import Alert from '../components/Alert'
import { Redirect } from 'react-router-dom'
import { loadUser } from '../actions/auth'
const AdminDashboardEditRegion = (props) => {

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
               <AdminEditRegion {...props}/>
           </main>
        </>
        : <Redirect to="/admin/login"/>}
        </>
    )
}

export default AdminDashboardEditRegion
