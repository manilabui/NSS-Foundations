const createFoodComponent = item => {
	const { name, category, ethnicity, ingredients, calories, fat, sugar } = item;

	return `
		<section class="food-item">
			<h2>${name}</h2>
			<h3>${ethnicity} ${category}</h3>
			<p><strong>Ingredients:</strong> ${ingredients}</p>
			<p><strong>Calories:</strong> ${calories}</p>
			<p><strong>Fat:</strong> ${fat}</p>
			<p><strong>Sugar:</strong> ${sugar}</p>
		</section>	
	`;
};

const renderFoods = foods => {
	const foodList = document.querySelector(`.food-list`);

	foods.forEach(food => {
		fetch(`https://world.openfoodfacts.org/api/v0/product/${food.barcode}.json`)
            .then(response => response.json())
            .then(foodInfo => {
            	const { ingredients_text } = foodInfo.product;
            	const { energy, fat, sugars, sugars_unit } = foodInfo.product.nutriments;

                food.ingredients = ingredients_text ? ingredients_text : "no ingredients listed";
                food.calories = energy ? energy : "calorie content unavailable";
                food.fat = fat ? fat : "fat content unavailable";
                food.sugar = sugars ? `${sugars}${sugars_unit}` : "sugar content unavailable";
            	foodList.innerHTML += createFoodComponent(food);
            })
	});
};

fetch("http://localhost:8088/food")
	.then(response => response.json())
	.then(parsedFoods => renderFoods(parsedFoods));