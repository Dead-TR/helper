var greet = function(hi){	//hi -- додається при виклику
	return hi+ ". Моє ім'я " +this.name;	//параметр this бере індентифікатор name з об'єкта, котрий викликає дану функцію greet
};


var person = {
	name:"Уасиль!",
	greet: greet,
};

var aperson = {
	name:"Штефан",
	greet: greet,
};


console.log(person.greet("Вітаю"));
console.log(aperson.greet("Здоровенькі були"));




