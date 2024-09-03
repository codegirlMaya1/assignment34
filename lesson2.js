// Function to validate email and name
function validateInput(email, name) {
    if (!email || !name) {
        console.log("Email and name are required.");
        return false;
    }
    return true;
}

// Function to browse and add a product
function addProduct(productName, productPrice, productList) {
    if (!productName || !productPrice) {
        console.log("Product name and price are required.");
        return;
    }
    productList.push({ name: productName, price: productPrice });
    console.log(`${productName} added to the list.`);
}

// Function to calculate the total cost
function calculateTotalCost(productList) {
    let totalCost = 0;
    productList.forEach(product => {
        totalCost += product.price;
    });
    return totalCost;
}

// Example usage
let email = "example@example.com";
let name = "John Doe";
let productList = [];

if (validateInput(email, name)) {
    addProduct("Product 1", 100, productList);
    addProduct("Product 2", 200, productList);
    let totalCost = calculateTotalCost(productList);
    console.log(`Total cost: $${totalCost}`);
}

// Banking
class BankAccount {
    constructor(initialBalance = 0) {
        this.balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited: $${amount}. New Balance: $${this.balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew: $${amount}. New Balance: $${this.balance}`);
        } else if (amount > this.balance) {
            console.log("Insufficient funds.");
        } else {
            console.log("Withdrawal amount must be positive.");
        }
    }

    getBalance() {
        console.log(`Current Balance: $${this.balance}`);
        return this.balance;
    }
}

// Example usage:
const myAccount = new BankAccount(100); // Initial balance of $100
myAccount.deposit(50); // Deposits $50
myAccount.withdraw(30); // Withdraws $30
myAccount.getBalance(); // Prints the current balance