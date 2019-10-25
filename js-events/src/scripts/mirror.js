// Mirror, Mirror in the Code
const message = document.querySelector("#message");
const mirrorLeft = document.querySelector("#mirror-left");
const mirrorRight = document.querySelector("#mirror-right");

const handleMessageKeyUp = e => {
	mirrorLeft.textContent = e.target.value;
	mirrorRight.textContent = e.target.value;
};

message.addEventListener("keyup", handleMessageKeyUp);