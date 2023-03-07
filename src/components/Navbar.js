import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from 'styles/Nav.module.css';

const Navbar = () => (
  <nav className={styles.navBar}>
    <h1 className={styles.logo}>Space Rockets</h1>
    <ul className={styles.navLinks}>
      <li className={styles.links}>
        <NavLink to="/rockets" className={styles.link}>
          Rockets
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className={styles.link}>
          Missions
        </NavLink>
      </li>
      <li>
        <NavLink to="/categories" className={styles.link}>
          Profile
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
