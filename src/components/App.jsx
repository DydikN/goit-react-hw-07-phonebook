import { useSelector } from 'react-redux';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { getContacts, getError, getLoadig } from 'redux/selectors';
import Loader from 'components/Loader/Loader';

import styles from './app.module.scss';
import Notiflix from 'notiflix';

function App() {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getLoadig);
  const error = useSelector(getError);

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactForm />

      <div>
        <h2>Constacts</h2>
        {isLoading && <Loader />}
        {error && Notiflix.Notify.failure(error.message)}
        <Filter />

        {contacts.length > 0 ? <ContactList /> : <p>No contacts</p>}
      </div>
    </div>
  );
}

export default App;
