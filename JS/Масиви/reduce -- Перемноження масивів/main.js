var arr_ = 555;


console.log("arr_", arr_);





function persistence(num) {
var hMuch = 0;

while(true){
num=''+num;
num= num.split('');
//console.log("num", num);
const sum = num.reduce((total,amount) => total*amount);
//console.log("sum", sum);

//console.log("hMuch", hMuch);
num=sum;
//console.log("num", num);

//console.log("num.length", num.length);
if (num.length==1) {return hMuch;}
hMuch++;
}

}








function persistence1(num) {
 var capacity = [];
 var empty_ = 1;
 var hMuch = 0;
  var bArr = ''+num;
  bArr = bArr.split('');
//console.log("bArr", bArr);
//console.log("bArr.length", bArr.length);
  
   var etc = bArr.length;
 //console.log("etc", etc);
if (bArr.length==1) {return 0};

while(true) { 
  for(var i=0; i<bArr.length; i++){
    capacity[i] = empty_ * bArr[i];
//console.log("capacity", capacity);
    empty_ = capacity[i];
//console.log("empty_", empty_);

  }
    hMuch +=1;
//console.log("hMuch", hMuch);
    bArr = ''+empty_;
    bArr = bArr.split('');
    empty_ = 1;
//console.log("bArr", bArr);
//console.log("bArr.length", bArr.length);

     
    if (bArr.length == 1) {return hMuch};

    }  


} 

console.log(persistence(arr_));
console.log('------------------------------');
console.log(persistence1(arr_));
