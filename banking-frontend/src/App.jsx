import { useState } from 'react'
import './App.css'
import Dashboard from './Dashboard'
import AddCustomer from './AddCustomer'
import CustomerList from './CustomerList'
import CreateAccount from './CreateAccount'
import AccountDetails from './AccountDetails'
import Deposit from './Deposit'
import Withdraw from './Withdraw'
import TransferMoney from './TransferMoney'
import TransactionHistory from './TransactionHistory'


function App() {

  const [page, setPage] = useState('dashboard')

  return (
    <div>

      <h1>Banking Management System</h1>
      <p>Welcome to our Banking Application</p>

      <nav>
        <button onClick={() => setPage('dashboard')}>Dashboard</button>
        <button onClick={() => setPage('customers')}>Customers</button>
        <button onClick={() => setPage('accounts')}>Accounts</button>
        <button onClick={() => setPage('deposit')}>Deposit</button>
        <button onClick={() => setPage('withdraw')}>Withdraw</button>
        <button onClick={() => setPage('transfer')}>Transfer</button>
        <button onClick={() => setPage('transactions')}>Transactions</button>
      </nav>

      <hr />

      {page === 'dashboard' && <Dashboard />}

      {page === 'customers' && (
        <>
          <AddCustomer />
          <hr />
          <CustomerList />
        </>
      )}

      {page === 'accounts' && (
        <>
          <CreateAccount />
          <hr />
          <AccountDetails />
        </>
      )}

      {page === 'deposit' && <Deposit />}

      {page === 'withdraw' && <Withdraw />}

      {page === 'transfer' && <TransferMoney />}

      {page === 'transactions' && <TransactionHistory />}

    </div>
  )
}

export default App