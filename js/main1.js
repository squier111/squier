// Типы данных JS
// ---------------------------
Примитивные (5 типов):

// Число «number»

var n = 123;
n = 12.345;

// Строка «string»

var str = "Мама мыла раму";
str = 'Одинарные кавычки тоже подойдут';

// Булевый (логический) тип «boolean»

var checked = true; // поле формы помечено галочкой
checked = false;    // поле формы не содержит галочки

// Специальное значение «null»
 // Для записи в переменную «пустого» или «неизвестного» значения используется null.
var age = null;

// Специальное значение «undefined»

var x;
alert( x ); // выведет "undefined"



объекты:
// объект

var user = { name: "Вася",
			sur: "Пупкин",
			age: "30"
			};

// масcив

var arr = [ 45 , '45' , 20 , 30]




asddasdasdadasdasd
// Оператор typeof
// Оператор typeof возвращает тип аргумента.
Синтаксис оператора: typeof x.
Синтаксис функции: typeof(x)


// проверка на наличие числа
if ( arr.indexOf(7) !== -1) {
  ....
}


//  switch case
           $('.sl2').on( "change",function() {
            switch ($(this).val()*1) {
              case 1:
                $('body').removeClass("reg");
                break;
              case 2:
                $('body').addClass("reg");
                break;
            }
          });



// Оператор parseInt ,parseFloat
// Преобразование к числу
alert( parseInt('12px') ) // 12, ошибка на символе 'p'
alert( parseFloat('12.3.4') ) // 12.3, ошибка на второй точке






// -------------------------------------------


// Циклы
// ------------------------------------


// while
//-----------------
var i = 0;
while (i < 3) {
  alert( i );
  i++;
}


// do while
//-----------------
var i = 0;
do {
  alert( i );
  i++;
} while (i < 3);




// for
//-----------------
for (var i = 0; i < 3; i++) {
  alert( i );
	break;
}


// continue прерывает не весь цикл, а только текущее выполнение его тела, как будто оно закончилось.
for (var i = 0; i < 10; i++) {

  if (i % 2 == 0) continue;

  alert(i);
}

// for..in
// -----------------

for (key in obj) {
  /* ... делать что-то с obj[key] ... */
}

var menu = {
  width: 300,
  height: 200,
  title: "Menu"
};

for (var key in menu) {
  // этот код будет вызван для каждого свойства объекта
  // ..и выведет имя свойства и его значение

  alert( "Ключ: " + key + " значение: " + menu[key] );
}


/*МЕТОДЫ МАССИВОВ*/


// split - преобразование строки в массив
// -----------------

var names = 'Маша, Петя, Марина, Василий';

var arr = names.split(', ');

for (var i = 0; i < arr.length; i++) {
  console.log( 'Вам сообщение ' + arr[i] );
}


 // join - преобразование массива в строку
// -----------------


var arr = ['Маша', 'Петя', 'Марина', 'Василий'];

var str = arr.join(';');

console.log( str );

// splice - удалять элементы, вставлять элементы, заменять элементы

var arr = ["Я", "сейчас", "изучаю", "JavaScript"];

// удалить 3 первых элемента и добавить другие вместо них
arr.splice(0, 3, "Мы", "изучаем")

console.log( arr ) // теперь ["Мы", "изучаем", "JavaScript"]










// ---------------------------------------------------------


/* Рандомное число */
function rand (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


// ---------------------------------------------------------


/* правильная сортировка */
arr.sort(function(a,b) {
   return a - b;
});


// ---------------------------------------------------------










// var arr = [10,30,49,66,67];

// var toFind = 49;

// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] === toFind) {
//     console.log(i);
//     break;
//   }
// }
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
var arr = [1,2,3];

var arr1 = new Array(10);


function getRandomArray(size) {
  var result = [];
  for (var i = 0; i < size; i++) {
    // result[i] = rand(0, 100);
    result.push( rand(0, 100) );
  }
  return result;
}

var array = getRandomArray(10);

console.log(array);



function getMatrix(size) {
  var arr = [];
  for (var i = 0; i < size; i++) {
    arr[i] = [];
    for (var j = 0; j < size; j++) {
      arr[i].push(rand(0, 100));
    }
  }

  return arr;
}

var matrix = getMatrix(10);
console.table(matrix);


// for (var i = 0; i < matrix.length; i++) {
//   console.log(matrix[i][matrix[i].length - 1]);
// }

function getPerimeter(arr) {

  var top = arr[0].slice(),
      right = [],
      bottom = arr[arr.length - 1].slice().reverse(),
      left = [];

  for (var i = 1; i < arr.length - 1; i++) {

    var lastIndex = arr.length - 1;

    right.push(arr[i][lastIndex]);
    left.push(arr[lastIndex - i][0]);
  }

  return top.concat(right, bottom, left);
}

var result = getPerimeter(matrix);
console.log(result);





var result = getPerimeter(matrix);
console.log(result);













