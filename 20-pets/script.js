/**
 * DOM - Document Object Model - Petslist
 *
 * TODO:
 * Loopa över array:en `pets` och för varje `pet`, lägg till en `<li>` till
 * `#petslist` med info om varje pet:
 *
 * NAME is a SPECIES of AGE year(s) old.
 * His owner is OWNER and his favorite hobbies is to HOBBIES.
 */

// Array of pets
const pets = [
	{
		name: "Mr Barksby",
		species: "Dog",
		age: 5,
		hobbies: ["Tail-wagging", "Car-chasing", "Eating lots of treats"],
		owner: {
			name: "Mr Beans",
			age: 57,
		},
		sound: "WOOOFF!",
		speak() {
			console.log(`${this.name} sound: ${this.sound}`);
		}
	},
	{
		hobbies: "Be cute",
		species: "Kitten",
		age: 1,
		name: "Meow Jr",
		sound: "meooow!",
		meowCounter: 0,
		speak() { // same as writing "speak: function() {}"
			this.meowCounter++;
			console.log(this.sound);
			console.log(`Meowed times today: ${this.meowCounter}`);
		}
	}
];

const petslist = document.querySelector('#petslist');
const theOwner = '';



pets.forEach(pet => {

	// if(pet.owner){
	// 	theOwner = pet.owner.name;
	
	// } else{
	// 	theOwner = 'unfortunately nobody'
	
	// }
	

	// lägg till en `<li>` till `#petslist` + info om varje pet i arrayen
	petslist.innerHTML += `<li>${pet.name} is a ${pet.species} of ${pet.age} year(s) old. 
	His owner is ${pet.owner} and his favorite hobbies is to ${pet.hobbies}.</li>`
	
});

// const petslist = document.querySelector('#petslist');
// const theOwner = '';



// pets.forEach(pet => {

// 	// if(pet.owner){
// 	// 	theOwner = pet.owner.name;
	
// 	// } else{
// 	// 	theOwner = 'unfortunately nobody'
	
// 	// }
	

// 	// lägg till en `<li>` till `#petslist` + info om varje pet i arrayen
// 	petslist.innerHTML += `<li>${pet.name} is a ${pet.species} of ${pet.age} year(s) old. 
// 	His owner is ${pet.owner} and his favorite hobbies is to ${pet.hobbies}.</li>`
	
// });