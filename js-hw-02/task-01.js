let salary = prompt("Введіть розмір вашої зарплати"); 

let bonus = salary * 0.15; 
let totalEarnings = +salary + bonus; 
let taxes = totalEarnings * 0.1; 
let shoppingExpenses = 190; 

let remainingSalary = +salary + bonus - taxes - shoppingExpenses; 

alert("Залишок від вашої зарплати: " + remainingSalary); 