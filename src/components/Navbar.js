import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from 'styles/Nav.module.css';
import logo from './image/logo.png';

const Navbar = () => (
  <nav className={styles.navBar}>
    <div className={styles.logo}>
      <NavLink to="/" className={styles.link}>
        <img src={logo} alt="travelers logo " />
        <h1>Space Rockets</h1>
      </NavLink>
    </div>

    <ul className={styles.navLinks}>
      <li className={styles.links}>
        <NavLink to="/" className={styles.link}>
          Rockets
        </NavLink>
      </li>
      <li>
        <NavLink to="/mission" className={styles.link}>
          Missions
        </NavLink>
      </li>
      <li>
        <NavLink to="/Profile" className={styles.link}>
          Profile
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
