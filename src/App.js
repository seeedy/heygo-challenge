import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { LocationSearch, LocationDetails } from './pages';
import './css/styles.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <div className='content'>
          <Switch>
            <Route path='/locations/:id' children={<LocationDetails />}></Route>
            <Route path='/'>
              <LocationSearch />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
