var a = 1;
var b = 10;
var c = 1;



console.log(a);
console.log(b);
console.log(c);
console.log('----------------------------------');

console.log('arr=' +expressionMatter(a,b,c));



function expressionMatter(a, b, c) {
	
	
	var max1 = a * (b + c);
console.log(max1);
	var max2 = a * b * c;
console.log(max2);
	var max3 = a + b * c;
console.log(max3);
	var max4 = (a + b) * c;	
console.log(max4);
	var max5 = a + b + c;	
console.log(max5);

	
	var maxArr = [max1, max2, max3, max4, max5];
	
	maxArr.sort(function(a,b){return a - b});
	max = maxArr[maxArr.length-1];
	
	return max;	
}



/*

function divisibleBy(numbers, divisor){
	var canTR=[];
	var FinalArr=[];
	var o = 0;
	
	
	for (var i=0; i<numbers.length; i++){
		
		canTR[i] = numbers[i] / divisor;
		
	if(Number.isInteger(canTR[i])===true){
		FinalArr[o]=numbers[i];
		o++
	}else {continue}
		
		
		
	}	
	
	return FinalArr;
}




*/