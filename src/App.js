import React, { Component } from 'react';
import ItemList from './components/ItemList';
import './App.css';

class App extends Component {
  render(){
      return (
        <div className="App container-fluid">
          <ItemList/>
        </div>
      );
    }
  }

export default App;
