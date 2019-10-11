// REPRESENT YOUR PET
/*
	Create an object that represents your pet.

	1. Name property with a string value.
	2. Species property with a string value.
	3. Nicknames property with an array value. Array contains strings.
	4. Age property with an integer value.
*/

const pet = {
	name: 'Minh Tuyet',
	species: 'bunny',
	nicknames: [`Big Booty`, `Hot Young Thang`],
	age: 1,
	favoriteToys: [],
	hop() {
		window.alert(`I'm moving my body.`)
	},
	eat() {
		console.log(`${this.name} is consuming the goods.`)
	},
	smile() {
		window.alert(`I'm smiling in your direction.`)
	},
	play(toy) {
		if (toy === 'black') this.favoriteToys.push('toy');
	}
};


// PET SOUNDS
/*
	Now that you have an object that represents your pet, it's time to add some behavior. Pick three behaviors that your pet has and add three keys to your pet object. Each key's value should be a function that logs to the console or displays a window alert. Your choice.

	For example, if your pet is a dog, you could add a bark property, and the function would window.alert("WOOF!").

	Once you have define the properties, invoke each behavior.
*/
// Defined properties in object above. Invocation below.
pet.hop();
pet.eat();
pet.smile();


// MY PET 'THIS'
/*
	1. Give your pet a new key named favoriteToys whose value is an empty array.
	2. Now define another new key named play whose value is a function with a single parameter named toy.
	3. The function should determine if your pet liked the toy, and if s/he does, then it should be added to the favoriteToys array using the this keyword (see example above).

	Here's an example. If your pet is a cat, then he likely only likes furry toys, so you could put an if..then condition in the play() method that checks if the word "fuzzy" is in the argument value. If it is, it gets added to the array.
*/


// FAST FOOD ORDERING
/*
	You need to write code to represent the process of ordering food at a fast food joint. Your restaurant is Bob's Burgers, and you have some starter code below. The object will have two behaviors that you must define.

	1. The object should have a property named orders that is an array. You will need to define this.
	2. Define a function to represent the behavior of placing an order. It should accept one argument named meal. This argument will be an object. There is starter code provided.
	3. Define a function to represent the behavior of getting all orders. It should return the order property (hint: this). You will need to define this.
	4. Each meal object should have three properties: sandwichType, fries (true or false), and drinkSize.
*/

const restaurant = {
    name: "Bob's Burgers",
    orders: [],
    placeOrder (meal) {
    	this.orders.push(meal);
    },
    listAllOrders () {
 		return this.orders;
    }
};

const chickenComboMeal = {
	sandwichType: `chicken`,
	fries: true,
	drinkSize: 2
};

// Place an order
restaurant.placeOrder(chickenComboMeal);

// Invoke the function to return the list of all orders
restaurant.listAllOrders();

// Output all orders to the console using console.table()
console.table(restaurant.listAllOrders());