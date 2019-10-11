// CHICKEN MONKEY
// Write a program that prints the numbers from 1 to 100. But for multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number and for the multiples of seven (7, 14, 21, etc.) print "Monkey". For numbers which are multiples of both five and seven print "ChickenMonkey".

const chickenMonkey = () => {
	for (let i = 1; i <= 100; i++) {
		if (!(i%5)) {
			console.log("Chicken");
			continue;
		}
		if (!(i%7)) {
			console.log("Monkey");
			continue;
		}
		console.log(i);
	}
};

// chickenMonkey();


// BATTLE OF THE BANDS
// A local nightclub is having a Battle of the Bands night in a few months. They expect many bands to sign up because the grand prize is $20,000. To make things easier on the nightclub management, they want each band to be assigned a number so that they can easily keep track of the order in which the bands will perform.

// Your job is to write a function that accepts any band name as an argument. The function will increment a global variable by one each time it is invoked, and return that number, and the band name concatenated together.

let bandNum = 0;

const takeNum = band => {
    bandNum++;
    return `${bandNum}. ${band}`;
};

const scum = takeNum("Galactic Scum");
console.log(scum);  // This should print "1. Galactic Scum" in the console

const under = takeNum("Underdogs");
console.log(under);  // This should print "2. Underdogs" in the console


// COOKOUT
const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
};
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
};
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
};
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
};
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
};

// An array that is grouping the objects together.
const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];

// This exercise does not require you to alter this function. But read it. See if you can follow what it takes in, executes, and returns.

const grill = arr => {
	foods.forEach(item => {
		// Modify the food so that it is cooked
    	item.cooked = true;
    	cookedFood.push(item);
	});
};

// Your task is to iterate over the array of foods and invoke the function for each item so that the cookedFood array contains all of the items after they are cooked.
grill(foods);
console.log(cookedFood);


// OVERLY EXCITED
// For this exercise, you need to create a single JavaScript function named addExcitement that will use console.log() to print out a sentence to the browser console.

const sentence = 'The walrus danced through the trees in the light of the moon';

// NOTE: Named the function to have a more applicable name.
const printSentence = sentence => console.log(sentence);
printSentence(sentence);


// STACKING WORDS
// Create an array that contains the words in the sentence
const sentenceArr = sentence.split(' ');

// NOTE: Named the function to have a more applicable name.
const stackWords = arr => {
	/*
	    The addExcitement function should be an impure function, and accept
	    the array as the sole argument. It should iterate over the array
	    and output the words to the browser console.
	*/

    // Each time the for loop executes, you're going to add one more word to this string.
    let buildMeUp = "";

    for (let i = 0; i < arr.length; i++) {
        // Concatenate the new word onto buildMeUp
        buildMeUp = `${buildMeUp} ${arr[i]}`;
        // Print buildMeUp to the console
        console.log(buildMeUp);
    }
};

// Invoke the function and pass in the array
// stackWords(sentenceArr);

// SOME WORDS ARE MORE EXCITING
// NOTE: Named the function to have a more applicable name.
const addExclamation = arr => {
	let buildMeUp = "";

    for (let i = 0; i < arr.length; i++) {
        /*
            If the current word's place (not index) in the array
            is evenly divisible by 3, add an exclamation point
            to the end of the word and then concatenate it to
            `buildMeUp`.

            Otherwise, just concatenate the word itself.
         */
        buildMeUp = `${buildMeUp} ${arr[i]}`;
        if (!((i+1)%3)) buildMeUp = `${buildMeUp}!`;

        // Print buildMeUp to the console
        console.log(buildMeUp);
    }	
};

// addExclamation(sentenceArr);


// FUNCTION ARGUMENTS
// Add a new argument to the function so that a developer can specify which character should be displayed instead of it always being an exclamation point.

// NOTE: Named the function to have a more applicable name.
const addCustomMark = (arr, mark) => {
	let buildMeUp = "";

    for (let i = 0; i < arr.length; i++) {
        /*
            If the current word's place (not index) in the array
            is evenly divisible by 3, add an exclamation point
            to the end of the word and then concatenate it to
            `buildMeUp`.

            Otherwise, just concatenate the word itself.
         */
        buildMeUp = `${buildMeUp} ${arr[i]}`;
        if (!((i+1)%3)) buildMeUp = `${buildMeUp}${mark}`;

        // Print buildMeUp to the console
        console.log(buildMeUp);
    }	
}

// addCustomMark(sentenceArr, '?');