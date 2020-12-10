var _id = document.getElementById('_id');	//Підключення до id

_id.innerHTML= 'Замінений скриптами текст';	//Заміна тексту з id на бажаний



var value = document.querySelector("input[type='text']").value;	//читання value в полі для вводу тексту
var iput = document.getElementById('iput');	//Підключення до іншого id 
iput.innerHTML=value;		//Запис у цей id тексту з value
iput.style.color='pink'		//Зміна кольору цього id