
function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <p>Welcome to the Banking Management System.</p>

      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h3>Customers</h3>
          <p>Manage customer details</p>
        </div>

        <div className="dashboard-card">
          <h3>Accounts</h3>
          <p>Create accounts and check balances</p>
        </div>

        <div className="dashboard-card">
          <h3>Transactions</h3>
          <p>Deposit, withdraw and transfer money</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard