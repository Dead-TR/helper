var x = 'йо к алем ен е';
console.log(x);
noSpace(x);

function noSpace(x){	
	var arrLetter = x.split(' ');
console.log(arrLetter);
	var txt = arrLetter.join('');	
console.log(txt);
	return txt;
}



