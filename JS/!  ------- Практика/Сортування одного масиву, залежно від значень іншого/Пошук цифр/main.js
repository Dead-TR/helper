
function order(words) {
	words = words.split(' ');
	console.log("words", words);
var q = '';
var a = [];
	for (let i = 0; i<words.length; i++) {
		q = words[i];

		// for (let o=0; o<words.length; o++) {

		if (q.indexOf('1') != -1) {a[1]=words[i]}
		else if (q.indexOf('2') != -1) {a[2]=words[i]}
		else if (q.indexOf('3') != -1) {a[3]=words[i]}
		else if (q.indexOf('4') != -1) {a[4]=words[i]}
		else if (q.indexOf('5') != -1) {a[5]=words[i]}
		else if (q.indexOf('6') != -1) {a[6]=words[i]}
		else if (q.indexOf('7') != -1) {a[7]=words[i]}
		else if (q.indexOf('8') != -1) {a[8]=words[i]}
		else if (q.indexOf('9') != -1) {a[9]=words[i]}
		else {continue;}
			// }
		}
		a.splice(0, 1);
		console.log(a.join(' '));

	}


// }

// var a = 0;

p=2000000;
percent=0;
aug=10000;
p0="is2 Thi1s T4est 3a";

console.log(order(p0));