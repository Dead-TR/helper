class User {
	static lastId = 0; //елемент класу
	static getId() {//метод класу
		return this.lastId++
	}

	role = 'gamer'; // додається, як елемент конструктора. Те ж саме, що й constructor(){this.role}

	get status() { // геттер -- вирахувана властивість
		return `${this.name}; ${this.level}; ${this.role};`
	}

	constructor (name) {
		this.name = name;
		this.level = 0;
		this.id = User.getId(); //Запустити метод класу, під час кожного створення об'єкту
	}

	addLevel(level = 1) {
		this.level += level
		console.log("Збільшення рівня", this.level);
	}

	print() {
		console.log("Друк об'єкта, конструктора", this);
	}

	
}

const gg = new User('DTR');

gg.print();
gg.addLevel();

console.log(`звичайна властивість, і геттер: [${gg.name}], [${gg.status}]`);

class Admin extends User { // extends означає, що клас Admin наслідується від класу User
	role = 'admin';

	constructor(name, god = false) {
		super(name); // Наслідувати конструктор від User, і передати йому name

		this.god = god;
	}

	showRole() {
		console.log("Статус: ", this.role);
	}

	get status() { // Замінений геттер
		return super.status + ` godMode = ${this.god};` //super.status - викликає даний метод, із батьківського класу
	}
}

const aa = new Admin('Growhead', true);

aa.print();
aa.showRole();
aa.addLevel(50);


console.log("------------------------------------");

console.log("Адмін", aa);
console.log("Юзер", gg);

console.log("aa.status", aa.status);

console.dir(User); // консоль
console.log("------------------------------------");

console.log(`Юзер наслідується від User? - [${gg instanceof User}], Юзер наслідується від Admin? - [${gg instanceof Admin}]`);
console.log(`Адмін наслідується від User? - [${aa instanceof User}], Адмін наслідується від Admin? - [${aa instanceof Admin}]`);
