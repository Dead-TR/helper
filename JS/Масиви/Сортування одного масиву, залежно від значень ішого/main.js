var a1 = ["Computer", "Cell Phones", "Vacuum Cleaner"];
var a2 =  [3, 3, 3];
var a3 =  [199, 1000, 201];

console.log(top3(a1, a2, a3));

function top3(products, amounts, prices) {var aa=[]; var A=[]; var B=[]; var bb = 0;

		for(var i=0; i<products.length; i++){
			aa[i]=amounts[i]*prices[i];		//аа -- масив що буде сортуватися
			A[i]=amounts[i]*prices[i];	}	//А -- масив з оригінальним положенням елементів

	aa = aa.sort(function(a, b){return a-b}).reverse();	//Перевертаємо аа, щоб не шукати елементи з кінця

		for(var i=0; i<3; i++){
			bb = Number(aa[i]);		//Отримуємо значення найбільшого елемента
			B[i]=products[A.indexOf(bb)];	//І, його положення в іменному масиві
			A[A.indexOf(bb)]=0;		}	//Забороняю елементам повторюватися, якщо їхні дані однакові
return B;	}