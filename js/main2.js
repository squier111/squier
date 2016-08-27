// sayHello1();
// function sayHello1() {
//
// }
// sayHello1();


// var sayHello2 = function() {
//   /////
// };
// sayHello2();

// a = 1;

// function testMe() {
//   'use strict';
//   // console.log(a);
//   var a = 10;

//   function sayHi() {
//     console.log(a);
//   }
//   sayHi();
//   console.log(a);
// }

// console.log(a);

// testMe();


function showPopup(msg, color) {
  // console.log(arguments);
  msg = msg || 'hello, user!';

  console.log('msg = ', msg);
  console.log('color = ', color);
  switch(color) {
    case 'red':
      console.log('%c' + msg, 'background-color: #F00;');
      break;
    case 'green':
      console.log('%c' + msg, 'background-color: #0F0;');
      break;
    case 'pink':
      console.log('%c' + msg, 'background-color: pink;');
      break;
    default:
      console.log('go away!');
  }
  console.log('~~~~~~~~~~~~~~~~~~');
}
// showPopup('hello', 'red');
// showPopup('bye-bye', 'green');
// showPopup('fuck you', 'purle');
// showPopup('allo?', 'pink');


function checkAge(age) {
  if (!age) {
    return;
  }

  console.log('функция работает ОК');
}
var canIEnter = checkAge();
console.log(canIEnter);

function Sum(a,b) {
  if ( typeof a !== "number" || typeof b !== "number" ) {
    console.log("вводимые значения должны быть числами!")
    return;
  }
  var c =  a + b;
  return c;
}
Sum(500 , 500);


// Первая задача совсем для самых маленьких :) Кто шарит - пропускает, ибо это было.
// 1. Есть одномерный массив из 10 элементов (созданный вручную или посредством нашей функции rand).
// Обойти массив (т.е. просто вывести arr[i])
// a) из начала в конец;
// б) из конца в начало.
// (повторенье - мать ученья) :)


// 2. Для того же самого массива вывести каждый второй элемент.
// пример: [10,11,12,13,14,15,16,17]
// выведет 11, 13, 15, 17

// 3. Сделать то-же самое (пункт 2) в обратном порядке, т.е. из конца в начало.

// 4. Напишите код, который определяет, все ли элементы массива различны. возвращает просто true - false.

// 5. Чуть посложнее.

// Дано два массива чисел с индексами от 0 до N, необходимо вывести в консоль все числа, которые одновременно присутствуют в обоих массивах.

// РЕШЕНИЕ: (примерный алгоритм, писал не сам, стырено с просторов интернета)
// Нужно сравнить каждое значение массива 1 с каждым значением массива 2. Т.е. сначала берем первый элемент массива 1 и сравниваем его
 // со значениями массива 2. Если во втором массиве находится такое же число, то помещаем его в результирующую массив для последующего вывода в консоль.
 // Берем второй элемент массива 1 и сравниваем его со значениями из массива 2… И т.д. пока не будут пройдены все элементы массива 1.


var a =[10,11,12,13,14,15,16,17];
var b =[3,4,12,5,14,8,16,363];


for (var i = 1; i <= a.length; i= i+2) {
 console.log(a[i]);
};


var a =[10,11,12,13,14,15,16,17];


  for ( i = a.length-2 ; i >= 0 ; i-=2) {
        console.log(a[i]);
      }



var c =[];
for (var j = 0; j < a.length; j++) {
  for (var k = 0; k < b.length; k++) {
    if (a[j] == b[k]) {
      c.push(a[j]);
    }

};
};
 console.log(c);




 var arr =[3, 22, 33 , 33];


 for (var j = 0; j < arr.length; j++) {
   for (var k = 0; k < arr.length; k++) {
    if (arr[j] == arr[k] && j !== k) {
      console.log("совпало");
      break;
    }

};
     console.log("не совпало");
    };
