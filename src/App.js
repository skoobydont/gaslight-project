import React, { Component } from 'react';
import ItemList from './components/ItemList';
import './App.css';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WebScrape from './components/WebScrape';
import LandingPage from './components/LandingPage';

class App extends Component {
  render(){
      return (
        <Router>
          <nav className="navbar navbar-dark bg-dark">
            <img className="navbar-brand" src="./logo192.png" alt="img"/>
            <Link to="/" className="btn btn-primary">Home</Link>
            <Link to="/textencrypt" className="btn btn-primary">Text Encryption</Link>
            <Link to="/itteam" className="btn btn-primary">Secure the Network</Link>
          </nav>
          <div className="App container-fluid">
            <Switch>
              <Route path="/textencrypt">
                <WebScrape />
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
