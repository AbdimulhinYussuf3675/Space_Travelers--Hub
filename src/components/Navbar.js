import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from 'styles/Nav.modules.css';

const Navbar = () => (
  <div className={styles.navBar}>
    <h1>
      <NavLink to="/" className={styles.logo}>
        Space Travelers
      </NavLink>
    </h1>
    <nav>
      <ul className={styles.navLinks}>
        <li className={styles.links}>
          <NavLink to="/" className={styles.link}>
            Rockets
          </NavLink>
        </li>
        <li className={styles.links}>
          <NavLink to="/mission" className={styles.link}>
            Missions
          </NavLink>
        </li>

      </ul>
    </nav>
  </div>
);

export default Navbar;
