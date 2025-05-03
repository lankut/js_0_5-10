/*
* Напишите код, который симулирует бросок двух шестигранных игральных кубиков и определяет, выпал ли выигрышный дубль.
* В переменные dice1 и dice2 должны присваиваться случайные целые числа от 1 до 6.
* Дубль считается выигрышным, если на обоих дайсах выпало одно и то же число, и это число больше 3.
* Полученное булево значение сохраните в переменной isWinningDouble

* Для успешного прохождения тестов не меняйте названия переменных!
*/
let randomNumber1 = Math.floor(Math.random() * 6);
let randomNumber2 = Math.floor(Math.random() * 6);
let isWinningDouble = false;// your code

let dice1;// your code
switch (randomNumber1) {
  case 0:
    dice1 = 1
    break;
  case 1:
    dice1 = 2
    break;
  case 2:
    dice1 = 3
    break;
  case 3:
    dice1 = 4
    break;
  case 4:
    dice1 = 5
    break;
  case 5:
    dice1 = 6
    break;
}

let dice2;// your code
switch (randomNumber2) {
  case 0:
    dice2 = 1
    break;
  case 1:
    dice2 = 2
    break;
  case 2:
    dice2 = 3
    break;
  case 3:
    dice2 = 4
    break;
  case 4:
    dice2 = 5
    break;
  case 5:
    dice2 = 6
    break;
}

if (dice1 === dice2 && dice1 > 3) {
  isWinningDouble = true;
}

console.log('Первый бросок: ' + dice1)
console.log('Второй бросок: ' + dice2)
if (isWinningDouble) {
  console.log('Выигрышный дубль!')
} else {
  console.log('Не выигрышный дубль.')
}

