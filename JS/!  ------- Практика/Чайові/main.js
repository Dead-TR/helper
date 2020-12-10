var amount = 810;		//Сума
var rating = 'POOR';	//Рейтинг




console.log('Сума ' +amount);
console.log('рейтинг ' +rating);
console.log('----------------------------------');

console.log('Чайові=' +calculateTip(amount,rating));



function calculateTip(amount, rating) {
	var rating = rating.toUpperCase();
	var pers = 0;
	var txt = 'Rating not recognised';
	var tip=0;

	
	if(rating==='TERRIBLE'){pers=0}
	else if(rating==='POOR'){pers=5}
	else if(rating==='GOOD'){pers=10}
	else if(rating==='GREAT'){pers=15}
	else if(rating==='EXCELLENT'){pers=20}
	else {pers=null};
	
	
	if(pers===null){return txt;}
	else{
		tip=(amount/100)*pers;
		tip=Math.ceil(tip);
		return tip;	
	}		
}








