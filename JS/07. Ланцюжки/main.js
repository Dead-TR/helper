var str, nstr;


str="Стрічка для демонстрації крапкового ланцюжка при написанні коду"

nstr=str
	.replace("для", "згенерована для")
	.concat(' "плюс"')
	.toUpperCase()
	.replace(/ /g, "\n")
	.slice(7);

console.log(nstr);
