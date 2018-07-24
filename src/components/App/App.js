import React, { Component } from 'react';
import './App.css';

import ConnectedDisplay from '../Display/connectedDisplay';

class App extends Component {

  render() {
    return (
      <main className="App">
        <ConnectedDisplay />
      </main>
    );
  }
}

export default App;
