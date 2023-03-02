import { useDispatch, useSelector } from 'react-redux';

import { deleteContact } from 'redux/operations';

import { getContacts, getFilter } from 'redux/selectors';
import styles from './contact-list.module.scss';

const ContactList = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const deleteContactById = id => {
    dispatch(deleteContact(id));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    const result = contacts.filter(({ name, phone }) => {
      return (
        name.toLowerCase().includes(normalizedFilter) ||
        phone.toLowerCase().includes(normalizedFilter)
      );
    });

    return result;
  };

  return (
    <>
      <ul className={styles.list}>
        {getVisibleContacts().map(({ id, name, phone }) => (
          <li className={styles.item} key={id}>
            <p className={styles.text}>
              {name}: {phone}
            </p>
            <button
              className={styles.button}
              type="button"
              onClick={() => deleteContactById(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;