
var ar=("2 4 7 8 10");
console.log("ar", ar);

//console.log("4", 100%2);
console.log(iqTest(ar));







function iqTest(numbers){
				numbers = numbers.split(' ');
				var res = -1; var even, odd = [];
//----------------------------------------------------------------
	even = numbers.filter(function(i) {return i%2===0;});
	odd = numbers.filter(function(i) {return i%2===1;});
//-----------------------------------------------------------------
	if(odd.length==1){odd = String(odd);res = numbers.indexOf(odd);	}
	else{even = String(even);res = numbers.indexOf(even);}		
return res+1;}