import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import './Navbar.css';
import { FaGithub } from 'react-icons/fa';

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">MedicPortal</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse navbar_ul" id="navbarSupportedContent">
      <ul class="navbar-nav" id='ul_nav'>
        <li class="nav-item">
          <NavLink class="nav-link " id='link_route' aria-current="page" to="/">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" id='link_route' to="/patient">Patient Portal</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" id='link_route' to="/doctor">Doctor Portal</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" id='link_route' to="/register">sign up</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" id='link_route' to="/login">sign in</NavLink>
        </li>
      </ul>
    </div>
  </div> 
</nav>
    );
  }
}

export default Navbar;
