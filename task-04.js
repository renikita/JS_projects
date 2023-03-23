let credit = 23580;

const tech1 = "ремонтний дроїд";

const pricePerDroid = 3000;
console.log(`${credit} кредитів - кількість на вашому рахунку, один ${tech1} коштує ${pricePerDroid}`);
const entercount = Number(prompt("Введіть кількість для купівлі: "));
if(entercount <= 0){
    console.log("Відмінено користувачем.");
}
else{
    let totalPrice = credit - (pricePerDroid*entercount);
    console.log(totalPrice);
    if(totalPrice < 0){
        console.log("Недостатньо коштів на рахунку!");
    }
    else if(totalPrice >= 0){
        console.log(`Ви купили ${entercount} дроїдів, на рахунку залишилось ${totalPrice} кредитів.`);
    }
    else{
        console.log(`???`);        
    }
}