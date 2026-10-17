import { useEffect, useState } from 'react'
import axios from 'axios'

function CustomerList() {
  const [customers, setCustomers] = useState([])

  const [editingCustomer, setEditingCustomer] = useState(null)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  useEffect(() => {
    fetchCustomers()
  }, [])

  const fetchCustomers = () => {
    axios
      .get('http://localhost:8080/api/customers')
      .then((response) => {
        setCustomers(response.data)
      })
      .catch((error) => {
        console.error('Error fetching customers:', error)
      })
  }

  const handleDelete = (customerId) => {
    axios
      .delete(`http://localhost:8080/api/customers/${customerId}`)
      .then(() => {
        alert('Customer deleted successfully!')
        fetchCustomers()
      })
      .catch((error) => {
        console.error('Error deleting customer:', error)
        alert('Failed to delete customer')
      })
  }

  const handleEdit = (customer) => {
    setEditingCustomer(customer)

    setName(customer.name)
    setEmail(customer.email)
    setPhone(customer.phone)
  }

  const handleUpdate = (event) => {
    event.preventDefault()

    const updatedCustomer = {
      name: name,
      email: email,
      phone: phone
    }

    axios
      .put(
        `http://localhost:8080/api/customers/${editingCustomer.customerId}`,
        updatedCustomer
      )
      .then(() => {
        alert('Customer updated successfully!')

        setEditingCustomer(null)
        setName('')
        setEmail('')
        setPhone('')

        fetchCustomers()
      })
      .catch((error) => {
        console.error('Error updating customer:', error)
        alert('Failed to update customer')
      })
  }

  return (
    <div className="customer-list">
      <h2>Customers</h2>

      {customers.map((customer) => (
        <div className="customer-list" key={customer.customerId}>
          <p>Name: {customer.name}</p>
          <p>Email: {customer.email}</p>
          <p>Phone: {customer.phone}</p>

          <button onClick={() => handleEdit(customer)}>
            Edit
          </button>

          <button onClick={() => handleDelete(customer.customerId)}>
            Delete
          </button>

          <hr />
        </div>
      ))}

      {editingCustomer && (
        <div>
          <h2>Edit Customer</h2>

          <form onSubmit={handleUpdate}>
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

            <button type="submit">
              Update Customer
            </button>

            <button
              type="button"
              onClick={() => setEditingCustomer(null)}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

export default CustomerList