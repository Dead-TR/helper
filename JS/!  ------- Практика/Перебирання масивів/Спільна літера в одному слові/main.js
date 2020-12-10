var str = "JSPj";		//Сума

console.log(str);


console.log('----------------------------------');

console.log(isIsogram(str));


function isIsogram(str){
	str = str.toLowerCase();
  	var strArr = str.split('');
	var sorting = strArr;
	var result = true;
	var o=0;
	var i=0;
	
	sorting[i]=strArr[o];
	
//console.log(sorting);
//console.log(strArr);
	
	for(i=0; i < str.length; i++){
		
//console.log('Ц1 сорт ' +sorting[i]);
//console.log('Ц1 масив ' +strArr[o]);
//console.log(i);			
		o=0;
		
		for(o=0; o<str.length; o++){
			
			if(o===i){continue}else{
			
			sorting[i]=sorting[i]+"";
			strArr[o]=strArr[o]+"";
			
//console.log(sorting[i]);
//console.log(strArr[o]);
//console.log('O= ' +o);
//console.log(sorting[i]===strArr[o]);
			if(sorting[i]===strArr[o]){
				result = false; 
				
			} else {continue}
			
		}}		
	}
	return result;
}





	
	