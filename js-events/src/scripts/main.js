console.log("Hello there, hot young thang.");

// Mirror, Mirror in the Code
const message = document.querySelector("#message");
const mirrorLeft = document.querySelector("#mirror-left");
const mirrorRight = document.querySelector("#mirror-right");

const handleMessageKeyUp = e => {
	mirrorLeft.textContent = e.target.value;
	mirrorRight.textContent = e.target.value;
};

message.addEventListener("keyup", handleMessageKeyUp);


// Scrolling and Scaling
const audrey = document.getElementById("audrey");

document.addEventListener("scroll", () => {
   audrey.style.width = `${window.scrollY/3}px`;
   audrey.style.height = `${window.scrollY/4}px`;
})


// Wonder Powers Activate!
const allPowers = document.querySelectorAll(".power");

const activateAllHandler = () => allPowers.forEach(power => power.className = "power enabled");
const deactivateAllHandler = () => allPowers.forEach(power => power.className = "power disabled");

document.querySelector("#activate-all").addEventListener("click", activateAllHandler);
document.querySelector("#deactivate-all").addEventListener("click", deactivateAllHandler);
allPowers.forEach(powerSection => {
	const currButton = document.querySelector(`#activate-${powerSection.id}`);

	currButton.addEventListener("click", () => powerSection.className = "power enabled");
});