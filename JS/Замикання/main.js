const a1 = 1; // скриптове лексичне оточення
var a2 = 2; // глобальне лексичне оточення
if (true) { // блочне лексичне оточення
	const a3 = 3;
	const g = () => { // локальне лексичне оточення
		const a4 = 4 + a3
	}

	g()
}



//------------------------------------------------------

// console.log("--------------------------------------");

// Замикання:

const create = (income) => {
	return (add) => {
		console.log(income, '+', add);
	}
}

const created = create('замкнений текст');
created('доданий текст')

//----

console.log('практичний приклад замикання:');
const data = (first) => {
	let x = 1; //змінні first i x, зберігаються в замиканні, для ф-ї result

	const result = (second) => {
		first *= 10 * x++
		console.log(first*second);
	}

	return result
}

const counter = data(100); // counter - функція, що отримує 100, в якості замикання

console.log('Запуск в циклі:');
for (let i = 1; i < 3; i++) {
	counter(i);
}

console.log('Запуск за межами циклу:');
	counter(1);
	counter(1);
