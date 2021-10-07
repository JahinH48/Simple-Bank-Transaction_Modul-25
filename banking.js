document.getElementById('deposit-button').addEventListener('click', function () {
    // console.log('deposit buttton')
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    // console.log(depositAmount);

    const depositTotal = document.getElementById('deposit-total');
    // console.log(depositTotal.innerText);

    const previousDepositText = depositTotal.innerText;

    const previousDepositAmount = parseFloat(previousDepositText);

    const depositAmount = parseFloat(depositAmountText);

    const newDepositTotal = previousDepositAmount + depositAmount;
    depositTotal.innerText = newDepositTotal;


    // Update amount 

    const balanceTotole = document.getElementById('balance-total');
    balanceTotoleText = balanceTotole.innerText;
    const previousBlanceTotole = parseFloat(balanceTotoleText);
    const newBlanceTotole = previousBlanceTotole + depositAmount;

    balanceTotole.innerText = newBlanceTotole;




    // clear the inpute 
    depositInput.value = ' ';

})

// withdraw amount 

document.getElementById('withdraw-button').addEventListener('click', function () {
    // console.log('deposit buttton')
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    // console.log(withdrawInputText);

    const newWithdrawInputText = parseFloat(withdrawInputText);

    const withdrawInputTotole = document.getElementById('withdraw-total');

    const previouswithdrawInputTotoleText = withdrawInputTotole.innerText;

    const previouswithdrawInputTotoleAmount = parseFloat(previouswithdrawInputTotoleText);

    const totaleWithdrawAmount = newWithdrawInputText + previouswithdrawInputTotoleAmount;

    withdrawInputTotole.innerText = totaleWithdrawAmount;




    // update withdraw amount 

    const balanceWithdrawTotole = document.getElementById('balance-total');
    balanceWithdrawTotoleText = balanceWithdrawTotole.innerText;
    const previousWithdrawBlanceTotole = parseFloat(balanceWithdrawTotoleText);
    const newWithdrawBlanceTotole = previousWithdrawBlanceTotole - totaleWithdrawAmount;

    balanceWithdrawTotole.innerText = newWithdrawBlanceTotole;


    withdrawInput.value = '';
})
