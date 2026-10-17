import { useState } from 'react'
import axios from 'axios'

function TransactionHistory() {
  const [accountId, setAccountId] = useState('')
  const [transactions, setTransactions] = useState([])

  const handleSearch = (event) => {
    event.preventDefault()

    axios
      .get(`http://localhost:8080/api/transactions/account/${accountId}`)
      .then((response) => {
        setTransactions(response.data)
      })
      .catch((error) => {
        console.error('Error fetching transactions:', error)
        alert('Failed to fetch transaction history')
      })
  }

  return (
    <div>
      <h2>Transaction History</h2>

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

      {transactions.map((transaction) => (
        <div className="transaction-item" key={transaction.transactionId}>
          <p>Transaction Type: {transaction.transactionType}</p>
          <p>Amount: ₹{transaction.amount}</p>
          <p>Date: {transaction.transactionDate}</p>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default TransactionHistory