import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

// Import CSS modules
import css from './PageContacts.module.css';

function PageContacts() {
  return (
    <div className={css.pageContactSection}>
      <h1 className={css.pageContactTitle}>PHONEBOOK APP</h1>
      <h2>Add new contact</h2>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default PageContacts;
