import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../components/Navbar'


const Navbar = () => (
    <div className={styles.navBar}>
    <h1>
      <NavLink to="/" className={styles.logo}>
        Bookstore Store
      </NavLink>
    </h1>
    <nav>
      <ul className={styles.navLinks}>
        <li className={styles.links}>
          <NavLink to="/" className={styles.link}>
            Books
          </NavLink>
        </li>
        <li className={styles.links}>
          <NavLink to="/categories" className={styles.link}>
            Categories
          </NavLink>
        </li>

      </ul>
    </nav>
  </div>
)

export default Navbar