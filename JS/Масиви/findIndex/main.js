var a1 = [4,-8,98,-12,-7,90,100];
var a2 =  700;
var a3 =  5;	

console.log(oddOne(a1));



function oddOne(arr) {
	for(let i=0; i<=arr.length; i++){
		if(arr[i]%2==1){return i;};
		if(arr[i]%2==-1){return i;}
}return -1;}






//----Або-------------------
function oddOne(arr) {
	return arr.findIndex(x=> x%2 !=0);	}