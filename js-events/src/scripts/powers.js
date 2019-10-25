// Wonder Powers Activate!
const allPowers = document.querySelectorAll(".power");

const activateAllHandler = () => allPowers.forEach(power => power.className = "power enabled");
const deactivateAllHandler = () => allPowers.forEach(power => power.className = "power disabled");

document.querySelector("#activate-all").addEventListener("click", activateAllHandler);
document.querySelector("#deactivate-all").addEventListener("click", deactivateAllHandler);
allPowers.forEach(power => {
	const currButton = document.querySelector(`#activate-${power.id}`);

	currButton.addEventListener("click", () => power.className = "power enabled");
});