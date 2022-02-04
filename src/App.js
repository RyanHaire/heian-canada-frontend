import React, { useEffect } from 'react'
import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom'
import { useDispatch } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.min.css'

import NotFound from './screens/NotFound'
import HomeScreen from './screens/HomeScreen'
import NewMachineryScreen from './screens/NewMachineryScreen'
import UsedMachineryScreen from './screens/UsedMachineryScreen'
import ServicesScreen from './screens/ServicesScreen'
import ContactScreen from './screens/ContactScreen'
import ProductScreen from './screens/ProductScreen'
import LoginScreen from './screens/LoginScreen'
import AdminDashboardScreen from './screens/AdminDashboardScreen'
import AdminDashboardMachines from './screens/AdminDashboardMachines'
import AdminDashboardCreateMachine from './screens/AdminDashboardCreateMachine'
import AdminDashboardEditMachine from './screens/AdminDashboardEditMachine'
import AdminDashboardCreateMachineType from './screens/AdminDashboardCreateMachineType'
import AdminDashboardEditMachineType from './screens/AdminDashboardEditMachineType'
import AdminDashboardMachineTypes from './screens/AdminDashboardMachineTypes'
import AdminDashboardCreateRegion from './screens/AdminDashboardCreateRegion'
import AdminDashboardEditRegion from './screens/AdminDashboardEditRegion'
import AdminDashboardRegions from './screens/AdminDashboardRegions'
import AdminDashboardCreateManufacturer from './screens/AdminDashboardCreateManufacturer'
import AdminDashboardEditManufacturer from './screens/AdminDashboardEditManufacturer'
import AdminDashboardManufacturers from './screens/AdminDashboardManufacturers'


import { loadUser } from './actions/auth'
import setAuthToken  from './utility/setAuthToken'

if(localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(loadUser(window.location.pathname))
  // }, [dispatch])

  return (
      <Router>
          <Routes>
            <Route exact path="/" element={<HomeScreen/>}/>
            <Route exact path="/admin/login" element={<LoginScreen/>}/>
            <Route exact path="/admin/dashboard" element={<AdminDashboardScreen/>}/>
            <Route exact path="/admin/dashboard/machines" element={<AdminDashboardMachines/>}/>
            <Route exact path="/admin/dashboard/machines/create" element={<AdminDashboardCreateMachine/>}/>
            <Route exact path="/admin/dashboard/machines/edit/:id" element={<AdminDashboardEditMachine/>}/>
            <Route exact path="/admin/dashboard/machinetypes" element={<AdminDashboardMachineTypes/>}/>
            <Route exact path="/admin/dashboard/machinetypes/create" element={<AdminDashboardCreateMachineType/>}/>
            <Route exact path="/admin/dashboard/machinetypes/edit/:id" element={ props => (<AdminDashboardEditMachineType {...props}/>)}/>
            <Route exact path="/admin/dashboard/regions" element={<AdminDashboardRegions/>}/>
            <Route exact path="/admin/dashboard/regions/create" element={<AdminDashboardCreateRegion/>}/>
            <Route exact path="/admin/dashboard/regions/edit/:id" element={ props => (<AdminDashboardEditRegion {...props}/>)}/>
            <Route exact path="/admin/dashboard/manufacturers" element={<AdminDashboardManufacturers/>}/>
            <Route exact path="/admin/dashboard/manufacturers/create" element={<AdminDashboardCreateManufacturer/>}/>
            <Route exact path="/admin/dashboard/manufacturers/edit/:id" element={ props => (<AdminDashboardEditManufacturer {...props}/>)}/>
            <Route exact path="/new-machinery" element={<NewMachineryScreen/>}/>
            <Route exact path="/new-machinery" element={<NewMachineryScreen/>}/>
            <Route exact path="/new-machinery/:id" element={<ProductScreen/>}/>
            <Route exact path="/used-machinery" element={<UsedMachineryScreen/>}/>
            <Route exact path="/used-machinery/:id" element={<ProductScreen/>}/>
            <Route exact path="/services" element={<ServicesScreen/>}/>
            <Route exact path="/contact" element={<ContactScreen/>}/>
            <Route element={<NotFound/>} />
          </Routes>
        </Router>
  );
}

export default App;
