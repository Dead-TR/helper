var arr_ = "gggg";
var b_ ="aaag";

console.log(arr_.length);


function hasNoneLetters(blacklist, phrase) {
 	blacklist = blacklist.toLowerCase();
 	phrase = phrase.toLowerCase();

 	var _blacklist = blacklist.split('');
 	var _phrase = phrase.split('');
 	var _result = true;

 	for(var i = 0; i<blacklist.length; i++){

 		for(var o = 0; o < phrase.length; o++){
 			if(_blacklist[i]===_phrase[o]){return _result=false}
 			else{continue};
 		}


 	}

 	return _result;
}



console.log(hasNoneLetters(arr_, b_));