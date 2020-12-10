var a1 = [1,2,3,4,6,7,8,10];
var a2 = (1);
var a3 = (10);

console.log(allNonConsecutive(a1));

function allNonConsecutive (arr) {
 var result ={}; var o =0;	var g=1; var a=arr.length;
 	while (true) {
		if(g==a){break;}
 		if(arr[g]!=arr[g-1]+1){result[o]={i: g, n: arr[g]}; o=o+1 };g++
 	}
return result;
}