import { useState } from 'react'
import axios from 'axios'

function CreateAccount() {
  const [accountNumber, setAccountNumber] = useState('')
  const [accountType, setAccountType] = useState('SAVINGS')
  const [balance, setBalance] = useState('')
  const [customerId, setCustomerId] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    const account = {
      accountNumber: accountNumber,
      accountType: accountType,
      balance: Number(balance),
      customer: {
        customerId: Number(customerId)
      }
    }

    axios
      .post('http://localhost:8080/api/accounts', account)
      .then((response) => {
        console.log('Account created:', response.data)

        alert('Account created successfully!')

        setAccountNumber('')
        setAccountType('SAVINGS')
        setBalance('')
        setCustomerId('')
      })
      .catch((error) => {
        console.error('Error creating account:', error)
        alert('Failed to create account')
      })
  }

  return (
    <div>
      <h2>Create Account</h2>

      <form onSubmit={handleSubmit}>

        <div>
          <label>Account Number: </label>
          <input
            type="text"
            value={accountNumber}
            onChange={(event) => setAccountNumber(event.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Account Type: </label>
          <select
            value={accountType}
            onChange={(event) => setAccountType(event.target.value)}
          >
            <option value="SAVINGS">SAVINGS</option>
            <option value="CURRENT">CURRENT</option>
          </select>
        </div>

        <br />

        <div>
          <label>Initial Balance: </label>
          <input
            type="number"
            value={balance}
            onChange={(event) => setBalance(event.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Customer ID: </label>
          <input
            type="number"
            value={customerId}
            onChange={(event) => setCustomerId(event.target.value)}
          />
        </div>

        <br />

        <button type="submit">Create Account</button>

      </form>
    </div>
  )
}

export default CreateAccount