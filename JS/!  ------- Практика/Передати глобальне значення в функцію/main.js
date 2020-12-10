


var senseOfLife = 42;


function showVariable (otherSenseOfLife) {

	senseOfLife=otherSenseOfLife||senseOfLife;
	
    return senseOfLife;
}





console.log(showVariable());