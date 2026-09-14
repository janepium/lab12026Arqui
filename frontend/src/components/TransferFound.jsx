import React, { useState } from 'react';
import { transferMoney } from '../services/api';

export default function TransferFound() {
    const [senderAccountNumber, setSenderAccountNumber] = useState('');
    const [receiverAccountNumber, setReceiverAccountNumber] = useState('');
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setIsError(false);

        try {
            await transferMoney({
                senderAccountNumber: senderAccountNumber.trim(),
                receiverAccountNumber: receiverAccountNumber.trim(),
                amount: parseFloat(amount)
            });

            setMessage('¡Transferencia realizada con éxito!');
            setSenderAccountNumber('');
            setReceiverAccountNumber('');
            setAmount('');
        } catch (err) {
            console.error(err);
            setIsError(true);
            setMessage('Error al procesar la transferencia. Verifique que ambas cuentas existan y tengan saldo suficiente.');
        }
    };

    return (
        <div className="container mt-4">
            <h3 className="mb-3">Realizar Transferencia</h3>

            {message && (
                <div className={`alert ${isError ? 'alert-danger' : 'alert-success'}`}>
                    {message}
                </div>
            )}

            <div className="card p-4 shadow-sm col-md-6 mx-auto">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label font-weight-bold">Cuenta Origen (Remitente)</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Número de cuenta origen..."
                            value={senderAccountNumber}
                            onChange={(e) => setSenderAccountNumber(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label font-weight-bold">Cuenta Destino (Destinatario)</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Número de cuenta destino..."
                            value={receiverAccountNumber}
                            onChange={(e) => setReceiverAccountNumber(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label font-weight-bold">Monto ($)</label>
                        <input
                            type="number"
                            step="0.01"
                            className="form-control"
                            placeholder="0.00"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-success w-100 mt-2">
                        Transferir
                    </button>
                </form>
            </div>
        </div>
    );
}