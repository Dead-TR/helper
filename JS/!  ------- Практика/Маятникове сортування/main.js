var a1 = [8,7,10,3];
var a2 =  700;
var a3 =  5;	

console.log(pendulum(a1));


function pendulum(values) {
var res = [];	var aa=0;
var right=Math.floor(values.length/2);	var left =values.length-right;	
values.sort(function(a, b){return a-b});var a=left-1;	var b=left;	
		for(let i=0; i<=left; i++){			
			for(let o=0; o<=1; o++){if(values[aa]==undefined){break;}
					res[a]=values[aa];
					};	aa++			
			for(let o=0; o<=1; o++){if(values[aa]==undefined){break;}
					res[b]=values[aa];
					};					
	aa++;	a--;	b++;	}	return res;	}