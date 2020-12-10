const mateURL = 'http://mate-api.herokuapp.com';
const urlM = `${mateURL}/users`;

const jsonURL = 'https://jsonplaceholder.typicode.com';
const urlJ = `${jsonURL}/todos`;

const params = {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json; charset=utf-8',
	}
}

fetch(urlM)// результатом fetch є проміс.
	.then(response => {
		// console.log("fetch - прийнятий об'єкт", response);
		// console.log("fetch - статус об'єкта", response.status);
		// console.log("fetch - Content-Type", response.headers.get('Content-Type'));
		// Спершу, сервер віддає інформацію про запрошений об'єкт, ще до того, як надає самі дані

		if (response.ok) { //якщо сервер відповів успішно
			if(response.headers.get('content-type').includes('application/json')) {
				return response.json() // запит, на отримання результату. результатом є проміс
			}
		}
			// тут повернення відбувається в форматі json. інші доступні формати:
			// .text() -- віддає результат в вигляді тексту
			// .blob
			// .arrayBuffer

			return Promise.reject(`${response.status} - ${response.statusText}`) //Якщо сервер відповів з помилкою
				// .status - код помилки, .statusText - текст помилки
	})
	.then(
		result => {
			console.log("fetch отримані дані", result);

		},
		error => {
			console.warn("fetch error: ", error);
		}
	)

//--------------------------------request------------------------------------------

const print = (value) => {
	console.log("request Відповідь з серверу: ", value);
}

const request = (url, options) => {
	return fetch(url, options)
		.then(response => {
			if (!response.ok) {
				throw `${response.status} - ${response.statusText}`;
			}

			return response.json();
		})
}

const getTodos = () => request(urlJ);
const getUsers = () => request(urlM).then(result => result.data);
const getUser = (userId) => request(urlM+`/${userId}`).then(result => result.data);

// getTodos().then(print)
// getUsers().then(print)
// getUser(10).then(print)

//----------------------------------------------------------------------------------

const urlJPosts = `${mateURL}/todos`;

const getJTodos = () => request(urlJPosts);
const getJTodo = (tID) => request(`${urlJPosts}/${tID}`);

const post = (url, data) => { //уніфікація відправки даних на сервер
	return request(
		url,
		{
			method: 'POST',
			headers: {
				"content-type": "application/json; charset=UTF-8"
			},
			body: JSON.stringify(data)
		}
	)
}

const patch = (url, data) => { //уніфікація відправки даних на сервер
	return request(
		url,
		{
			method: 'PATCH',
			headers: {
				"content-type": "application/json; charset=UTF-8"
			},
			body: JSON.stringify(data)
		}
	)
}

const del = (url) => {
	return request(url, {method: 'DELETE'});
}

const createJTodo = (title) => {//створює на сервері елемент, з відповідними даними, вказаними в body
	return post(
		urlJPosts, 
		{
			completed: false,
			title,
			userId: 99,
		}
	)
}

// createJTodo('test') //створити дані на сервері
// 	.then(result => result.data)
// 	.then(print)
// 	.then(() => {
// 		getJTodos().then(print);
// 	})

const changeJTodo = (todoID, update) => { //оновлює існуючу на сервері інформацію
	return patch(
			`${urlJPosts}/${todoID}`, 
			update
		)
}

changeJTodo(
	1362,
	{
		completed: true,
		userId: 159,
		title: 'sdf;lk'
	}
)
	.then(print)
	.then(() => {
		getJTodos().then(print);
	})

const deleteJTodo = (todoID) => { //видалити дані із сервера 
	return del(`${urlJPosts}/${todoID}`);
}

deleteJTodo(1251)
	.then(print)
	.then(() => {
		getJTodos().then(print);
	})
