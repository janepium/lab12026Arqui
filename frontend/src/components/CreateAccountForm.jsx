import React, { useState, useEffect } from 'react';
import { getCustomers, createCustomer } from '../services/api';

export default function CreateAccountForm() {
    const [customers, setCustomers] = useState([]);
    const [searchAccount, setSearchAccount] = useState('');
    const [queryAccount, setQueryAccount] = useState(''); // Guarda la cuenta buscada al dar clic en Consultar
    const [form, setForm] = useState({ firstName: '', lastName: '', accountNumber: '', balance: '' });
    const [message, setMessage] = useState('');

    const fetchCustomers = async () => {
        try {
            const res = await getCustomers();
            setCustomers(res.data);
        } catch (err) {
            console.error("Error al cargar clientes:", err);
        }
    };

    useEffect(() => {
        fetchCustomers();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createCustomer({ ...form, balance: parseFloat(form.balance) });
            setMessage('Cliente registrado exitosamente.');
            setForm({ firstName: '', lastName: '', accountNumber: '', balance: '' });
            fetchCustomers();
        } catch (err) {
            setMessage('Error al registrar el cliente.');
        }
    };

    // Ejecuta la búsqueda al presionar el botón "Consultar"
    const handleSearch = (e) => {
        e.preventDefault();
        setQueryAccount(searchAccount.trim());
    };

    // Limpia el filtro de búsqueda
    const handleClearSearch = () => {
        setSearchAccount('');
        setQueryAccount('');
    };

    // Filtrado de la lista según la consulta realizada
    const filteredCustomers = queryAccount
        ? customers.filter(c => c.accountNumber.toLowerCase() === queryAccount.toLowerCase())
        : customers;

    return (
        <div className="container mt-4">
            <h3 className="mb-3">Gestión de Clientes</h3>
            {message && <div className="alert alert-info">{message}</div>}

            {/* Formulario de registro */}
            <form onSubmit={handleSubmit} className="card p-3 mb-4 shadow-sm">
                <h5 className="card-title mb-3">Registrar Nuevo Cliente</h5>
                <div className="row g-2">
                    <div className="col-md-3">
                        <input type="text" className="form-control" placeholder="Nombre" value={form.firstName}
                               onChange={(e) => setForm({...form, firstName: e.target.value})} required />
                    </div>
                    <div className="col-md-3">
                        <input type="text" className="form-control" placeholder="Apellido" value={form.lastName}
                               onChange={(e) => setForm({...form, lastName: e.target.value})} required />
                    </div>
                    <div className="col-md-3">
                        <input type="text" className="form-control" placeholder="Número de Cuenta" value={form.accountNumber}
                               onChange={(e) => setForm({...form, accountNumber: e.target.value})} required />
                    </div>
                    <div className="col-md-3">
                        <input type="number" step="0.01" className="form-control" placeholder="Saldo Inicial" value={form.balance}
                               onChange={(e) => setForm({...form, balance: e.target.value})} required />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary mt-3 col-md-2">Guardar</button>
            </form>

            {/* Formulario de Consulta con Botón */}
            <div className="card p-3 mb-4 shadow-sm bg-light">
                <h5 className="card-title mb-3">Consultar Cliente por N° de Cuenta</h5>
                <form onSubmit={handleSearch} className="row g-2 align-items-center">
                    <div className="col-md-4">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Ingrese N° de cuenta..."
                            value={searchAccount}
                            onChange={(e) => setSearchAccount(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col-md-auto">
                        <button type="submit" className="btn btn-success me-2">
                            Consultar
                        </button>
                        {queryAccount && (
                            <button type="button" className="btn btn-secondary" onClick={handleClearSearch}>
                                Mostrar Todos
                            </button>
                        )}
                    </div>
                </form>
            </div>

            {/* Tabla de Resultados */}
            <h5 className="mb-3">
                {queryAccount ? `Resultados para la cuenta: ${queryAccount}` : 'Clientes Existentes'}
            </h5>
            <table className="table table-striped table-bordered">
                <thead className="table-dark">
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>N° Cuenta</th>
                    <th>Saldo</th>
                </tr>
                </thead>
                <tbody>
                {filteredCustomers.length > 0 ? (
                    filteredCustomers.map((c) => (
                        <tr key={c.id}>
                            <td>{c.id}</td>
                            <td>{c.firstName}</td>
                            <td>{c.lastName}</td>
                            <td>{c.accountNumber}</td>
                            <td>${c.balance}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="5" className="text-center text-muted">No se encontró ningún cliente con ese número de cuenta.</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
}