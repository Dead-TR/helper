maps(prompt('Число', ''));




function maps(x){
		console.log('Скільки всього: ' +x);	
	var fr = [];
	
	for (var i=0; i<x; i++){
			//console.log(i);
			fr[i] = i+1;
			
		
	} //console.log(fr);
		//return(fr);	//масив 1
	var chek = fr;
	//console.log(chek);
	console.log(fr);
	

	const map1 = chek.map(x => x*2);	//Масив 2

	console.log(map1);
	
	return(fr);
	return(map1);
	
}



