var clild = document.createElement('li');	
var text = document.createTextNode("Створений об'єкт");	
clild.appendChild(text); //clid -- Текстовий об'єкт, і його тег


var parent = document.getElementById('list'); //Батьківський тег	
	//--- -- -- -- -- -- -- -- -- -- --- -- -- -- -- -- -- -- -- -- -- -- --- - -- -- - -- - 
var liItems = document.getElementsByTagName('li');	//В змінну записуємо масив усіх тегів li.
parent.insertBefore(clild, liItems[1]);	//Беремо батьківський тег (всі його дочірні елементи,
					// 	 уже зібрано в масив liItems) й вставляємо в нього тег clid, але перед елементом масиву [1].