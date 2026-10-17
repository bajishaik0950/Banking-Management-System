package com.banking.bankingmanagementsystem.controller;

import java.util.List;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.banking.bankingmanagementsystem.entity.Account;
import com.banking.bankingmanagementsystem.service.AccountService;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/accounts")
public class AccountController {

    private final AccountService accountService;

    public AccountController(AccountService accountService) {
        this.accountService = accountService;
    }

    @PostMapping
    public Account createAccount(@RequestBody Account account) {
        return accountService.createAccount(account);
    }

    @GetMapping
    public List<Account> getAllAccounts() {
        return accountService.getAllAccounts();
    }

    @GetMapping("/{accountId}")
    public ResponseEntity<Account> getAccountById(
            @PathVariable int accountId) {

        Account account = accountService.getAccountById(accountId);

        if (account != null) {
            return ResponseEntity.ok(account);
        }

        return ResponseEntity.notFound().build();
    }

    @PutMapping("/{accountId}")
    public ResponseEntity<Account> updateAccount(
            @PathVariable int accountId,
            @RequestBody Account account) {

        Account updatedAccount =
                accountService.updateAccount(accountId, account);

        if (updatedAccount != null) {
            return ResponseEntity.ok(updatedAccount);
        }

        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{accountId}")
    public ResponseEntity<Void> deleteAccount(
            @PathVariable int accountId) {

        Account existingAccount =
                accountService.getAccountById(accountId);

        if (existingAccount != null) {
            accountService.deleteAccount(accountId);
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.notFound().build();
    }
    
    @PostMapping("/{accountId}/deposit")
    public ResponseEntity<Account> deposit(
            @PathVariable int accountId,
            @RequestParam double amount) {

        Account account = accountService.deposit(accountId, amount);

        if (account != null) {
            return ResponseEntity.ok(account);
        }

        return ResponseEntity.badRequest().build();
    }

    @PostMapping("/{accountId}/withdraw")
    public ResponseEntity<Account> withdraw(
            @PathVariable int accountId,
            @RequestParam double amount) {

        Account account = accountService.withdraw(accountId, amount);

        if (account != null) {
            return ResponseEntity.ok(account);
        }

        return ResponseEntity.badRequest().build();
    }
}