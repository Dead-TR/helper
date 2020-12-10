const URLdata = 'https://jsonplaceholder.typicode.com/users';



const send = (method, url) => {
	return new Promise((resolve, reject) => { //проміс отримує два значення -- успіх, та фейл

		const xhr = new XMLHttpRequest();

		xhr.open(method, url);
			//GET означає -- отримати дані з сервера
			//URLdata -- посилання, на дані
		xhr.responseType = 'json';
			//Інформація про те, у який тип необхідно перетворити отримані дані
		xhr.onload = () => { //onload -- обробка запиту.
			if (xhr.status >= 400) {// статус >= 400, означає помилку
				reject(); //консоль помилки
			} else {
				resolve(xhr.response); //response -- метод, в котрому зберігаються отримані з сервера дані
			}

		}

		xhr.onerror = () => { //onerror -- обробка помилки
			console.log("Робота з сервером. Помилка", xhr.response);
		}

		xhr.send(); //		
	})
}

send('GET', URLdata)
	.then(data => console.log('Робота з сервером. Обробка результату: ', data))
	.catch(err => console.log('Робота з сервером. Обробка помилки: ', err));

//---------------------------------------------------------------------------------------------/

const count = 5;

const orderP = (product, quantity) => {
	return new Promise ((complete, error) => { //complete, і error. Те, що буде у них розміщено,
					// в майбутньому буде перенесено в .then
		if (count < quantity) {
			setTimeout(() => {
				console.log("Робота з масивом. Помилка"); //код, вказаний тут, теж виконується
				error('>Робота з масивом. Елемент Помилки<'); // у разі помилки, в then аргумент, потрапить рядок '>Помилка<'
			}, 1500)

			return
		}

		console.log("Робота з масивом. Запуск промісу. Параметр: ", product);

		setTimeout(() => {
			const prod = new Array(quantity).fill(product) //створити масив розміром quantity, й заповнити його product
			console.log("Робота з масивом. Успіх", prod);
 			complete(prod); // у разі успіху, в then аргумент, потрапить масив prod
		}, 1500)

	})
}

orderP('apple', 3)	//дістати дані, прямо із промісу, неможливо. Для цього є метод then
	.then(
		(complete) => {
			console.log("complete", complete); //Дістати дані із промісу
		},
		(error) => {
			console.log("error", error); // що робити, якщо виникла помилка
		},
	)

console.log("Консоль самого промісу", orderP('пончики', 4))

//----------------------------------------------------------------------------------------------------------/

const pr = (data, mult) => {
	return new Promise ((resolve, reject) => {
		if (
			(typeof data) === 'number'
			&& (typeof mult) === 'number'
			&& mult < 1000
			&& data < 1000
		) {
			setTimeout(() => {
				let result = 0;

				for (let i = 0; i < mult; i++) {
					result += data * i; 
				}

				resolve(result);
				return
			}, 3000)
		}


		setTimeout(() => {
			reject('Проміс чисел. Невірно введені параметри');		
		}, 3000)
	})
}

pr(999 , 999)
	.then(
		(result) => {
			console.log("Проміс чисел. Результат", result);
			return result //return потрібен для того, щоб передати виконання далі
		}, 

		(error) => {
			console.warn("Проміс чисел. Помилка then", error); //помилку можна викликати в then, другим параметром...
			throw error //викинути помилку
		}
	)
	.catch ( // ...або, в окремому методі catch
		(error) => { 
			console.warn("Проміс чисел. Помилка catch", error);
			return 505 // обробити помилку
		}
	)
	.finally (
		(result) => {
			console.log("Проміс чисел. finally", result); //finally нічого не вертає, і результат її виконання, не пливає ні на що
			return 202
		}
	)
	.then(
		(result) => {
			console.log("Проміс чисел. Останній then в ланцюжку", result); // остаточний результат, отриманий, з усіх ланцюгів
			return result
		}
	)


Promise.all([orderP('бочка', 3), pr(2 , 16)]) // Promise.all виконує всі передані в нього проміси, й усі їх опрацьовує
	.then((result) => {
		console.log("Обробник Promise.all", result);
	})

Promise.race([orderP('бочка', 3), pr(2 , 16)]) // Promise.race очікує завершення першого з переданих промісів, й опрацьовує його
	.then((result) => {
		console.log("Обробник Promise.race", result);
	})


async function fusRoDah(param) { //async, створює ф-ю, асинхронного типу. Такі ф-ї, дозволяють робити наступні штуки:
	console.log("Запуск async ф-ї");

	let result_1, result_2;

	try {
		result_1 = await pr(999, 999); // await, каже, що увесь код нище, припинить своє виконання доти, доки result_1 не отримає якесь значення
					// крім того, await забезпечує, що значенням result_1 буде не проміс, а його результат
		console.log("async ф-я result_1", result_1);

		result_2 = await pr(999 +2, 999); //таким чином, запуск await'ів, відбувається по черзі
		console.log("async ф-я result_2", result_2);
	} 

	catch (error){
		console.warn("async ф-я помилка, в процесі виконання: ", error);
		if (!result_1) {	// замість цього, можна записувати метод catch, в саму змінну, й там вже присвоювати їй 1
			console.warn("async ф-я обробка помилки в процесі виконання", 'result_1 = ', result_1, ', переназначено = 1');
			result_1 = 1
		}

		if (!result_2) {
			console.warn("async ф-я обробка помилки в процесі виконання", 'result_2 = ', result_2, ', переназначено = 1');
			result_2 = 1
		}
	} 

	finally {
		const result = result_1 + result_2;
		console.log("async ф-я result", result);

		console.log("Завершення async ф-ї", param * result);
		return param * result
	}
}

console.log("Оголошення async функції:");
fusRoDah(0.3) // async-функція вертає проміс
	.then((data) => {
		console.log("Обробка async функції. Успіх: ", data);
	})
	.catch((data) => {
		console.warn("Обробка async функції. Помилка: ", data);
	})
