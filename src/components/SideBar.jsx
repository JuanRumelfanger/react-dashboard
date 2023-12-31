// eslint-disable-next-line no-unused-vars
import React from 'react';
import logo from '../assets/images/logo-DH.png';

function SideBar() {
  return (
    <>
      <ul
        className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/"
        >
          <div className="sidebar-brand-icon">
            <img
              className="w-100"
              src={ logo }
              alt="Digital House"
            />
          </div>
        </a>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item active">
          
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">Actions</div>


        <li className="nav-item">
          <a className="nav-link" href="/">
            <i className="fas fa-fw fa-table"></i>
            <span>Tables</span>
          </a>
        </li>

        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
    </>
  );
}

export default SideBar;
