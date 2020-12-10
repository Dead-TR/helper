const promise = new Promise((resolve, reject) => {
	let left = false;
	let right = false;

	const resolveCall = () => {
		if (left === true && right === true) {
			resolve();
		}
	}


	document.addEventListener('click', () => {
		left = true;
		resolveCall();
	})

	document.addEventListener('contextmenu', () => {
		right = true;
		resolveCall();
	})

	

	setTimeout(() => {
		reject()
	}, 5000)
});

promise.then(() => console.log('success')); 

/*

	resolve, reject) => {
		setTimeout(() => {
			resolved();
		}, delay)
	}

*/

const wait = (delay) => {

	return new Promise((resolved) => {
		setTimeout(() => {
			resolved();
		}, delay)
	});
}

wait(500).then(() => console.log('success'))

element -- dom element
event -- подія

const waitFor = (element, eventName) => {

	
}

waitFor(P, eventG);



