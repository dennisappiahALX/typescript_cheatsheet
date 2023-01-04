"use strict";
let age = 30;
let ispublished = true;
let course = 'Abena';
let level;
let ages = [2, 3, 4, 5, 6, 7];
let gender = ['Male', 'Female'];
let user = [1, 'Dennis'];
console.log(user);
function calculateTax(income, taxYear) {
    if (taxYear < 2020)
        return income * 1.2;
    return income * 50;
}
calculateTax(3000, 2000);
let employee = {
    id: 1,
    name: "Dennis",
    age: 40,
    retire: (date) => {
        console.log(date);
    }
};
function getCustomer(id) {
    return id === 0 ? null : { birthdate: new Date() };
}
let customer = getCustomer(0);
if (customer !== null)
    console.log(customer.birthdate);
let speed = null;
let ride = {
    speed: speed !== null && speed !== void 0 ? speed : 30
};
