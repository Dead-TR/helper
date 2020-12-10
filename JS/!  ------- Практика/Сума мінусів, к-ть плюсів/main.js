invert(prompt('Кількість одиниць: ', ''));


function invert(array){
				console.log('Скільки всього: ' +array);	
					
	
	
				var fr = [];	
	
					for (var i=0; i<array; i++){	
					fr[i] = prompt('Введи значення ' +(i+1), '');
								}
				var chek = fr; 				//--------Перший масив

console.log(chek);
//var _a1 = document.getElementById("Arr1");
//_a1.innerHTML = chek;	-------------------------Вивід першого масиву
	
	
	
	 		
			var sumPlus = 0;
			for (var i=0; i < chek.length; i++){
				if (chek[i] > 0){
					sumPlus = sumPlus + 1;
				} else {continue;}
				
			}	console.log('Кількість позитивних значень:' +sumPlus);
				var _a3 = document.getElementById("Arr3");
				_a3.innerHTML = 'Кількість позитивних значень: ' +sumPlus;
	
	//Позитивні значення масиву рахуються.
				
				
					var sumMin = 0;
			for (var i=0; i < chek.length; i++){
				if (chek[i] < 0){	
				sumMin = ((sumMin)-(chek[i]));	
				} else {continue;}
				
			}	sumMin = sumMin - (sumMin*2);	//Костиль
				console.log('Сума негативних значень:' +sumMin);
				var _a2 = document.getElementById("Arr2");
				_a2.innerHTML = 'Сума негативних значень: ' +sumMin;
	
	
	var marr = chek;
	marr.sort(function(a,b){return a - b})
	
	
	console.log(marr);
	var _a1 = document.getElementById("Arr1");
	_a1.innerHTML = 'Увесь масив ' +marr;


		
} 


