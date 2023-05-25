const resultContainer = document.getElementById('result');
// ... build data table ....
for (const row of data) {
	// tr for each row
	const tr = document.createElement('tr');
	// td for each column
	const joke = document.createElement('td');
	const haha = document.createElement('td');
	const boohoo = document.createElement('td');
	// data is specific to the API
	joke.innerHTML = row.joke;
	haha.innerHTML = row.haha;
	boohoo.innerHTML = row.boohoo;
	// this build td's into tr
	tr.appendChild(joke);
	tr.appendChild(haha);
	tr.appendChild(boohoo);
	// add HTML to container
	resultContainer.appendChild(tr);
}
