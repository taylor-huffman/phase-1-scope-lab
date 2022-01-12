// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName;
}

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer(name) {
    bestCustomer = name;
}

const leastFavoriteCustomer = 'John';

function changeLeastFavoriteCustomer(name) {
    leastFavoriteCustomer = name;
}