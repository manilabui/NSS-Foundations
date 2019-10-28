// Scrolling and Scaling
const audrey = document.getElementById("audrey");

document.addEventListener("scroll", () => {
   audrey.style.width = `${window.scrollY/3}px`;
   audrey.style.height = `${window.scrollY/4}px`;
})