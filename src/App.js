import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd';

import "./App.css"

import {Navbar, Header} from './components';
const App = () => {
    return (
      <div className="app">
         <div className="crs__navbar container-md">
            <Navbar />
         </div>
        <section className="crs__header container-md">
          <Header />
        </section>
        <section className="crs__main container-md">
          <Header />
        </section>
        <div className="crs__footer container-md">
              
        </div>
      </div>
    );
}

export default App;
