import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = ({ contacts }) => (
  <ul className={styles.list}>
    {contacts.map(contact => (
  <li key={contact.id} className={styles.item}>
    {contact.name}: {contact.number}
    <button className={styles.button}>Delete</button>
  </li>
))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactList;