import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

// Import CSS modules
import css from './PageRegistration.module.css';

function PageRegistration() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ ...form }));
    setForm({ name: '', email: '', password: '' });
  };

  const { name, email, password } = form;

  return (
    <section className={css.pageRegistrationSection}>
      <h2 className={css.pageRegistrationTitle}>Please enter your registration details</h2>
      <form onSubmit={handleSubmit}>
        <label className={css.pageRegistrationLabel}>
          Name
          <input
            className={css.pageRegistrationInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces."
            placeholder="Example John"
            required
            value={name}
            onChange={handleChange}
          />
        </label>
        <label className={css.pageRegistrationLabel}>
          Email
          <input
            className={css.pageRegistrationInput}
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
        <label className={css.pageRegistrationLabel}>
          Password
          <input        
            className={css.pageRegistrationInput}
            type="password"
            name="password"
            required
            value={password}
            onChange={handleChange}
          />
        </label>
        <button className={css.pageRegistrationBtn} type="submit">
          Register
        </button>
      </form>
    </section>
  );
}

export default PageRegistration;
