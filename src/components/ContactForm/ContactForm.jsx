import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { nanoid } from 'nanoid'
import { useFetchContactsQuery, useCreateContactMutation } from 'redux/contacts/contactsApi';
import Loader from 'components/Loader/Loader';

// Import CSS modules
import css from './ContactForm.module.css';

function ContactForm  () { 
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data: contacts, isLoading } = useFetchContactsQuery();
  const [createContact] = useCreateContactMutation();


  const handleChange = e => {
    const { name, value } = e.currentTarget;
    
    switch (name) {
      case 'name': setName(value);
        break;
      case 'number': setNumber(value);
        break;
      default: return;
    }
  };

  const addContact = data => {
    const contactName = contacts.map(contact => contact.name.toLowerCase());
    const isAdding = contactName.includes(data.name.toLowerCase());

    if (!isAdding) {
      createContact(data);
      reset();
      toast.success(`😃 Contact, ${name} successfully added`);
    } else {
      toast.error(`😏${data.name} is already in contacts.`);
    }
  };

    const handleSubmit = e => {
   e.preventDefault();

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    addContact(newContact);
  };

   const reset = () => {
    setName('');
    setNumber('');
  };

    return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete='off'>
      <label className={css.label}>
        Name
        <input
          className={css.input}
          type="text"
          id="name_input"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Enter your name..."
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label className={css.label}>
        Number
        <input
          className={css.input}
          type="tel"
          id="name_input"
          name="number"
          value={number}
          onChange={handleChange}
          placeholder="Enter your number..."
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required            
        />
      </label>

      <button className={css.button} type="submit" >Add contact</button>
      <Toaster />
      {isLoading && <Loader />}
    </form>
  );
};

export default ContactForm;