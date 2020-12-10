
const src = {
	name: "DTR",
	age: 10,
}

const heir = {
	name: 'Crooss',
	history: '///',

	print() {
		console.log("print", this.name); // this -- посилання на об'єкт, у котрому метод було ВИКЛИКАНО
	}
}


Object.setPrototypeOf(heir, src); //setPrototypeOf - створити наслідування
	//(об'єккт, котрий буде наслідуватись; об'єкт, від котрого буде відбуватись наслідування)

// Object.setPrototypeOf(heir, null); // null -- відмінює все наслідування
// Object.setPrototypeOf(heir, Object.prototype); // повернути стандартне наслідування

console.log(
	heir, 
	'\n ',
	heir.hasOwnProperty('age'), // перевірити, чи об'єкт heir має ключ age
	'\n ',
	Object.getPrototypeOf(heir), // переглянути об'єкт, від котрого, наслідується heir
	'\n ',
	Object.prototype, // об'єкт, від котрого наслідуються усі інші об'єкти
);

console.log("-----------------------------");

const actually = {
	name: 'Read',

	__proto__: heir,	//аналогічно setPrototypeOf
}
// Object.setPrototypeOf(actually, heir);

console.log("actually", actually);

heir.print() // this === heir 
actually.print() // this === actually

const past = Object.create(actually) // створює об'єкт, котрий в якості аргументу, приймає дані звідки наслідуватись
past.name = 'Elder';
past.data = 1001;
past.app = false;
console.log("past", past);

console.log("-----------------------------");

function f(x, y, z, ...a) { //...а -- рест 
	console.log("x, y, z", x, y, z);
	console.log("a", a);
	const arg = Array.from(arguments); // arguments -- колекція
	const arg2 = [...arguments]; //-- спред
	console.log(arg, arg2);
}

f(1, 2, 3, 4, 5, 6, 7, 8, 9, 110)

const [x, ...a] = [0, 150, 200, 800] //[] = [] - деструктуризація; ...a - спред
console.log("x: ", x, "\na:", a);

console.log("-----------------------------");

for (const key in past) { // перебирає усі включі, включно із прототипними
	console.log(">", key); 
}

console.log("Object.keys(past)", Object.keys(past)); // вертає масив, з ключами об'єкта past
console.log("Object.keys(past)", Object.values(past)); // вертає масив, із значеннями об'єкта past
console.log("Object.keys(past)", Object.entries(past)); // вертає масиви, в котрих зберігаються [0] - ключ, [1] - значення, об'єкта past

for(const [data, value] of Object.entries(past)) {
	// console.log("*", key);
	// const [data, value] = key
	console.log(" ==> ", data, value);
}

console.log("-----------------------------");

