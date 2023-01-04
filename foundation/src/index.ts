// npm i -g typescript
// tsc --init for configuration
// run tsc

let age: number = 30;
let ispublished: Boolean = true;
let course: string = 'Abena';
let level;

// Arrays
let ages : number [] = [2,3,4,5,6,7]
let gender: string [] = ['Male', 'Female']


// Tuples
let user: [number, string] = [1, 'Dennis']
console.log(user)


// functions
function calculateTax(income:number, taxYear:number): number {
    if (taxYear < 2020)
      return income * 1.2
    return income * 50;
}

calculateTax(3000, 2000);


// objects
type Employee = {
    id:number,
    name : string,
    age: number,
    location?: string,
    retire: (date: Date) => void 
}

let employee :Employee = {
    id: 1,
    name: "Dennis",
    age : 40, 
    retire: (date: Date) => {
        console.log(date)
    }
}

 
type Customer = {
    birthdate : Date
}

function getCustomer (id: number) : Customer | null {
    return id === 0 ? null : { birthdate : new Date()};
}

let customer = getCustomer(0);

if (customer !== null) 
    console.log(customer.birthdate)

// Nullish Coaelsing operator

let speed : number | null = null;

let ride = {
    speed: speed ?? 30  
    //if speed not equal null or undefined, use 30
}