import React, { Component } from 'react';
import './App.css';

import Display from '../Display/connectedDisplay';

class App extends Component {

  render() {
    return (
      <main className="App">
        <Display />
      </main>
    );
  }
}

export default App;
