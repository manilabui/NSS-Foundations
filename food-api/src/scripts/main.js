const createFoodComponent = item => {
	const { name, category, ethnicity } = item;

	return `
		<section class="food-item">
			<h2>${name}</h2>
			<h4>${category}</h4>
			<h4>${ethnicity}</h4>
		</section>	
	`;
};

const renderFoods = foods => {
	const foodList = document.querySelector(`.food-list`);

	foods.forEach(item => foodList.innerHTML += createFoodComponent(item));
};

fetch("http://localhost:8088/food")
	.then(foods => foods.json())
	.then(parsedFoods => renderFoods(parsedFoods));