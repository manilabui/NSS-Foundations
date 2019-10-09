// Given two options of data structures - array or object - which should you use? You need to represent a red 2015 Ford Mustang in your code.
const car = {
	color: "red",
	year: 2015,
	make: "Ford",
	model: "Mustang"
};

// Given two options of data structures - array or object - which should you use? You need to store list of animal names in a shelter. The names are "Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", and "Sharky".
const animals = ['Kippers', 'Jack', 'Anna', 'Gypsy'];

// Define an object for four family members, and put each object in an array named familyMembers. Each family member object that you create should have the same keys on them, but the values will be different.
const familyMembers = [
	{ 
		name: "Dad",
		age: 3  
	},
	{
		name: "Mom",
		age: 2  
	},
	{
		name: "Son",
		age: 10
	},
	{
		name: "Daughter",
		age: 8
	}
];

// Given the object below, output each of the values to the console using dot notation.
const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
};

console.log(wardrobe.height, wardrobe.manufacturer);

// Use the following object to complete the lightning exercises below.
const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
};

// Use dot notation to output all of the dimensions of the Empire State Building to the console.
console.log(empireStateBuilding.height, empireStateBuilding.eastWestLength);

// Use square bracket notation to output the remaining 5 properties to the console. Create 5 variables first with the keys as their values. Use those variables to look up the values.
console.log(empireStateBuilding["address"], empireStateBuilding["owner"]);

// Examine the object below.
const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
};

// Output the names of the part-time instructors followed by the names of the full-time instructors in the console.
nashvilleSoftwareSchool.instructors.partTime.forEach(instructor => console.log(instructor));
nashvilleSoftwareSchool.instructors.fullTime.forEach(instructor => console.log(instructor));

// Output only Andy and Zoe in the console.
console.log(nashvilleSoftwareSchool.instructors.fullTime[4]);
console.log(nashvilleSoftwareSchool.instructors.partTime[0]);

// Given the following...
const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}

// Output the following value to the console:
// Paul McCartney was in the Beatles from 1960 to 1970. He was born in 1942. He contributed heavily to the Magical Mystery Tour Album.
console.log(`${beatles.members[1].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[1].birth}. He contributed heavily to the ${beatles.albums[3]} Album.`);