import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

// Import CSS modules
import css from './PageLogin.module.css';

function PageLogin() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(authOperations.logIn({ ...form }));
    setForm({ email: '', password: '' });
  };

  const { email, password } = form;

  return (
    <section className={css.pageLoginSection}>
      <h1 className={css.pageLoginTitle}>Please enter your email and password</h1>
      <form onSubmit={handleSubmit}>
        <label className={css.pageHomeLabel}>
          Email
          <input
            className={css.pageHomeInput}
            type="email"
            name="email"
            pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
            title="Enter your email"
            placeholder="Example user@mail.com"
            required
            value={email}
            onChange={handleChange}
          />
        </label>
        <label className={css.pageHomeLabel}>
          Password
          <input
            className={css.pageHomeInput}
            type="password"
            name="password"
            title="Enter your password"
            required
            value={password}
            onChange={handleChange}
          />
          <button className={css.pageHomeBtn} type="submit">Log In</button>
        </label>
      </form>
    </section>
  );
};

export default PageLogin;
