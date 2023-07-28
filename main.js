// Repeating Tasks Manually

const vacationSpots = ['Hawaii', 'Australia', 'Ireland'];

console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

// The For Loop

for (let counter = 5; counter < 11; counter++) {
    console.log(counter);
}

// Looping in Reverse

for (let number = 3; number >= 0; number--) {
    console.log(number)
}

// Looping through Arrays

const vacation = ['Bali', 'Paris', 'Tulum'];

for (let i = 0; i < vacation.length; i++) {
    console.log(`I would love to visit ${vacation[i]}`);
}

// Nested Loops

const bobsFollowers = ['Alex', 'Barry', 'Chris', 'Dave'];
const tinasFollowers = ['Alex', 'Barry', 'Curtis'];
const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
    for (let j = 0; j < tinasFollowers.length; j++) {
        if (bobsFollowers[i] === tinasFollowers[j]) {
            mutualFollowers.push(bobsFollowers[i]);
        }
    }
}
  
console.log(mutualFollowers);

// The While Loop

const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard;

while (currentCard !== 'spade') {
    currentCard = cards[Math.floor(Math.random() * 4)];
    console.log(currentCard);
}

// Do...While Statements

let cupsOfSugarNeeded = 3;
let cupsAdded = 0;

do {
    cupsAdded++
    console.log(cupsAdded + ' cup(s) added');
} while (cupsAdded < cupsOfSugarNeeded);

// The Break Keyword

const rapperArray = ['Lil Kim', 'Jay-Z', 'Notorious B.I.G.', 'Tupac'];

for (let i = 0; i < rapperArray.length; i++) {
    console.log(rapperArray[i]);
    if (rapperArray[i] === 'Notorious B.I.G.') {
        break;
    }
}

console.log("And if you don't know, now you know.");