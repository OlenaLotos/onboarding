import { NavLink } from 'react-router-dom';
// import Header from 'modules/Header/Header';

import styles from './menu.module.css';

import items from './items';

const getClassName = ({ isActive }) => {
  const className = isActive ? `${styles.link} ${styles.active}` : styles.link;
  return className;
};

const Menu = () => {
  const elements = items.map(({ id, to, text }) => (
    <div className={styles.menuItemWrapper}>
      <li className={styles.menuItem} key={id}>
        <NavLink className={getClassName} to={to}>
          {text}
        </NavLink>
      </li>
    </div>
  ));

  return (
    <div className={styles.wrapper}>
      {/* <Header></Header> */}
      <header className={styles.header}>
        <div className={styles.logo_wrapper}>
          {/* <div className={styles.wrapper}> */}
          <a
            // className={styles.link}
            href="https://www.banklviv.com/"
            rel="noreferrer noopener"
          >
            <img className="logo" alt="" />
          </a>
        </div>
        <ul className={styles.menu}>{elements}</ul>
      </header>
    </div>
  );
};

export default Menu;
