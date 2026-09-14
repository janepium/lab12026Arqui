import React, { useState } from 'react';
import CreateAccountForm from './components/CreateAccountForm.jsx';
import TransferFound from './components/TransferFound.jsx';
import TransactionHistory from './components/TransactionHistory.jsx';

function App() {
  const [activeTab, setActiveTab] = useState('customers');

  return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
          <div className="container">
            <span className="navbar-brand fw-bold">Banco App 2026</span>
            <div className="navbar-nav">
              <button className={`nav-link btn btn-link ${activeTab === 'customers' ? 'active fw-bold' : ''}`}
                      onClick={() => setActiveTab('customers')}>
                Clientes
              </button>
              <button className={`nav-link btn btn-link ${activeTab === 'transfer' ? 'active fw-bold' : ''}`}
                      onClick={() => setActiveTab('transfer')}>
                Transferencias
              </button>
              <button className={`nav-link btn btn-link ${activeTab === 'history' ? 'active fw-bold' : ''}`}
                      onClick={() => setActiveTab('history')}>
                Histórico
              </button>
            </div>
          </div>
        </nav>

        {activeTab === 'customers' && <CreateAccountForm />}
        {activeTab === 'transfer' && <TransferFound />}
        {activeTab === 'history' && <TransactionHistory />}
      </div>
  );
}

export default App;