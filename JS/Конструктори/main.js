Create.prototype = { //Прототип, автоматично додасться, до конструктора Create, коли його буде викликано через new
	printName() {
		console.log("Виклик методу з прототипу. Друк name: ", this.name);
	}
}

Create.prototype.fullPrinnt = function() { // другий метод, створення прототипу. Цей, не видаляє оригінальний об'єкт прототипу
	console.log("Виклик методу з прототипу. Друк full data: ", this.name, this.status);
}		//* fullPrinnt - доданий в прототип метод

function Create(name){ // Створення конструктора
	this.name = name;
	this.status = 'user';
}

const user = new Create('DTR'); //Виклик конструктора (створення об'єкту')
console.log("Створений конструктор: ", user);
user.printName()
user.fullPrinnt()

//---------------------------

function CreateProtoTest(name) {
	this.name = name;
}

CreateProtoTest.prototype = {
	print() {
		console.log('оригінальний прототип');
	}
}

const k = new CreateProtoTest('DTR');
CreateProtoTest.prototype.print = () => console.log('заміна методу в оригінальному прототипі');

CreateProtoTest.prototype = {
	print() {
		console.log('новий прототип');
	}
}

k.print()

//-----------------------------

CreateProtoTest.prototype.level = 0; // додати в прототип змінну level, зі значенням 0

CreateProtoTest.prototype.levelUp = function() {
	console.log(this.name, "Новий рівень: ", ++this.level);
	// this.level++: this.level = this.level + 1
		//при першому запуску, не знаходить в оригінальному об'єкті (this) змінну level, а тому створює її
			// зі значенням this.level взятого з прототипу
};

const kk = new CreateProtoTest('kk');
const gg = new CreateProtoTest('gg');

kk.levelUp()
kk.levelUp()
kk.levelUp()
gg.levelUp()
	// такий запис, насправді, некоректний, т.я. у прототипі, мусять зберігатися методи, а не властивості


console.log("__proto__ & prototype: ", kk.__proto__ === CreateProtoTest.prototype);