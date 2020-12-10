'use strict';

function f(text) {
	console.log(text, this);
}

const user = {
	name: 'DTR',
	print: f,
}

console.log("Корінь ", this); //this === window
f('Виклик в корені');	//this === undefined -- ф-я викликана не як метод об'єкту 
user.print("Виклик в об'єкті"); // this === user
new f("Виклик в конструкторі"); //this === порожній об'єкт, т.я. new створює конструктор

f.call(user, "Виклик через call"); // Викликає f, з присвоєним їй значенням this
f.apply(user, ["Виклик через apply"]); // Викликає f, з присвоєним їй значенням this
const g = f.bind(user); // створює нову ф-ю, з присвоєним їй значенням this. Але не викликає її
g("Виклик через bind") // виклик, створеної через bind ф-ї


const t = function(text) {
	const oldThis = this;

	const arr = () => {
		console.log(text, this);
		const newThis = this;

		console.log(oldThis === newThis); // this стрілкової ф-ї === this з верхнього рівня
	}

	arr()
}

t.call(user, 'Cтрілкова ф-я, запущена всередині класичної');