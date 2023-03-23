let input;
let total = 0;

while (true) {
  input = prompt('Введіть число');

  if (input === null) { 
    alert(`Загальна сума чисел дорівнює ${total}`);
    break; 
  }

  inputNumber = Number(input); 

  if (isNaN(inputNumber)) { 
    alert('Було введено не число, попробуйте ще раз');
    continue; 
  }

  total += inputNumber; 
}
