import React, { Component } from 'react';
import './App.css';
import ItemList from './components/ItemList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import EncryptText from './components/EncryptMyText';
import LandingPage from './components/LandingPage';
import MEANPi from './components/mernPi/MEANPi';

class App extends Component {
  render(){
      return (
        <Router>
          <Nav />
          <div className="App container-fluid">
            <Switch>
              <Route path="/meanpi">
                <MEANPi />
              </Route>
              <Route path="/textencrypt">
                <EncryptText />
              </Route>
              <Route path="/itteam">
                <ItemList />
              </Route>
              <Route path="/">
                <LandingPage />
              </Route>
            </Switch>
          </div>
        </Router>
      );
    }
  }

export default App;
