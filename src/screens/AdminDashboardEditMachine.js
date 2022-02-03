import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AdminEditMachine from '../components/AdminMachines/AdminEditMachine'
import Navibar from '../components/Navibar'
import AdminNavibar from '../components/AdminNavibar'
import Alert from '../components/Alert'
import { Navigate } from 'react-router-dom'
import { loadUser } from '../actions/auth'
const AdminDashboardEditMachineType = (props) => {
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
               <AdminEditMachine {...props}/>
           </main>
        </>
        : <Navigate to={"/admin/login"}/>}
        </>
    )
}

export default AdminDashboardEditMachineType
