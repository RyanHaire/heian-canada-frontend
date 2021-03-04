import React, { useEffect } from 'react'
import {
  BrowserRouter as Router, 
  Switch, 
  Route
} from 'react-router-dom'
import { useDispatch } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.min.css'

import HomeScreen from './screens/HomeScreen'
import NewMachineryScreen from './screens/NewMachineryScreen'
import UsedMachineryScreen from './screens/UsedMachineryScreen'
import ServicesScreen from './screens/ServicesScreen'
import ContactScreen from './screens/ContactScreen'
import ProductScreen from './screens/ProductScreen'
import LoginScreen from './screens/LoginScreen'
import AdminDashboardScreen from './screens/AdminDashboardScreen'


import { loadUser } from './actions/auth'
import setAuthToken  from './utility/setAuthToken'

if(localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch])

  return (
      <Router>
          <Switch>
            <Route exact path="/" component={HomeScreen}/>
            <Route exact path="/admin/login" component={LoginScreen}/>
            <Route exact path="/admin/dashboard" component={AdminDashboardScreen}/>
            <Route exact path="/new-machinery" component={NewMachineryScreen}/>
            <Route exact path="/new-machinery/:id" component={ProductScreen}/>
            <Route exact path="/used-machinery" component={UsedMachineryScreen}/>
            <Route exact path="/used-machinery/:id" component={ProductScreen}/>
            <Route exact path="/services" component={ServicesScreen}/>
            <Route exact path="/contact" component={ContactScreen}/>
          </Switch>
        </Router>
  );
}

export default App;
