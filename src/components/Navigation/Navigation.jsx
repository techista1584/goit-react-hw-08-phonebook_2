import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

// Import CSS modules
import css from './Navigation.module.css';

function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav>
      <NavLink to="/" exact className={css.link}>
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink to="/contacts" exact className={css.link}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
}

export default Navigation;
