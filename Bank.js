document.getElementById("deposit").addEventListener("click", function () {
  const depositAmountField = document.getElementById("deposit-amount");
  const depositAmountText = depositAmountField.value;
  const depositTotal = document.getElementById("deposit-total");
  const depositTotalText = depositTotal.innerText;
  const newDepositTotal =
    parseFloat(depositTotalText) + parseFloat(depositAmountText);
  depositTotal.innerText = newDepositTotal;
  const balanceTotal = document.getElementById("balance-total");
  const balanceTotalText = balanceTotal.innerText;
  document.getElementById("balance-total").innerText =
    parseFloat(balanceTotalText) + parseFloat(depositAmountText);
});

document.getElementById("withdraw").addEventListener("click", function () {
  const withdrawAmountField = document.getElementById("withdraw-amount");
  const withdrawAmountText = withdrawAmountField.value;
  const withdrawTotal = document.getElementById("withdraw-total");
  const withdrawTotalText = withdrawTotal.innerText;
  const newWithdrawTotal =
    parseFloat(withdrawTotalText) + parseFloat(withdrawAmountText);

  const balanceTotal = document.getElementById("balance-total");
  const balanceTotalText = balanceTotal.innerText;

  if (parseFloat(withdrawAmountText) > parseFloat(balanceTotalText)) {
    alert("Insufficient Balance");
  } else {
    withdrawTotal.innerText = newWithdrawTotal;
    document.getElementById("balance-total").innerText =
      parseFloat(balanceTotalText) - parseFloat(withdrawAmountText);
  }
});
