// console.log("hello"); -- вивести значення в консоль
// alert('hello'); -- вивести значення у віконце



var fr = ["Cочок", "Груша", "Яблучко", "Ананас"]; //Змінна -- масив з текстових значень



for (var i = 0; i < fr.length; i++){ //Доки Значення i менше значення кількості елементів масиву 	
	console.log(fr[i]);
}



//--------------------------------------------------------------------------------------------


var prsn = {
	fistName:"Ian",
	lastName:"Finch",
	age:25
};

for (var key in prsn) {		//Узяти юніт зі змінної
	console.log(prsn[key]);	//Й вивести його
}













//------------------------------------------------------------------------------------------------------












var val = +prompt('2+2', '');	//Запитуємо скільки буде 2+2

/* 
			//Перший варіант цього запитання, виконаний через IF
if (val === 3) {	
	alert('Замало');
} else if (val===4){
	alert('Вірно');
} else if (val===5){
	alert('забагато');
} else{
	alert('АІ інтерпретатора не здатен впоратися з на стільки великим значенням');
}

*/
	

	//Другий варіант, виконаний через switch
switch(val){
	case 3:					//Якщо перемикач у цьому положенні, то...
		alert('Замало');
		break;			//Якщо прибрати стопер, то скрипт буде виконуватися по черзі, до завершення, показуючи усі можливі відповіді одна за одною.
	case 4:
		alert('Вірно');
		break;
	case 5:
		alert('забагато');
		break;
	default:				//Стандартне положення
		alert('Невідоме значення');
}



switch('умова'){	//Перемикач порівнює всі умови з заданою
		
	case 'перша умова':
		console.log('Скрипт');
		break;
		
	case 'друга умова':
		console.log('Скрипт');
		break;
		
	default:
		console.log('скрипт');	//Якщо жодна з умов не відповідає заданій, перемикач стає у стандартну
}












































