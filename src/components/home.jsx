import React, { Component } from 'react'
import SideBar from './sidebar';
import NavBar from './navbar';
import Footer from './footer';

class Home extends Component {
    state = {};

    render () {
        return (
          <React.Fragment>
            <div className="container-fluid">
              <NavBar />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <div className="jumbotron">
                    <SideBar />
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="jumbotron">
                    <h1>Content</h1>
                  </div>
                </div>
                <Footer />
              </div>
            </div>
          </React.Fragment>
        )
    }
}

export default Home;