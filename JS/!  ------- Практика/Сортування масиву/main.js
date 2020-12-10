invert(prompt('Кількість одиниць: ', ''));


function invert(array){
				console.log('Скільки всього: ' +array);	
					
	
	
				var fr = [];	
	
					for (var i=0; i<array; i++){	
					fr[i] = prompt('Введи значення ' +(i+1), '');
								}
				var chek = fr; 				//--------Перший масив
console.log(chek);
	
var _a1 = document.getElementById("Arr1");
_a1.innerHTML = chek;	//-------------------------Вивід першого масиву
	
	var marr = chek;
	marr.sort(function(a,b){return a - b});	//Сортування
	console.log(marr);
	
	
var _a2 = document.getElementById("Arr2");
_a2.innerHTML = marr;
	
var _a3 = document.getElementById("Arr3");
_a3.innerHTML = marr[0];
	
		
} 


	


