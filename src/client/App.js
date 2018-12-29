import React, { Component } from 'react';

import styles from './Styles/App.scss';

import Banner from '../client/Components/Banner'
import Navbar from '../client/Components/NavBar'
import Footer from '../client/Components/Footer'
import Main from '../client/Components/Main'



class App extends Component {
  render() {
    return (
      <div>
        <Banner />
        <div className='app'>
          <div className='appHeader'>
            <p>
              Future home of Kenneth Lanza's portfolio page!
            </p>
            {/* <NavBar /> */}
            <Main />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
