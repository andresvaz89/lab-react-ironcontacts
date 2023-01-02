import './App.css';
import { useState } from 'react';
import allContacts from './contacts.json';

function App() {
  const [contacts, setContacts] = useState(allContacts.slice(0, 5));
  const handleRandomContact = Math.floor(Math.random() * allContacts.length);

  const updateList = () => {
    setContacts([...contacts, allContacts[handleRandomContact]]);
  };

  const handleSortByPopularity = () => {
    setContacts([...contacts].sort((a, b) => b.popularity - a.popularity));
  };

  const handleSortByName = () => {
    setContacts([...contacts].sort((a, b) => a.name.localeCompare(b.name)));
  };

  const handleDeleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={updateList}>Add Random Contact</button>
      <button onClick={handleSortByPopularity}>Sort by popularity</button>
      <button onClick={handleSortByName}>Sort by name</button>

      <table>
        <tr>
          <th column="col">Picture</th>
          <th column="col">Name</th>
          <th column="col">Popularity</th>
          <th column="col">
            Won
            <br /> Oscar
          </th>
          <th column="col">
            Won
            <br /> Emmy
          </th>
        </tr>
        {contacts.map((contact) => {
          return (
            <tr key={contacts.id}>
              <td>
                <img
                  src={contact.pictureUrl}
                  alt="pic"
                  style={{ width: '10%' }}
                />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar === true ? '🏆' : ' '}</td>
              <td>{contact.wonEmmy === true ? '🏆' : ' '}</td>
              <td>
                <button onClick={() => handleDeleteContact(contact.id)}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
