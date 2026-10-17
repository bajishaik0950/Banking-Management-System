package com.banking.bankingmanagementsystem.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.banking.bankingmanagementsystem.entity.Account;

public interface AccountRepository extends JpaRepository<Account, Integer> {
	
	Optional<Account> findByAccountNumber(String accountNumber);

}