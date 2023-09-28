import { useState, useEffect } from 'react'
import './styles.css';

import List from "./List"
import Form from "./Form"

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Michael",
      phone_number: 231233
    },
    {
      fullname: "Adam",
      phone_number: 45645
    },
    {
      fullname: "Nero",
      phone_number: 546879
    }
  ]);

  useEffect(() => {
    console.log(contacts)
  }, [contacts])

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts