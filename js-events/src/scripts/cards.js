let currIdNum = 0;

const createCard = input => {
	currIdNum++;

	return `
		<section class="card" id="c${currIdNum}">
			<div>${input}</div>
			<button class="card-button delete" id="d${currIdNum}">Delete</button>
		</section>
	`;
};

const addEventToDeleteButton = id => {
	const currDelButton = document.getElementById(`d${id}`);

	currDelButton.addEventListener("click", () => document.getElementById(`c${id}`).remove());
}

const renderCard = input => document.querySelector(".container").innerHTML += createCard(input);

const handleCreate = () => {
	const userInput = document.querySelector("textarea").value;
	console.log(userInput);
	renderCard(userInput);
	addEventToDeleteButton(currIdNum);
}

// event listener for create button
document.getElementById("create-button").addEventListener("click", handleCreate);
