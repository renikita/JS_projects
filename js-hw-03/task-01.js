let salary = Number(prompt(`Введіть розмір вашої зарплати`));
let salaryold = salary;
let balance = 0.15;
let taxes = 0.10;
let outlay = 190;
salary = salary + (salary * balance); console.log(salary); salary = salary - (salary * taxes); console.log(salary); salary = salary - outlay; console.log(salary); 
alert(`Ваша чиста зарплатня: ${salary}, грязними: ${salaryold}, надбавка становить ${balance}, податки: ${taxes}, витрати становлять: ${outlay}`);
  