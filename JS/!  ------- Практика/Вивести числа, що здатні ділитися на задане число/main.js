var divisor = 3;
var numbers = [1,3,9,256,4,18,16,5];

console.log(divisor);
console.log(numbers);




console.log('arr=' +divisibleBy(numbers,divisor));

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














/*


*/