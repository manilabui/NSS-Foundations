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

