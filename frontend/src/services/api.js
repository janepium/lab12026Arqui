import axios from 'axios';

// Dirección de tu backend Spring Boot
const API_BASE = 'http://localhost:8080/api';

// Peticiones para Clientes
export const getCustomers = () => axios.get(`${API_BASE}/customers`);
export const createCustomer = (customerData) => axios.post(`${API_BASE}/customers`, customerData);

// Peticiones para Transacciones
export const transferMoney = (transferData) => axios.post(`${API_BASE}/transactions`, transferData);
export const getTransactionHistory = (accountNumber) => axios.get(`${API_BASE}/transactions/${accountNumber}`);