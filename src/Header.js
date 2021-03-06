import React from 'react';
import './Header.css';
import logo from './logo.svg';

const Header = props => (
  <div className="header">
    <img src={logo} className="logo" alt="logo" />
    <div className="title">{props.title}</div>
  </div>
);

export default Header;
