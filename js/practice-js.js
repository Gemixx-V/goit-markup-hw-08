// if (true) {
//     console.log('true');

// }

// let a = 0;
// let = 1;
// if (a && b) {
//     console.log('ok');
// }
// else {
//     console.log(' not OK');
// }
//  let value = NaN;
//  let toString = String(value);
//  console.log(toString, typeof (toString));

//  toString = value + '';
//  console.log(toString);

// value = 'data';
// let toNumber = Number(value);
// console.log(toNumber);

// toNumber = +value;
// console.log(toNumber);


// 1 способ приведения к числу
// value = '3456';
// toNumber = Number(value);
// console.log(toNumber);

// 2 способ приведения к числу

// toNumber = +value;
// console.log(toNumber);

// //  число

// value = '345a6vvbbb';
// toNumber = parseInt(value);
// console.log(toNumber);

// // число с запятой

// value = '345.6vvbbb';
// toNumber = parseFloat(value);
// console.log(toNumber);

// пустая строка

// value = '';
// console.log(Number(value));

// // пробел

// value = ' ';
// console.log(Number(value));


// value = '   ';
//    console.log(value.trim());  // зачищает пробелы
// console.log(Number(value.trim()));

// // длина строки

// console.log(value.length);

// value = true;
// console.log(Number(value));


// value = false;
// console.log(Number(value));


// value = null;
// console.log(Number(value));


// value = undefined;
// console.log(Number(value));

// value = null;
// console.log(Boolean(value));

// value = '';
// console.log(Boolean(value));

// value = ' ';
// console.log(Boolean(value));

// value = 0;
// console.log(Boolean(value));

// value = 1;
// console.log(Boolean(value));

// value = NaN;
// console.log(Boolean(value));


// value = Infinity;
// console.log(Boolean(value));

//  let number = 2;
//  console.log(number);

//  number = !number;
//  console.log(number);

// let number = 3;
// console.log(number);

// number = !!number;
// console.log(number);

// value = false;
// console.log(value);
// console.log(Boolean(value));


// Логические операторы
 

//  && -  И

// console.log( 1 && true && 'javascript'); // javascript
// //        true && true &&  true

// console.log( 0 && true && 'javascript');
// //       false && true &&  true

// console.log(true && 0 && 'javascript');

// console.log(1 || true || 'javascript');

// console.log(0 || false || null); // возвращает последнее значение

// console.log( 0 || null || false); // возвращает последнее значение


// age = 15;
// if (age >= 12 && age <= 14) {
//     console.log('ok');
// }
// else {
//     console.log('not ok');
// }

// age = 15;
// if (age < 12 || age > 14) {
//     console.log('not ok');
// }
// else {
//     console.log('ok');
// }
 

//   let day = 'Saturday';
//  if (day === 'monday' || day === 'tuesday' || day === 'wednesday' || day === 'thursday' || day === 'friday') {
//      console.log('work day');
//  }
//  else {
//      console.log('day off');
//  }

// switch (day) {
//     case 'monday':
//         console.log(`${day}-work day`);
//         break;
//     case 'tuesday':
//         console.log(`${day}-work day`);
//         break;
//     case 'wednesday':
//         console.log(`${day}-work day`);
//         break;
//       case 'thursday':
//         console.log(`${day}-work day`);
//         break;
//       case 'friday':
//         console.log(`${day}-work day`);
//         break;
//     default: console.log(`${day}-weekend`);
// }

// let day = 'monday';
// switch (day) {
//     case 'monday':
//     case 'tuesday':
//     case 'wednesday':
//     case 'thursday':
//     case 'friday':
//         console.log(`${day}-work day`);
//         break;
//     default: console.log(`${day}-weekend`);
// }

//===  проверить является ли год високосный. ===

// let year = 1982;
// let result = year % 4;
// console.log (result);
// if (year % 4 === 0) {
//     console.log(`${year} - leap year`);
// }
// else {
//     console.log(`${year} - not a leap year`);
// }

//  ==== pattern guard clause =======

// let year = 1972;
// let result = year % 4;

// function checkYear() {
//     if (year % 4 === 0)
//         return console.log(`${year} - leap year`);
//     return console.log(`${year} - not a leap year`);
// }
// checkYear();

    
//  комп загадывает число от 1 до 10.
//  пользователь указывает свое число.
//  если числа совпали - указываем ничья.

let compNumber;
let userNumber = 3;

// function getPlay() {
//     compNumber = Math.round( Math.random() * (10 - 1) + 1);
//     console.log(compNumber);
//     if (compNumber === userNumber) {
//         console.log('Вы угадали');
//     }
//     else {
//         console.log('Вы не угадали');
//    }

   
// }
// getPlay();

//  написать прогу которая будет ссумировать,отнимать,умножать и делить 2 значения
// которые пользователь вводит через промт. Результат выводить .


// function getTotal() {
//     let num1 = Number(prompt('введите первое число'));
// let num2 = Number(prompt('введите второе число'));
//     let symbol = prompt('введите оператор');
//     if (symbol === '+') {
//         console.log(num1 + num2);
//     }
//     else if (symbol === '-') {
//         console.log(num1 - num2);
//     }
    
//     else if (symbol === '*') {
//         console.log(num1 * num2);
//     } 
//     else if (symbol === '/') {
//         console.log(num1 / num2);
//     }
//     else {
//         console.log('Вы ввели не символ');
//     }
// }

// getTotal();


//  перевести температуру из C в F.

// function toCelsius(fahrenheit) {
//     let result = (fahrenheit - 32) * 5 / 9;
//     return result;
// }
// let result = toCelsius(75);
// console.log(result);



// function toFahrenheit(celsius) {
//     let result = celsius * 9 / 5 + 32;
//     return result;
// }
// let result = toFahrenheit(7);
// console.log(result);

// const stars = 3;
// let price;

// if (stars === 1) {
//     price = 20;
// } else if (stars === 2) {
//     price = 30;
// } else if (stars === 3) {
//     price = 50;
// } else if (stars === 4) {
//     price = 70;
// } else if (stars === 5) {
//     price = 120;
// } else {
//     console.log('Такого количества звезд нет');
// }
// console.log(price);

// const stars = 2;
// let price;

// switch (stars) {
//     case 1:
//         price = 20;
//         break;
//     case 2:
//         price = 30;
//         break;
//     case 3:
//         price = 50;
//         break;
//     case 4:
//         price = 70;
//         break;
//     case 5:
//         price = 120;
//         break;
    
//     default:
//         console.log('Такого количества звезд нет');
// }
// console.log(price);

// const stars = 5;
// let price;

// if (stars === 1 || stars === 2) {
//     price = 20;
// } else if (stars === 3 || stars === 4) {
//     price = 30;
// } else if (stars === 5) {
//     price = 120;
// } else {
//     console.log('Такого количества звезд нет');
// }
// console.log(price);

// const stars = 2;
// let price;

// switch (stars) {
//     case 1:
//         case 2:
//         price = 20;
//         break;
    
//     case 3:
//         case 4:
//         price = 30;
//         break;
    
//     case 5:
//         price = 120;
//         break;
    
//     default:
//         console.log('Такого количества звезд нет');
// }
// console.log(price);


//    === Цикл for ====

//  for (initialization; condition; post-expression) {
//   // statements
// }


// for (let i = 1; i <= 10; i += 1) {
//     console.log(i);
// }
// console.log('qwerty');

// for (let i = 10; i >= 0; i -= 2) {
//     console.log(i);
// }
// console.log('qwerty');

// for (let i = 0; i <= 500; i += 100) {
//     console.log(i);
// }
// console.log('qwerty');
 
// for (let i = 500; i >= 0; i -= 100) {
//     console.log(i);
// } console.log('qwerty');

//  сделать переменную

// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 7;
// let totalSalary = 0;

// // перебрать работников в цикле

// for (let i = 1; i <= employees; i += 1) {

//     // сгенерить случайную зарплату

//     const salary = Math.round(
//         Math.random() * (maxSalary - minSalary) + minSalary,
//     );
//     console.log(`ЗП работника номер ${i} - ${salary}`);

//     // прибавить к тоталу

//     totalSalary += salary;
// }
// //    лог

// console.log('totalSalery:', totalSalary);


// обьявить переменные

// const min = 0;
// const max = 5  ;
// let total = 0;

// фор от мир до макс с шагом в 1

// for (let i = min; i <= max; i += 1) {
//     console.log(i);

// проверяем остаток от деления

//     if (i % 2 === 0) {
//         console.log('четное', i);

// пишем в сумму

//         total += i;
//     }
    
// }
// console.log('total', total);



// const min = 0;
// const max = 5  ;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//     console.log(i);
//     if (i % 2 !== 0) {
//         console.log('нечетное', i);
//         total += i;
//     }
    
// }
// console.log('total', total);



// const min = 0;
// const max = 5  ;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//     if (i % 2 !== 0) {
//         console.log('не четное', i);
//         continue;
        
//     }
//     console.log('четное', i);
//         total += i;
    
// }
// console.log('total' , total);

// let balance = 10000;
// const payment = 2000;

// console.log(`Общая сумма заказа ${payment}  кредитов.
// Проверяем кол-во доступных средств на счету`);

// if (payment <= balance) {
//     console.log('ok')
//     balance -= payment;
//     console.log('Спасибо за покупку');
//     console.log(`На счету осталось ${balance}  кредитов`);
// } else {
//     console.log('На счету недостаточно средств');
// }
// console.log('Операция завершена');

// let totalSpent = 5000;
// let payment = 500;
// let discount = 0;

//  if (totalSpent >= 100 && totalSpent < 1000) {
//     console.log('Бронзовый партнер,скидка 2%');
//     discount = 0.02;

// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//     console.log('Серебрянный партнер,скидка 5%');
//      discount = 0.05;
     
// } else if(totalSpent >= 5000){
//     console.log('Золотой партнер,скидка 10%');
//      discount = 0.1;
     
//  } else {
//     console.log('Не партнер, скидка 0%');
// }
// payment -= payment * discount;
// // payment = payment - payment * discount;

// console.log(`Оформляем заказ на сумму ${payment} со скидкой ${discount * 100} %`);

// totalSpent += payment;
// console.log(`Общая сумма потраченного в магазине: ${totalSpent}`);

// const productName = "Mango";
// const pricePerItem = 150;
// const isOnSale = false;
// const error = null;
// let quantity;

// console.log(typeof productName);
// console.log(typeof pricePerItem);
// console.log(typeof isOnSale);
// console.log(typeof error);
// console.log(typeof quantity );

// const apples = 47;
// const grapes = 135;
// const result = apples + grapes;
// console.log(result);

// let result = 108 + 223 - 2 * 5;
// console.log(result);

// let radius = 10;
// const sqr = Math.PI * Math.pow(radius, 2);
// console.log(sqr);

