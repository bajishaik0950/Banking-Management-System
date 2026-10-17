package com.banking.bankingmanagementsystem.controller;

import java.util.List;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.banking.bankingmanagementsystem.entity.Account;
import com.banking.bankingmanagementsystem.entity.Transaction;
import com.banking.bankingmanagementsystem.service.AccountService;
import com.banking.bankingmanagementsystem.service.TransactionService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/transactions")
public class TransactionController {

    private final TransactionService transactionService;
    private final AccountService accountService;

    public TransactionController(TransactionService transactionService,
                                 AccountService accountService) {
        this.transactionService = transactionService;
        this.accountService = accountService;
    }

    @GetMapping("/account/{accountId}")
    public ResponseEntity<List<Transaction>> getTransactionsByAccount(
            @PathVariable int accountId) {

        Account account = accountService.getAccountById(accountId);

        if (account == null) {
            return ResponseEntity.notFound().build();
        }

        List<Transaction> transactions =
                transactionService.getTransactionsByAccount(account);

        return ResponseEntity.ok(transactions);
    }
    
    @PostMapping("/transfer")
    public ResponseEntity<String> transferMoney(
            @RequestParam String fromAccountNumber,
            @RequestParam String toAccountNumber,
            @RequestParam double amount) {

        boolean transferred = accountService.transferMoney(
                fromAccountNumber,
                toAccountNumber,
                amount);

        if (transferred) {
            return ResponseEntity.ok("Money transferred successfully");
        }

        return ResponseEntity.badRequest()
                .body("Transfer failed. Check account numbers or balance.");
    }
}