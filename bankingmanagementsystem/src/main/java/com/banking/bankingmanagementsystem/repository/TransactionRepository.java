package com.banking.bankingmanagementsystem.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.banking.bankingmanagementsystem.entity.Account;
import com.banking.bankingmanagementsystem.entity.Transaction;

public interface TransactionRepository extends JpaRepository<Transaction, Integer> {

    List<Transaction> findByAccount(Account account);
}