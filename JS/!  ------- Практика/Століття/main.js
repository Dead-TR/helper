console.log(century(2000));

function century (year) {
	year = year +'';
	var st1 = year.charAt(year.length-1);
	st1 = +st1;
	var st2 = year.charAt(year.length-2);
	st2 = +st2;
	st = st1+st2;


	if(st===0){
			var ctr = (year/100);
			ctr=ctr-0.5;
			ctr=ctr.toFixed(0);

	} else{
			var ctr = (year/100)+1;
			ctr=ctr-0.5;
			ctr=ctr.toFixed(0);
	}
	
	
console.log(Math.ceil(year/100));
  	ctr = +ctr;
	return ctr;
}


//var an2 = arrName[1].charAt(arrName);








































/*centry(prompt('Впиши рік', ''));

//console.log(centry(2005));
function centry (year) {
	var ctr = (year/100)+1;
//console.log(year);
	ctr=ctr-0.5;
	ctr=ctr.toFixed(0);
console.log(ctr);
	var txt = ' Testing for year ' +year;
alert('Століття: ' +ctr);
	return ctr +txt;
 
}

*/


