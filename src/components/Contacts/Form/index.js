import { useState, useEffect } from 'react'

const initialFormValues = { fullname: "", phone_number: "" }

function Form( {addContact, contacts} ) {

  const [form, setForm] = useState(initialFormValues)

  useEffect(() => {
    setForm(initialFormValues) // butona bastıktan sonra formları temizleme yani aslında boşluk atama.
  }, [contacts])

  const onChangeInput = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (form.fullname === "" || form.phone_number === ""){
      return false
    }

    addContact([ ...contacts, form ]) // önceki kayıtlarda gelsin diye ... lı kısmı ekledik

    console.log(form)
  }

  return (
    <form onSubmit={onSubmit} > {/* onClick={onSubmit} ile aynı*/}
      <div>
        <div>
          <input 
          name="fullname" 
          placeholder='Full name' 
          onChange={onChangeInput}
          value = {form.fullname} 
          />
        </div>

        <div>
          <input 
          name="phone_number" 
          placeholder='Phone number' 
          onChange={onChangeInput} 
          value = {form.phone_number}
          />
        </div>

        <div>
          <button>Add</button> {/* onClick={onSubmit} buraya da yazılabilirdi.*/}
        </div>

      </div>
    </form>
  )
}

export default Form