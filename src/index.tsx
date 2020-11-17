import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './index.css';
import LoginPage from './pages/LoginPage';
import MapPage from './pages/MapPage';
import ProfilePage from './pages/ProfilePage';
import RegisterPage from './pages/RegisterPage';

ReactDOM.render(
  <Router>
    <Route path='login' component={LoginPage} />
    <Route path='map' component={MapPage} />
    <Route path='profile' component={ProfilePage} />
    <Route path='register' component={RegisterPage} />
  </Router>,
  document.getElementById('root')
);
