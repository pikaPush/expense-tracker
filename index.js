const balanceEl = document.getElementById("balance");
const incomeAmountEl = document.getElementById("income");
const expensesAmountEl = document.getElementById("expenses");
const transactionEl = document.getElementById("transaction-lists");
const transactionFormEl = document.getElementById("transaction-form");
const descriptionEl = document.getElementById("description");
const amountEl = document.getElementById("amount");

let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

transactionFormEl.addEventListener("submit", addTransaction);

function addTransaction(e) {
  e.preventDefault();

  const description = descriptionEl.value.trim();
  const amount = parseFloat(amountEl.value);

  transactions.push({
    id: Date.now(),
    description,
    amount,
  });

  localStorage.setItem("transactions", JSON.stringify(transactions));
  
  updateTransactionList()
  updateSummary();

  transactionFormEl.reset();
}


