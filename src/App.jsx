import './App.css';
import { useState } from 'react';
import allContacts from './contacts.json';

function App() {
  const [contacts, setContacts] = useState(allContacts.slice(0, 5));
  const handleRandomContact = Math.floor(Math.random() * allContacts.length);

  const updateList = () => {
    setContacts([...contacts, allContacts[handleRandomContact]]);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={updateList}>Add Random Contact</button>
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
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
