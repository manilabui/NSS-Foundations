// fetch data
const getParks = () => fetch('http://localhost:3000/parks').then(r => r.json());

// create HTML
const createHTML = (name, state, visited) => {
	const visitStatus = visited ? "visited" : "not-visited";

	return `
		<article class="${visitStatus}">
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
		const { name, state, visited } = park;

		parksHTMLStr += createHTML(name, state, visited);
	})

	container.innerHTML = parksHTMLStr;
};

// execute function to render parks on the DOM
getParks().then(parks => renderParkInfo(parks));