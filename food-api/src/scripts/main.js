const createFoodComponent = item => {
	const { name, category, ethnicity, ingredients } = item;

	return `
		<section class="food-item">
			<h2>${name}</h2>
			<h3>${ethnicity} ${category}</h3>
			<p><strong>Ingredients:</strong> ${ingredients}</p>
		</section>	
	`;
};

const renderFoods = foods => {
	const foodList = document.querySelector(`.food-list`);

	foods.forEach(food => {
		fetch(`https://world.openfoodfacts.org/api/v0/product/${food.barcode}.json`)
            .then(response => response.json())
            .then(foodInfo => {
                food.ingredients = foodInfo.product.ingredients_text 
                	? foodInfo.product.ingredients_text 
                	: "no ingredients listed";
                foodList.innerHTML += createFoodComponent(food);
            })
	});
};

fetch("http://localhost:8088/food")
	.then(response => response.json())
	.then(parsedFoods => renderFoods(parsedFoods));