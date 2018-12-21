import React, { Component } from 'react';

import './App.css';
import Banner from '../client/Components/Banner'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Banner />
          <p>
            Future home of Kenneth Lanza's portfolio page!
          </p>
        </header>
      </div>
    );
  }
}

export default App;
