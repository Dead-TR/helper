var user = {
	name: "DTR",
	id: 8452,
	text: 99995554412,
	t2: "Текст передачі",
};
console.log(user);	//Заданий об'єкт


var userDate = JSON.stringify(user);
console.log(userDate);	//Перетворення об'єкта у стрічку


var dataBack = JSON.parse(userDate);
console.log(dataBack);	//Перетворення стрічки, назад у об'єкт








var user2 = {
	name: "DTR",
	id: 8452,
	text: 99995554412,
	t2: "Текст передачі",
	
	toJSON: function(){		//Змушує об'єкт, передати лише задані функцією параметри 
		return{name: this.name,
			  t2: this.t2}
						}
};


console.log(JSON.stringify(user2));