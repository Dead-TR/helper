//--------------------Конструктор


var person = {	//- Змінна є заготовкою, під майбутні об'єкти
	constructor: function(name, age, gender){
		this.name = name;
		this.age = age;
		this.gender = gender;
		return this;
	},
	
	play: function (){console.log(this.name + " " + this.age + " " + this.gender);},
};



var p1, p2, p3;

p1 = Object.create(person).constructor("Авраам",53,"мужиг");
p2 = Object.create(person).constructor("Алла",31,"жінка");
p3 = Object.create(person).constructor("Андрій",14,"чоловік");

				   
				   
p1.play();
p2.play();
p3.play();