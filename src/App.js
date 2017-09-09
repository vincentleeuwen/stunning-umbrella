import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import eventData from './data/events.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eventData,
    };
  }
  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to React</h2>
        </div>
        <p className='App-intro'>
          {JSON.stringify(this.state.eventData)}
        </p>
      </div>
    );
  }
}

export default App;
