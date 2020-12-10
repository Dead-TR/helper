var one1 = (prompt("Напиши перше число, в діапазоні від 0-до 10-ти",''));
var operation2 = (prompt("Вкажи операцію",''));
var one2 = (prompt("Напиши друге число, в діапазоні від 0-до 10-ти",''));
alert(calkulate(one1, operation2, one2));


console.log("calkulate", calkulate(one1, operation2, one2));


function calkulate(one, what, two) {
	one = one.toLowerCase();
console.log("one", one);
	two = two.toLowerCase();
console.log("two", two);
	what = what.toLowerCase();
console.log("what", what);
	//перше число
		if(one=='один'){one=1}
	else if(one=='два'){one=2}
	else if(one=='три'){one=3}
	else if(one=='чотири'){one=4}
	else if(one=="п'ять"){one=5}
	else if(one=='шість'){one=6}
	else if(one=='сім'){one=7}
	else if(one=='вісім'){one=8}
	else if(one=="дев'ять"){one=9}
	else if(one=='десять'){one=10}
	else if(one=='нуль'){one=0}
	else{one=null}
	console.log("one", one);
		//Друге
		if(two=='один'){two=1}
	else if(two=='два'){two=2}
	else if(two=='три'){two=3}
	else if(two=='чотири'){two=4}
	else if(two=="п'ять"){two=5}
	else if(two=='шість'){two=6}
	else if(two=='сім'){two=7}
	else if(two=='вісім'){two=8}
	else if(two=="дев'ять"){two=9}
	else if(two=='десять'){two=10}
	else if(two=='нуль'){two=0}
	else{two=null}
	console.log("two", two);
		//Операція
		if(what=='плюс'){result_=one+two}
	else if(what=='мінус'){result_=one-two}
	else if(what=='помножити'){result_=one*two}
	else if(what=='поділити'){result_=one/two}
	else{result_=null}
	console.log("result_", result_);
	console.log("--------------------------------------------------------------------");
				if(result_== null){result_ = "Задані значення перевищують діапазон 0-10"}
return result_;
}