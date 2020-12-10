well(prompt('Кількість ідей: ', ''));


function well(x){
				console.log('Всього ідей: ' +x);	
					
	
	
				var fr = [];	
	
					for (var i=0; i<x; i++){	
					fr[i] = prompt('(1 - хороша ідея 0 - погана)\n Введи значення #' +(i+1) +':', '');
				//console.log(fr[i]);
						if (fr[i] =="1"){fr[i]="good";}
						else if (fr[i] =="good"){fr[i]="good";}
						else if (fr[i] =="bad"){fr[i]="bad";}
						else {fr[i]="bad";}
						
								}
	
	
				var chek = fr; 				//--------Перший масив
				//console.log(fr);
				
				var marr = chek;
				marr.sort();
		console.log(marr);
	
				var m1;
				if (marr[marr.length-2]=="good"){ m1 = "Результат ліпший аніж гадалося!";}
				else if (marr[marr.length-1]=="good"){ m1 = "Годиться!";}
				else { m1 = "Біда.";}
		console.log(m1);
		return m1;
		
} 