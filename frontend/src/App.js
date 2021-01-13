import HomeScreen from './screens/HomeScreen';
import NewMachineryScreen from './screens/NewMachineryScreen';
import UsedMachineryScreen from './screens/UsedMachineryScreen';
import ServicesScreen from './screens/ServicesScreen';
import ContactScreen from './screens/ContactScreen';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
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

        <Route exact path="/used-machinery">
          <UsedMachineryScreen/>
        </Route>

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
