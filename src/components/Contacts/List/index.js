import { useState } from 'react'

function List({ contacts }) {

  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => { //filtreleme işlemi yaptık bize her defasında bir item verdi
    return Object.keys(item).some((key) => // Object.keys(item) kısmında bunu keylerine ayırdık.
      item[key].toString().toLowerCase().includes(filterText.toLowerCase()) // ayrılan keylerden filterText.toLowerCase() kodu ile her hangi bir filterTezxtlenmiş yazıyı içeriyorsa bunu filtrele demek.
    )
  })

  return (
    <div>

      <input placeholder='Filter contact' value={filterText} onChange={(event) => setFilterText(event.target.value)} />

      <ul className='list'>
        {
          filtered.map((contact, index) => (
            <li key={index}>
              <span>{contact.fullname}</span>
              <span>{contact.phone_number}</span>
            </li>))
        }
      </ul>

      <p>Total Contacts ({filtered.length})</p>

    </div>
  )
}

export default List