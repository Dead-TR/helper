console.log('pow', Math.pow(2,5));			//Виводить 2 в степінь 5
console.log('sqrt', Math.sqrt(25));			//Квадратний корінь
console.log('abs', Math.abs(10));			//Модуль числа
console.log('round', Math.round(8.3));			//Округлення стандартне (до 8)
console.log('round', Math.round(8.6));			//Округлення стандартне (до 9)
console.log('floor', Math.floor(9.9));			//Примусове округлення в меншу сторону
console.log('ceil', Math.ceil(9.1));			//Примусове округлення в більшу сторону
console.log('min', Math.min(1, 5, 14, 9, 8));	//Пошук	найменшого числа
console.log('max', Math.max(1, 5, 14, 9, 8));	//		найбільшого числа
	Math.max.apply(null, [1, 5, 14, 9, 8]); 	//максимальне число масиву
	Math.max( ...[1, 5, 14, 9, 8]); 
console.log('exp', Math.exp(1));			//Степінь числа е
console.log('log', Math.log(5));			//Логарифм числа
console.log("trunc", Math.trunc(5.7)); 		//Видаляє, без округлення, дробову частину (=5)
console.log("------------------------------------------------------------");
console.log('sin', Math.sin(1));
console.log('cos', Math.cos(1));
console.log('tan', Math.tan(1));			//Вивід відповідних мат. ф-цій
console.log('atan', Math.atan(1));
console.log('acos', Math.acos(1));
console.log('asin', Math.asin(1));
console.log("------------------------------------------------------------");
console.log('PI', Math.PI); 		//Число Pi
console.log('E', Math.E);			//Число Е
console.log("------------------------------------------------------------");

console.log('random', Math.random());	//Вертає рандомне число від 0 до 1
console.log('random-10+10', -10 + Math.random() * 20);	//рандом від -10 до 10

//-------------------Функція рандому з округленням:-------------------------------

	var random = function(min, max){
		return Math.round(Math.random()*(max-min) + min);	//Вертає ціле, рандомне число в заданому діапазоні
	}
	
//------------------------------------------------------------------
	console.log('random++ ',random(1,3));


//---------------------------------------------------

console.log("isFinite", isFinite(22));	//Перевірка на кінечність числа
						//Т - якщо ціло не infinity
						//F - Якщо нескінченність, або не число


value = 2.56842;
Number(value.toFixed(2));	//value == 2.56
			//округлення до кількох знаків після коми, але у якості стрічки