// fetch data
const getParks = () => fetch('http://localhost:3000/parks').then(r => r.json());

// create HTML
const createHTML = (name, state) => {
	return `
		<article>
		    <h3>${name}</h3>
		    <p>${state}</p>
		</article>
	`;
};

// modify DOM
const renderParkInfo = arr => {
	const container = document.querySelector(".container");
	let parksHTMLStr = '';

	arr.forEach(park => {
		const { name, state } = park;

		parksHTMLStr += createHTML(name, state);
	})

	container.innerHTML = parksHTMLStr;
};

// execute function to render parks on the DOM
getParks().then(parks => renderParkInfo(parks));