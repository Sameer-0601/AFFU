import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <NavLink to="/" className="nav-logo"></NavLink>
        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Home</NavLink>
          <NavLink to="/my-subscriptions" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>My Subscriptions</NavLink>
          <NavLink to="/billing" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Billing</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
