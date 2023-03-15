import classes from './EventsNavigation.module.css';
import { NavLink } from 'react-router-dom';

function EventsNavigation() {
  const isActive = ({ isActive }) => (isActive ? classes.active : undefined);
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to='/events' className={isActive} end>
              All Events
            </NavLink>
          </li>
          <li>
            <NavLink to='/events/new' className={isActive}>
              New Event
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
