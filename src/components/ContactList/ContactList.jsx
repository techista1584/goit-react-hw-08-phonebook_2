import ContactItem from '../ContactItem/ContactItem';
import React from 'react';
import Loader from 'components/Loader';
import { useSelector } from 'react-redux';
import { useFetchContactsQuery } from 'redux/contacts/contactsApi';
import { getFilter } from 'redux/contacts/contactsSelectors';

// Import CSS modules
import css from './ContactList.module.css';

const ContactList = () => {
  const { data: contacts, error, isLoading } = useFetchContactsQuery();

  const filter = useSelector(getFilter);

  const filterContacts = () => {
    return (
      contacts &&
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    );
  };

  const contactList = filterContacts();
  const renderContacts = contacts && contactList.length > 0;

  return (
    <>
      <ul className={css.list}>
        {renderContacts &&
          contactList.map(({ id, name, number }) => (
            <ContactItem id={id} key={id} name={name} number={number} />
          ))}
        {isLoading && <Loader />}
        {error && (
          <h2 className={css.error}>Try adding phone details or contact your administrator</h2>
        )}
      </ul>
    </>
  );
};

export default ContactList;
