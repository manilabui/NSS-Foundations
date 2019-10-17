console.log("you are so beauteous in the sunshine.");

const wishlist = document.getElementById("wishlist");

const displayWishlist = () => {
	const thing = document.getElementById("favThing").value;
	const location = document.getElementById("location").value;

	wishlist.textContent = `I can purchase ${thing} at ${location}.`;
};

document.querySelector("button").addEventListener("click", displayWishlist);