import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

// Import CSS modules
import css from './PageHome.module.css';

function PageHome() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <section className={css.pageHomeSection}>
        <h1 className={css.pageHomeTitle}>Welcome 👋</h1>
        <h1 className={css.pageHomeTitle2}>Now you will exactly not forget your contacts!</h1>
        {!isLoggedIn && (      
          <p className={css.pageHomeText}> Please, <b>Sign up</b> or <b>Log in</b> to have access to the
            Phonebook!</p>
        )}
      </section>
    </>
  );
}

export default PageHome;
