var a1 = 42;
var a2 =  [3, 3, 3];
var a3 =  [199, 1000, 201];

console.log(rowSumOddNumbers(a1));

function rowSumOddNumbers(n) {
var a=0; var lastStr=0; var firstStr=0; var sArr=[];
//--------------------------------------------------------
	for(var i=1; i<=n; i++){a=a+i*2;}
//----------------------------------------------------------
lastStr=a-1;	firstStr=lastStr-((n-1)*2);	//				|
var sum_ = firstStr;	sArr[0]=firstStr;	//				|			
//----------------------------------------------------------
	for(i=0; sum_<lastStr; i++){sum_= sum_+2;sArr[i+1]=sum_;}

var result = sArr.reduce(function(a, b){return a+b});	return result;}

//return n*n*n