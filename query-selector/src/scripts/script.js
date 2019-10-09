const firstHeaderEl = document.querySelector(".article__header");
const headerEls = document.querySelectorAll(".article__header");
const dashedEl = document.querySelector(".dashed");
const footerEl = document.querySelector(".article__footer");

firstHeaderEl.textContent = "Welcome to Manchilla's blog";
headerEls.forEach(el => el.classList.add("important"));
dashedEl.classList.remove("dashed");
footerEl.classList.add("goldenrod");
