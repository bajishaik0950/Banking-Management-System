import { useState } from 'react'
import axios from 'axios'

function Deposit() {
  const [accountId, setAccountId] = useState('')
  const [amount, setAmount] = useState('')
  const [account, setAccount] = useState(null)

  const handleDeposit = (event) => {
    event.preventDefault()
    if (!accountId || !amount || Number(amount) <= 0) {
  alert('Please enter a valid account ID and amount')
  return
}

    axios
      .post(
        `http://localhost:8080/api/accounts/${accountId}/deposit?amount=${amount}`
      )
      .then((response) => {
        setAccount(response.data)
        alert('Money deposited successfully!')

        setAmount('')
      })
      .catch((error) => {
        console.error('Error depositing money:', error)
        alert('Deposit failed')
      })
  }

  return (
    <div>
      <h2>Deposit Money</h2>

      <form onSubmit={handleDeposit}>
        <div>
          <label>Account ID: </label>
          <input
            type="number"
            value={accountId}
            onChange={(event) => setAccountId(event.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Amount: </label>
          <input
            type="number"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </div>

        <br />

        <button type="submit">Deposit</button>
      </form>

      <br />

      {account && (
        <div>
          <h3>Updated Account Details</h3>

          <p>Account Number: {account.accountNumber}</p>
          <p>Account Type: {account.accountType}</p>
          <p>Updated Balance: ₹{account.balance}</p>
        </div>
      )}
    </div>
  )
}

export default Deposit