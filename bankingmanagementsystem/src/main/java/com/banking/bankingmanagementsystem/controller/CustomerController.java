package com.banking.bankingmanagementsystem.controller;

import java.util.List;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.banking.bankingmanagementsystem.entity.Customer;
import com.banking.bankingmanagementsystem.service.CustomerService;
import org.springframework.web.bind.annotation.CrossOrigin;
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/customers")
public class CustomerController {

    private final CustomerService customerService;

    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @PostMapping
    public Customer createCustomer(@RequestBody Customer customer) {
        return customerService.createCustomer(customer);
    }

    @GetMapping
    public List<Customer> getAllCustomers() {
        return customerService.getAllCustomers();
    }

    @GetMapping("/{customerId}")
    public ResponseEntity<Customer> getCustomerById(@PathVariable int customerId) {

        Customer customer = customerService.getCustomerById(customerId);

        if (customer != null) {
            return ResponseEntity.ok(customer);
        }

        return ResponseEntity.notFound().build();
    }

    @PutMapping("/{customerId}")
    public ResponseEntity<Customer> updateCustomer(
            @PathVariable int customerId,
            @RequestBody Customer customer) {

        Customer updatedCustomer =
                customerService.updateCustomer(customerId, customer);

        if (updatedCustomer != null) {
            return ResponseEntity.ok(updatedCustomer);
        }

        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{customerId}")
    public ResponseEntity<Void> deleteCustomer(@PathVariable int customerId) {

        Customer existingCustomer =
                customerService.getCustomerById(customerId);

        if (existingCustomer != null) {
            customerService.deleteCustomer(customerId);
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.notFound().build();
    }
}