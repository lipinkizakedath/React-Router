import classes from './MainNavigation.module.css';
import { NavLink } from 'react-router-dom';

function MainNavigation() {
  const isActive = ({ isActive }) => (isActive ? classes.active : undefined);

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to='/' className={isActive} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/events' className={isActive}>
              Events
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
