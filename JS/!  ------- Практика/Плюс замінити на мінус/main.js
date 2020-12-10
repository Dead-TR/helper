maps(prompt('Число', ''));




function maps(x){
		console.log('Скільки всього: ' +x);	
	var fr = [];
	
	for (var i=0; i<x; i++){
			//console.log(i);
			fr[i] = i+1;
			
		
	} 			//масив 1
	
		var chek = fr; //Масив зберігається в змінній
	console.log(chek);
	
	
	
		for (var i=0; i<x; i++){
			chek[i] = chek[i]-(chek[i]*2)
			
		}console.log(chek);
	
	
	
	
	
	
	
	//const map1 = chek.map(x => x*2);	Масив 2
	
	
	//return(fr);
	
	
} 


	




