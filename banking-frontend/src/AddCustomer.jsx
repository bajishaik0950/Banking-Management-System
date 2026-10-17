import { useState } from 'react'
import axios from 'axios'

function AddCustomer() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    const customer = {
      name: name,
      email: email,
      phone: phone
    }

    axios
      .post('http://localhost:8080/api/customers', customer)
      .then((response) => {
        console.log('Customer added:', response.data)

        setName('')
        setEmail('')
        setPhone('')

        alert('Customer added successfully!')
      })
      .catch((error) => {
        console.error('Error adding customer:', error)
        alert('Failed to add customer')
      })
  }

  return (
    <div>
      <h2>Add Customer</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Phone: </label>
          <input
            type="text"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>

        <br />

        <button type="submit">Add Customer</button>
      </form>
    </div>
  )
}

export default AddCustomer