import { NavLink } from "react-router-dom";
import css from './AuthForm.module.css';

function AuthForm() {
  return (
    <nav>
      <NavLink to="/register" exact className={css.link}>
        Sign up
      </NavLink>
      <NavLink to="/login" exact className={css.link}>
        Log in
      </NavLink>
    </nav>
  );
}

export default AuthForm;
