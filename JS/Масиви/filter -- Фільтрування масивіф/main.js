var abr = [1, 2, 2];
var bbr = [2];
console.log("f: ", arrayDiff(abr, bbr));





function array_diff(a, b) {
  return a.filter(function(x) {//Перебираємо масив а
   return b.indexOf(x) == -1; });//Якщо в масиві а, знаходимо, значення з b -- видаляємо його
}