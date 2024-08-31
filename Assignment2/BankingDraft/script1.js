let balance = 0;

function deposit() {
    const depositAmount = parseFloat(document.getElementById('deposit-amount').value);
    if (depositAmount > 0) {
        balance += depositAmount;
        document.getElementById('balance').innerText = balance;
        document.getElementById('deposit-amount').value = '';
    } else {
        alert('PLEASE ENTER A NUMERICAL DEPOSIT AMOUNT.');
    }
}

function withdraw() {
    const withdrawAmount = parseFloat(document.getElementById('withdraw-amount').value);
    if (withdrawAmount > 0 && withdrawAmount <= balance) {
        balance -= withdrawAmount;
        document.getElementById('balance').innerText = balance;
        document.getElementById('withdraw-amount').value = '';
    } else {
        alert('This attempt was blocked due to insufficient funds. Please enter an available withdrawal amount or deposit funds.');
    }
}