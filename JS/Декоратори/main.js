
const f = amount => amount + 1;
const g = amount => amount + 10;
const h = amount => amount + 100;

const modificator = (income) => {
	return income * 2
}

const createDecorator = (income) => { //отримує на вхід функцію, й віддає модифіковану функцію,
											//котру можна викликати, як і раніше
	return (amount) => {
		const saveF = income(amount); // виконання переданої функції
		return modificator(saveF); // вивід, в якості результату, модифікованої функції, котра працює, як і раніше
	}
}

const fResult = f(50);
const fModed = modificator(f(50))

const universalModForF = createDecorator(f)

console.log("оригінальна ф-я", fResult);
console.log("модифікована ф-я", fModed);

console.log("декорована ф-я", universalModForF(50)); //тепер, не потрібно постійно застосовувати modificator(f(50)),
 																// у випадках, коли необхідно модифікувати f

const newG = createDecorator(g);
const newH = createDecorator(h);

console.log("модифікована g", newG(10));
console.log("модифікована h", newH(10));
