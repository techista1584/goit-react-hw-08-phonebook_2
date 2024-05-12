import { useDispatch, useSelector } from 'react-redux';
import { filter } from 'redux/contacts/contactsSlice';
import { getFilter } from 'redux/contacts/contactsSelectors';

// Import CSS modules
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filterName = useSelector(getFilter);

  const onChangeFilter = evt => {
    dispatch(filter(evt.currentTarget.value.trim()));
  }

  return (
    <label htmlFor="" value={filterName} className={css.label}>
      <p className={css.titleFilter}>Find contacts by name</p>
      <input type="text" onChange={onChangeFilter} placeholder="Enter search name" className={css.input} />
    </label>
  );
}

export default Filter;