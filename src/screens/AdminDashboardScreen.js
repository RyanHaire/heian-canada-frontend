import React, { useState } from 'react'
import Navibar from '../components/Navibar'
import AdminMachines from '../components/AdminMachines/AdminMachines'
import AdminMachineTypes from '../components/AdminMachineTypes/AdminMachineTypes'
import AdminRegions from '../components/AdminRegions/AdminRegions'
import AdminDashboard from '../components/AdminDashboard'


const AdminDashboardScreen = () => {
    const [dashboard, setDashboard] = useState(true)
    const [machinePage, setMachinePage] = useState(0)
    const [machineTypePage, setMachineTypePage] = useState(0)
    const [regionPage, setRegionPage] = useState(0)

    const togglePages = (page) => {
        if(page === 'dashboard') {
            setDashboard(true)
            setMachinePage(false)
            setMachineTypePage(false)
            setRegionPage(false)
        } else if(page === 'machine') {
            setDashboard(false)
            setMachinePage(true)
            setMachineTypePage(false)
            setRegionPage(false)
        } else if(page === 'machineType') {
            setDashboard(false)
            setMachinePage(false)
            setMachineTypePage(true)
            setRegionPage(false)
        } else if(page === 'region') {
            setDashboard(false)
            setMachinePage(false)
            setMachineTypePage(false)
            setRegionPage(true)
        } else {
            setDashboard(true)
            setMachinePage(false)
            setMachineTypePage(false)
            setRegionPage(false)
        }
    }

    return (
        <>
            <header>
                <Navibar/>
            </header>
            <main>
                <nav className="text-center mt-20">
                <button className="btn btn-primary mr-20" onClick={() => togglePages('dashboard')}>Home</button>
                    <button className="btn btn-primary mr-20" onClick={() => togglePages('machine')}>Machines</button>
                    <button className="btn btn-primary mr-20" onClick={() => togglePages('machineType')}>Machine Types</button>
                    <button className="btn btn-primary mr-20" onClick={() => togglePages('region')}>Regions</button>
                </nav>
                {
                    machinePage ? 

                    <AdminMachines/> 
                    : 
                    
                    machineTypePage ? 
                    
                    <AdminMachineTypes/> 
                    
                    : 
                    
                    regionPage ? 

                    <AdminRegions/>

                    :

                    dashboard ? 
                    
                    <AdminDashboard/>

                    : 

                    <p className="text-center mt-20">
                        Loading
                    </p>
                }
            </main>
        </>
    )
}

export default AdminDashboardScreen
