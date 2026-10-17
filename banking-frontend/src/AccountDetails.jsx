import { useState } from 'react'
import axios from 'axios'

function AccountDetails() {
  const [accountId, setAccountId] = useState('')
  const [account, setAccount] = useState(null)

  const handleSearch = (event) => {
    event.preventDefault()

    axios
      .get(`http://localhost:8080/api/accounts/${accountId}`)
      .then((response) => {
        setAccount(response.data)
      })
      .catch((error) => {
        console.error('Error fetching account:', error)
        alert('Account not found')
        setAccount(null)
      })
  }

  return (
    <div>
      <h2>Account Details</h2>

      <form onSubmit={handleSearch}>
        <label>Account ID: </label>

        <input
          type="number"
          value={accountId}
          onChange={(event) => setAccountId(event.target.value)}
        />

        <button type="submit">Search</button>
      </form>

      <br />

      {account && (
        <div>
          <h3>Account Information</h3>

          <p>Account ID: {account.accountId}</p>
          <p>Account Number: {account.accountNumber}</p>
          <p>Account Type: {account.accountType}</p>
          <p>Balance: ₹{account.balance}</p>

          <h3>Customer Information</h3>

          <p>Customer ID: {account.customer.customerId}</p>
          <p>Name: {account.customer.name}</p>
          <p>Email: {account.customer.email}</p>
          <p>Phone: {account.customer.phone}</p>
        </div>
      )}
    </div>
  )
}

export default AccountDetails