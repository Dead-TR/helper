var arr_ = [
  { name: 'Ukraine', population: 42000000},
  { name: 'Belarus', population: 9500000},
  { name: 'Moldova', population: 3500000},
  { name: 'Switzerland', population: 8400000},
]

console.log(arr_.length);


function calculateAverageCountryPopulation(countries) {
var c3 = 0;
var Average = 0;

if (countries.length===0){Average=0} else{


		for (var i = 0; i < countries.length; i++) {
			
		
		var c1 = countries[i];
		var c2 = c1["population"];
console.log("c2", c2);
		c3 = c3+c2;
console.log("c3", c3);
		}
		Average = c3 / countries.length;
											}
	return Average;
}



console.log(calculateAverageCountryPopulation(arr_));