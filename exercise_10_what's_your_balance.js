// What's Your Balance?
// Find the account with a balance of 12 and assign it to the variable 'account'.

var accounts = [{ balance: -10 }, { balance: 12 }, { balance: 0 }];

var account = accounts.find(function (account) {
  return account.balance === 12;
});
