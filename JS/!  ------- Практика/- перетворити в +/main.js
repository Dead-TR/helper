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
_a1.innerHTML = chek;
	
				for (var i=0; i<array; i++){	//-----Другий масив
			
					if (chek[i] > 0){chek[i] = chek[i]-(chek[i]*2);	} 
					else {chek[i] = chek[i]-(chek[i]*2);}
			
			
			
			
			}console.log(chek);
var _a2 = document.getElementById("Arr2");
_a2.innerHTML = chek;
		
} 


	



//var _a = document.getElementById("etc");
		//			_a.innerHTML = array;