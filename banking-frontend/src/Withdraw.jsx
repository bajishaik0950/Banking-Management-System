import { useState } from 'react'
import axios from 'axios'

function Withdraw() {
  const [accountId, setAccountId] = useState('')
  const [amount, setAmount] = useState('')
  const [account, setAccount] = useState(null)

  const handleWithdraw = (event) => {
    event.preventDefault()
    if (!accountId || !amount || Number(amount) <= 0) {
  alert('Please enter a valid account ID and amount')
  return
}

    axios
      .post(
        `http://localhost:8080/api/accounts/${accountId}/withdraw?amount=${amount}`
      )
      .then((response) => {
        setAccount(response.data)
        alert('Money withdrawn successfully!')

        setAmount('')
      })
      .catch((error) => {
        console.error('Error withdrawing money:', error)
        alert('Withdrawal failed')
      })
  }

  return (
    <div>
      <h2>Withdraw Money</h2>

      <form onSubmit={handleWithdraw}>
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

        <button type="submit">Withdraw</button>
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

export default Withdraw