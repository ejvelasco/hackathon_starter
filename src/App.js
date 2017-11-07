import React, { Component } from 'react';
import LandingPage from './components/LandingPage';
import './App.css';

const appStyle = {
  height: '100%',
};

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div id="app" style={appStyle}>
        <LandingPage />
      </div>
    );
  }
}

export default App;
