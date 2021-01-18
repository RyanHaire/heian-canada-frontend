import HomeScreen from './screens/HomeScreen'
import NewMachineryScreen from './screens/NewMachineryScreen'
import UsedMachineryScreen from './screens/UsedMachineryScreen'
import ServicesScreen from './screens/ServicesScreen'
import ContactScreen from './screens/ContactScreen'
import ProductScreen from './screens/ProductScreen'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomeScreen/>
        </Route>

        <Route exact path="/new-machinery">
          <NewMachineryScreen/>
        </Route>

        <Route path="/new-machinery/:id" component={ProductScreen}/>

        <Route exact path="/used-machinery">
          <UsedMachineryScreen/>
        </Route>

        <Route path="/used-machinery/:id" component={ProductScreen}/>

        <Route exact path="/services">
          <ServicesScreen/>
        </Route>

        <Route exact path="/contact">
          <ContactScreen/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
