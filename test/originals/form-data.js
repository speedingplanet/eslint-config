let form = document.querySelector('#address-form');
form.addEventListener('submit', (event) => {
	event.preventDefault();
	console.log('You submitted the form');

	let formDataObject = new FormData(form);

	// Get a specific value
	// eslint-disable-next-line no-unused-vars
	let firstName = formDataObject.get('first-name');
	// eslint-disable-next-line no-unused-vars
	let city = formDataObject.get('city');

	// FormData as iterable
	// The same as formDataObject.entries()
	for (let keyValuePair of formDataObject) {
		let key = keyValuePair[0];
		let value = keyValuePair[1];

		console.log(`The field ${key} is set to "${value}".`);
	}

	// Keys only
	for (let key of formDataObject.keys()) {
		console.log('Keys only:', key);
	}

	// Values only
	for (let value of formDataObject.values()) {
		console.log('Values only:', value);
	}
});
