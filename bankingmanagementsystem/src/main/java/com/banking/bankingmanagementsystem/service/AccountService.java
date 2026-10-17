package com.banking.bankingmanagementsystem.service;

import java.util.List;

import java.time.LocalDateTime;

import org.springframework.stereotype.Service;
import com.banking.bankingmanagementsystem.entity.Transaction;
import com.banking.bankingmanagementsystem.entity.Account;
import com.banking.bankingmanagementsystem.repository.AccountRepository;
import com.banking.bankingmanagementsystem.repository.TransactionRepository;


@Service
public class AccountService {

    private final AccountRepository accountRepository;
    private final TransactionRepository transactionRepository;

    public AccountService(AccountRepository accountRepository,TransactionRepository transactionRepository) {
        this.accountRepository = accountRepository;
        this.transactionRepository = transactionRepository;
    }

    public Account createAccount(Account account) {
        return accountRepository.save(account);
    }

    public List<Account> getAllAccounts() {
        return accountRepository.findAll();
    }

    public Account getAccountById(int accountId) {
        return accountRepository.findById(accountId).orElse(null);
    }

    public Account updateAccount(int accountId, Account account) {

        Account existingAccount =
                accountRepository.findById(accountId).orElse(null);

        if (existingAccount != null) {

            existingAccount.setAccountNumber(account.getAccountNumber());
            existingAccount.setAccountType(account.getAccountType());
            existingAccount.setBalance(account.getBalance());
            existingAccount.setCustomer(account.getCustomer());

            return accountRepository.save(existingAccount);
        }

        return null;
    }

    public void deleteAccount(int accountId) {
        accountRepository.deleteById(accountId);
    }
    
    public Account deposit(int accountId, double amount) {

        Account account = accountRepository.findById(accountId).orElse(null);

        if (account == null || amount <= 0) {
            return null;
        }

        account.setBalance(account.getBalance() + amount);

        Account savedAccount = accountRepository.save(account);

        Transaction transaction = new Transaction();
        transaction.setTransactionType("DEPOSIT");
        transaction.setAmount(amount);
        transaction.setTransactionDate(LocalDateTime.now());
        transaction.setAccount(savedAccount);

        transactionRepository.save(transaction);

        return savedAccount;
    }

    public Account withdraw(int accountId, double amount) {

        Account account = accountRepository.findById(accountId).orElse(null);

        if (account == null || amount <= 0 || amount > account.getBalance()) {
            return null;
        }

        account.setBalance(account.getBalance() - amount);

        Account savedAccount = accountRepository.save(account);

        Transaction transaction = new Transaction();
        transaction.setTransactionType("WITHDRAW");
        transaction.setAmount(amount);
        transaction.setTransactionDate(LocalDateTime.now());
        transaction.setAccount(savedAccount);

        transactionRepository.save(transaction);

        return savedAccount;
    }
    
    public boolean transferMoney(String fromAccountNumber,
            String toAccountNumber,
            double amount) {

Account fromAccount =
accountRepository.findByAccountNumber(fromAccountNumber).orElse(null);

Account toAccount =
accountRepository.findByAccountNumber(toAccountNumber).orElse(null);

if (fromAccount == null || toAccount == null) {
return false;
}

if (amount <= 0 || amount > fromAccount.getBalance()) {
return false;
}

fromAccount.setBalance(fromAccount.getBalance() - amount);
toAccount.setBalance(toAccount.getBalance() + amount);

Account savedFromAccount = accountRepository.save(fromAccount);
accountRepository.save(toAccount);

Transaction transaction = new Transaction();
transaction.setTransactionType("TRANSFER");
transaction.setAmount(amount);
transaction.setTransactionDate(LocalDateTime.now());
transaction.setAccount(savedFromAccount);

transactionRepository.save(transaction);

return true;
}
}