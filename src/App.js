import './App.css';
import React, { Component } from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './components/home';
import Login from './components/auth/login';
import Register from './components/auth/register';

class App extends Component {
  render (){
    return (
      <React.Fragment>
        <Home />
        <main className="container">
          <Routes>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Routes>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
