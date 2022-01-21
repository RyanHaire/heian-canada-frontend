import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AdminCreateMachine from '../components/AdminMachines/AdminCreateMachine'
import Navibar from '../components/Navibar'
import AdminNavibar from '../components/AdminNavibar'
import Alert from '../components/Alert'
import { Redirect } from 'react-router-dom'
import { loadUser } from '../actions/auth'
const AdminDashboardCreateMachine = () => {
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
               <AdminCreateMachine/>
           </main>
        </>
        : <Redirect to="/admin/login"/>}
        </>
    )
}

export default AdminDashboardCreateMachine
