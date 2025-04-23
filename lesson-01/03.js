/* Используйте цикл while для нахождения суммы всех нечётных чисел от 1 до 20.
  Результат вычислений сохраните в переменной sum.

  Вам понадобиться оператор остатка от деления %. Например, выражение 5 % 2 вернёт остаток 1.
*/

// your code
let sum;

const numb = 20;
let count = 1;
let sum_odd = 0;

while (count <= numb) {
  if (count % 2 !== 0) {
    sum_odd = sum_odd + count;
  }
  count++;
}
sum = sum_odd