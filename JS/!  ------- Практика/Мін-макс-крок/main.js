/*
var _max = prompt('Максимальне значення ', '');
var _min = prompt('Мінімальне значення ', '');
var _step = prompt('Крок ', '');

	console.log('step ' +_step);
	console.log('min ' +_min);
	console.log('max ' +_max);	*/


		var min = 10;
		var max = 100;
		var step = 15;

	
	console.log('step ' +step);
	console.log('min ' +min);
	console.log('max ' +max);

console.log(generateRange(min, max, step));


function generateRange(min, max, step){

		var min = min;
		var max = max;
		var step = step;
		
	//console.log(step);
	
	var arrayMN = [];
	o=0;
	for (var i=min; i<=max; i++){
		
		
		arrayMN[o]=i;
		o++;
		i=i+(step-1);
		
		
		//if (o > 200000 ){break;} else {continue;}
		
		
	}	//console.log('i ' +i);
		//console.log('o= ' +o);
		//console.log('arr= ' +arrayMN);
	return arrayMN;
}
