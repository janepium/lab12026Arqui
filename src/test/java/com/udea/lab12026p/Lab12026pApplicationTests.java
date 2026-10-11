package com.udea.lab12026p;

import com.udea.lab12026p.controller.CustomerController;
import com.udea.lab12026p.controller.TransactionController;
import com.udea.lab12026p.dto.CustomerDTO;
import com.udea.lab12026p.dto.TransactionDTO;
import com.udea.lab12026p.service.CustomerService;
import com.udea.lab12026p.service.TransactionService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;

import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@SpringBootTest
class Lab12026pApplicationTests {

	@Mock
	private CustomerService customerService;

	@Mock
	private TransactionService transactionService;

	@InjectMocks
	private CustomerController customerController;

	@InjectMocks
	private TransactionController transactionController;

	@Test
	void contextLoads() {
		// Verifica que la aplicación levante correctamente
	}

	@Test
	void testGetAllCustomers() {
		when(customerService.getAllCustomers()).thenReturn(Collections.emptyList());

		ResponseEntity<List<CustomerDTO>> response = customerController.getAllCustomers();

		assertNotNull(response);
		assertEquals(200, response.getStatusCode().value());
		assertTrue(response.getBody().isEmpty());
	}

	@Test
	void testGetCustomerById() {
		CustomerDTO mockCustomer = new CustomerDTO();
		when(customerService.getCustomerById(1L)).thenReturn(mockCustomer);

		ResponseEntity<CustomerDTO> response = customerController.getCustomerById(1L);

		assertNotNull(response);
		assertEquals(200, response.getStatusCode().value());
	}

	@Test
	void testCreateCustomer_NullBalance_ThrowsException() {
		CustomerDTO mockCustomer = new CustomerDTO();
		mockCustomer.setBalance(null);

		assertThrows(IllegalArgumentException.class, () -> {
			customerController.createCustomer(mockCustomer);
		});
	}

	@Test
	void testGetTransactionsByAccount() {
		// "12345" es solo un texto simulado de prueba
		when(transactionService.getTransactionsForAccount("12345")).thenReturn(Collections.emptyList());

		List<TransactionDTO> result = transactionController.getTransactionsByAccount("12345");

		assertNotNull(result);
		assertTrue(result.isEmpty());
	}
}