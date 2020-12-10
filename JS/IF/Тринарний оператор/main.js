function checkEqual(a, b) {
return a == b ? "Правда (а рівна b)" : "Неправда(а і b не рівні)";
}


console.log("check: ", checkEqual(1, 1));



function checkEqual(num) {
  return (num==0) ? "Правда num=0" 
    : (num < 0) ? "Правда num < 0"	//друга перевірка 
    : "Неправда num > 0";
}