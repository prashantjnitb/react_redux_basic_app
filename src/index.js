import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginForm from './Components/Login/LoginForm'
import SignupForm from './Components/Signup/SignupForm'
import Header from './Components/Layout/Header';

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={App} />
        <Route exact path="/users/sign_in" component={LoginForm} />
        <Route exact path="/users/sign_up" component={SignupForm} />
      </div>
    </Router>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
