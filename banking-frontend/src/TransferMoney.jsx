import { useState } from 'react'
import axios from 'axios'

function TransferMoney() {
  const [fromAccountNumber, setFromAccountNumber] = useState('')
  const [toAccountNumber, setToAccountNumber] = useState('')
  const [amount, setAmount] = useState('')

  const handleTransfer = (event) => {
    event.preventDefault()
    if (
  !fromAccountNumber ||
  !toAccountNumber ||
  !amount ||
  Number(amount) <= 0
) {
  alert('Please enter valid account details and amount')
  return
}

if (fromAccountNumber === toAccountNumber) {
  alert('Source and destination accounts must be different')
  return
}

    axios
      .post(
        `http://localhost:8080/api/transactions/transfer?fromAccountNumber=${fromAccountNumber}&toAccountNumber=${toAccountNumber}&amount=${amount}`
      )
      .then((response) => {
        alert(response.data)
        setFromAccountNumber('')
        setToAccountNumber('')
        setAmount('')
      })
      .catch((error) => {
        console.error('Error transferring money:', error)
        alert('Transfer failed')
      })
  }

  return (
    <div>
      <h2>Transfer Money</h2>

      <form onSubmit={handleTransfer}>
        <div>
          <label>From Account Number: </label>
          <input
            type="text"
            value={fromAccountNumber}
            onChange={(event) => setFromAccountNumber(event.target.value)}
          />
        </div>

        <br />

        <div>
          <label>To Account Number: </label>
          <input
            type="text"
            value={toAccountNumber}
            onChange={(event) => setToAccountNumber(event.target.value)}
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

        <button type="submit">Transfer Money</button>
      </form>
    </div>
  )
}

export default TransferMoney