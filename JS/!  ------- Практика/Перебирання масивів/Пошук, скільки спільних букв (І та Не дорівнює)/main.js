function duplicateCount(text){

 var count = 0,
  a = '';
  sorts = text.toLowerCase().split('').sort().join('');
  console.log("sorts", sorts);

  for(var i = 0; i < sorts.length; i++) {
    if (sorts[i] == sorts[i+1]  && sorts[i] != a) {
      a = sorts[i];
      count++;
      i++;
    }
  }
  return count;
 }

var a = "Indivisibilities"
console.log(duplicateCount(a));