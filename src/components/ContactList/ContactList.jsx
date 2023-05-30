import styles from './ContactList.module.css';
import PropTypes from 'prop-types';
import ContactItem from '../ContactItem';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import Notification from 'components/Notification/Notification';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  if (contacts.length) {
    return (
      <ul className={styles.list}>
        {contacts.map(contact => (
          <ContactItem key={contact.id} {...contact} />
        ))}
      </ul>
    );
  }

  return (
    <Notification message="No saved contacts in the phonebook, please add.." />
  );
};

export default ContactList;
