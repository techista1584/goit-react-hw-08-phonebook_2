import css from './ContactItem.module.css';
import { RotatingLines } from 'react-loader-spinner';
import { useDeleteContactMutation } from 'redux/contacts/contactsApi';

function ContactItem({ id, name, number}) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  
  return (
    <li className={css.item} key={id}>
      <p>
        {name}: {number} {' '}
      </p>
      <button 
        className={css.button} 
        type="button" 
        onClick={() => deleteContact(id)}
        disabled={isDeleting}
      >
        {isDeleting && <RotatingLines width="10" />}  Delete
      </button>
    </li>
  );
};

export default ContactItem;
