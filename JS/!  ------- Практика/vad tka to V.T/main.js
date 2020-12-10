
var name = 'peter andrew';
console.log(name);

abbrevName(name);
function abbrevName(name){
		name = name.toUpperCase();
		var arrName = name. split(' ');
		//console.log(arrName);
		var an1 = arrName[0].charAt(arrName);
		//console.log(an1);
		var an2 = arrName[1].charAt(arrName);
		//console.log(an2);
	var aNam = an1 +'.' +an2;
	console.log(aNam);
	
	return aNam;

}
/*

str.charAt(str.length -1));
arr = "a,b,c".split(',')  / массив ["a", "b", "c"]
str.split(' ')); /split розбиває текст стрічки, на масив, використовуючи (' ') /тут-пробіл/ як роздільник. Це дає змогу розбити речення на окремі слова, для маніпуляції з ними.

str.toUpperCase();
*/