/*************************************************
 * Array formatting
 *************************************************/
export const states = [
	'NJ',
	'MA',
	'CA',
	'IL',
	'FL',
	'CT',
	'ME',
	'NH',
	'VT',
	'NY',
	'RI',
	'PA',
	'DE',
	'MD',
	'VA',
	'NC',
	'SC',
];
export const numbersLong = [
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10,
	11,
	12,
	13,
	14,
	15,
	16,
	17,
	18,
	19,
	20,
	21,
	22,
	23,
	24,
	25,
	26,
	27,
	28,
	29,
	30,
];
export const numbersShort = [
	1, 2, 3,
];
export const arrayOfObjects = [
	{
		name: 'New Jersey',
		capital: 'Trenton',
		abbreviation: 'NJ',
	},
	{
		name: 'New York',
		capital: 'Albany',
		abbreviation: 'NY',
	},
];
export const moreArrayOfObjects = [
	{
		id: 1,
		data: '1, 2, 3',
	},
	{
		id: 2,
		data: [
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
			21,
			22,
			23,
			24,
			25,
			26,
			27,
			28,
			29,
			30,
		],
	},
	{
		id: 1,
		data: [
			1, 2, 3,
		],
	},
	{
		id: 1,
		data: [
			1, 2, 3,
		],
	},
	{
		id: 1,
		data: [
			1, 2, 3,
		],
	},
];

let x = 5,
	y = 10;
export let opsUnformatted = [
	x + y,
	x - y,
	x * y,
	x / y,
];

// Should leave this alone
export let opsFormatted = [
	x + y,
	x - y,
	x * y,
	x / y,
];

// Reducer, long function call
let numbers = [
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
];
export let total = numbers.reduce(
	(runningTotal, currentItem) => runningTotal + currentItem,
	0
);

/*************************************************
 * Object formatting
 *************************************************/

// Long object definition
export let o1 = {
	a: 'apple',
	b: 'banana',
	c: 'car',
	d: 'dog',
	e: 'echo',
	f: 'fruit',
	g: 'game',
	h: 'history',
};

// Object and array and subobject
export let o2 = {
	a: 'apple',
	b: [
		1,
		2,
		3,
		4,
		5,
		6,
	],
	c: {
		sub1: 'one',
		sub2: 'two',
	},
};

// Array of objects
export const people = [
	{
		firstName: 'John',
		lastName: 'Paxton',
		state: 'NJ',
	},
	{
		firstName: 'Dann',
		lastName: 'Russo',
		state: 'MA',
	},
];

/*************************************************
 * Function call formatting
 *************************************************/

// Formatting a long series of arguments
'Sphinx of black quartz, judge my vow'.concat(
	'The',
	'quick',
	'brown',
	'fox',
	'jumps',
	'over',
	'the',
	'lazy',
	'dog'
);

/*************************************************
 * Chained function handling
 *************************************************/

// Prettier will break this, because it insists that the initial .then appear on
// the same line as the fetch call
export function getData() {
	let results = fetch('http://localhost:8000')
		.then((response) => response.json())
		.catch((error) => {
			console.error('Something went wrong!' + error.message);
			throw new Error('Error fetching data');
		});
	return results;
}

// Long line as well
console.log('John', 30, true, [
	'a', 'b', 'c',
], {
	a: 'apple',
	b: 'banana',
	c: 'cake',
	d: 'dog',
});

// Not sure if I can get this to stay as-is
// Some level of JSDoc formatting might be nice as well, especially if I'm going to use it more.

/**
 * Renders an array of movie objects to a given element
 *
 * @typedef {{ id: number,
 *             title: string,
 *             year: number,
 *             director: string | string[],
 *             writer: string | string[],
 *             rating: number,
 *             genre: string[] }} Movie
 * @param {Movie[]} movies
 * @param {HTMLElement} destination
 */
