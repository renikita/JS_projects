// •	Китай - 100 кредитів
// •	Чилі - 250 кредитів
// •	Австралія - 170 кредитів
// •	Індія - 80 кредитів
// •	Ямайка - 120 кредитів
let delivery = prompt(`Оберіть країну для діставки:` );
let price;

switch(delivery.toLowerCase()){
    case 'китай':
        price = 100;
        break;
    case 'чилі':
        price = 100;
        break;
    case 'австралія':
        price = 100;
        break;
    case 'індія':
        price = 100;
        break;
    case 'ямайка':
        price = 100;
        break;
        default:
    alert('Вашої країни немає у списку доставки.');
}
if (price) {
    alert(`Доставка в ${country} буде коштувати ${price} кредитів`);
  }
