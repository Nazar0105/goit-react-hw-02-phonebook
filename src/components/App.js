import React, { Component } from 'react';
import ContactForm from './ContactForm'; 
import Filter from './Filter'; 
import ContactList from './ContactList'; 
import styles from './App.module.css'; // Це імпорт стилів

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  // Функція, яка буде викликана при зміні поля фільтрації
  handleFilterChange = (e) => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  // Функція, яка буде викликана при відправці форми додавання контакту
  handleAddContact = (newContact) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <div className={styles.container}>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.handleAddContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handleFilterChange} />
        <ContactList contacts={contacts} />
      </div>
    );
  }
}

export default App;

