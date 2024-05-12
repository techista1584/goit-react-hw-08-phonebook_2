import React from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../redux/auth/authSelector';
import { Logo } from '../Logo/Logo';
import styles from './Navigation.module.css';


const Navigation = ({isAuthenticated}) => (
    <nav>
    { isAuthenticated ?
      <NavLink
      exact
      to='/contacts'
      className={styles.link}
      activeClassName={styles.activeLink}
      >
          Contacts
      </NavLink> :
      <Logo name={'Phonebook'}/>
    }
        
    </nav>
)

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state)
})

export default connect(mapStateToProps)(Navigation)