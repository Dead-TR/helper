var child = document.createElement('li');
var tex = document.createTextNode("Створений об'єкт");
child.appendChild(tex);	//Зв'язую нові текст і змінну





var clildren = document.getElementsByTagName('li'); //Li - в масив
var parent = document.getElementById('list'); 	//list - в змінну



parent.replaceChild(child,clildren[1]);		//Замінюю новий елемент, що знаходиться в змінній child, на 
						//						старий елемент, що перебуває в масиві clildren



//var del1 = document.getElementsByTagName('noindex').remove();
var del1 = document.getElementById('nx').remove();