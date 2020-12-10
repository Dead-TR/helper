var str = 'world';
console.log(str.length);
console.log(str.charAt(1));

solution(str);




function solution(str){

	var txt = str.split('');
console.log(txt);
	
	var TRevers = txt.reverse();
console.log(TRevers);
	var Revers = TRevers.join(''); //Зліпити значення масиву в слово
console.log(Revers);
	
	//Короткий запис:
console.log(str.split('').reverse().join(''));
	return Revers;
}

