package com.banking.bankingmanagementsystem.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.banking.bankingmanagementsystem.entity.Customer;
import com.banking.bankingmanagementsystem.repository.CustomerRepository;

@Service
public class CustomerService {

    private final CustomerRepository customerRepository;

    public CustomerService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    public Customer createCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    public Customer getCustomerById(int customerId) {
        return customerRepository.findById(customerId).orElse(null);
    }

    public Customer updateCustomer(int customerId, Customer customer) {

        Customer existingCustomer = customerRepository.findById(customerId).orElse(null);

        if (existingCustomer != null) {
            existingCustomer.setName(customer.getName());
            existingCustomer.setEmail(customer.getEmail());
            existingCustomer.setPhone(customer.getPhone());

            return customerRepository.save(existingCustomer);
        }

        return null;
    }

    public void deleteCustomer(int customerId) {
        customerRepository.deleteById(customerId);
    }
}