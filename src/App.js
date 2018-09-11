import React, { Component } from 'react';
import { connect } from 'react-redux';
// import logo from './logo.svg';
import './App.css';
import { CheckUserLoggedIn } from './_redux/AuthActions'

class App extends Component {
  
  componentDidMount() {
    this.props.dispatch(CheckUserLoggedIn())
  }

  render() {
    return (
      <div className="App AppModuleMarginTop">
        <h2>
          This is a basic authentication app
          <br/>
          created using react and redux. 
        </h2>
        <br/>
        <h2>We are using local storage (Browser memory) to save data.</h2>
        <br/>
        <h2> It has only Signin and Signup fetature. </h2>
      </div>
    );
  }
}

const mapStateToProps = state => ({
 ...state
})

export default connect(mapStateToProps)(App);
