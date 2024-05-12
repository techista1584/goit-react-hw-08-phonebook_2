import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';

// Import CSS modules
import css from './UserMenu.module.css';

function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div className={css.menuContainer}>
      <div className={css.menuBox}>
        <p className={css.menuTitle}> Welcome, {name}</p>
      </div>
      <button
        className={css.menuBtn}
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log Out
      </button>
    </div>
  );
}

export default UserMenu;
