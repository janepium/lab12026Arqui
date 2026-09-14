import React, { useState } from 'react';
import { getTransactionHistory } from '../services/api';

export default function TransactionHistory() {
    const [accountNumber, setAccountNumber] = useState('');
    const [transactions, setTransactions] = useState([]);
    const [searched, setSearched] = useState(false);

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const res = await getTransactionHistory(accountNumber);
            setTransactions(res.data);
            setSearched(true);
        } catch (err) {
            console.error(err);
            setTransactions([]);
            setSearched(true);
        }
    };

    return (
        <div className="container mt-4">
            <h3 className="mb-3">Histórico de Transacciones</h3>
            <form onSubmit={handleSearch} className="row g-2 mb-4">
                <div className="col-auto">
                    <input type="text" className="form-control" placeholder="N° de Cuenta"
                           value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} required />
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-dark">Buscar</button>
                </div>
            </form>

            {searched && (
                <table className="table table-hover table-bordered">
                    <thead className="table-primary">
                    <tr>
                        <th>ID Transacción</th>
                        <th>Cuenta Origen</th>
                        <th>Cuenta Destino</th>
                        <th>Monto</th>
                    </tr>
                    </thead>
                    <tbody>
                    {transactions.length > 0 ? (
                        transactions.map((t) => (
                            <tr key={t.id}>
                                <td>{t.id}</td>
                                <td>{t.senderAccountNumber}</td>
                                <td>{t.receiverAccountNumber}</td>
                                <td>${t.amount}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="text-center">No hay registros de transacciones para esta cuenta.</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            )}
        </div>
    );
}