'use strict'

const h1 = document.querySelector('.title'); 
//до 'h1' прив'язується абзац з класом  'title'

//значення класу, є лише стрічкою, відповідно
//      подальші маніпуляції, є редагуванням стрічки
h1.className = 'new';
//замінює клас .tittle, класом 'new'
h1.setAttribute('class', 'New2')
//шукає в "h1" атрибут 'class' й 
//      замінює його значення на 'New2'

h1.className += ' addClass';
//додає новий клас, розділений пробілом
//  без пробіла -- перейменує дійсний

const list = h1.classList;
/*створює об'єкт, з перечнем класів:
{
    0: "New2"
    1: "addClass"
    length: 2
    value: "New2 addClass"
}
*/

list.add('add2');
//додає ще один клас

list.remove('New2');
//видаляє конкретний клас

console.log(list.contains('title'));
//перевіряє, чи в h1 є клас tittle

list.toggle('tittle'); //перемикач:
//якщо даний клас відсутній -- він з'явиться
//якщо присутній -- видалиться

console.log("list", list);
