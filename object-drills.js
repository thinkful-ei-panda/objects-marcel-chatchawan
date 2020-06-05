// 1. Object initializers and methods

let loaf = {
  flour: 300,
  water: 210,
  hydration: function() {
    return `Hydration level is ${this.water / this.flour * 100}%`;
  }
};

console.log(loaf.hydration());

// 2. Iterating over an object's properties

const strangeObj = {
  foo: 'oof', 
  bar: 'rab', 
  fum: 'muf', 
  quux: 'xuuq', 
  spam: 'maps' };

for (const property in strangeObj) {
 console.log(` The ${property} is ${strangeObj[property]}`);
}

// 3. Arrays in objects

let food = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};

console.log(`A Hobbit's fourth meal of the day is ${food['meals'][3]}!`);

// 4. Arrays of objects

const obj1 = {name: 'Bob Vance',
jobTitle: 'Owner', boss: undefined};
const obj2 = {name: 'Scruffy Scruffington',
jobTitle: 'Janitor', boss: obj1.name};
const obj3 = {name: 'Marcel',
jobTitle: 'Lead Developer', boss: obj1.name};
const obj4 = {name: 'Chatchawan', 
jobTitle: 'Assistant to the Lead Developer', boss: obj3.name};

let userArray = [obj1, obj2, obj3, obj4];

userArray.forEach(user =>
    console.log(`This is ${user.name}, their job title is ${user.jobTitle}`)
);

// 5. Properties that aren't there

userArray.forEach(user => 
    console.log(`${user.jobTitle} ${user.name} reports to ${user.boss}.`));

// 6. Cracking the code. 'craft block argon meter bells brown croon droop'
let input = 'craft block argon meter bells brown croon droop'

let cipher = {
      a: 2,
      b: 3,
      c: 4,
      d: 5,
};

let decoder = word => {
    if(cipher[word.charAt(0)] === undefined) {
        return ' '
    }
    else {
       return  word.charAt(cipher[word.charAt(0)] - 1)
    }
}
let decodeWords = input =>{
   let result = input.split(' ').map(word => decoder(word))
      return result.join('')
    }
console.log(decodeWords(input))

// 7. Factory Functions with LOTR
  
function createCharacter(name, nickname, race, origin, attack, defense, weapon) {
  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    weapon,
    //Each character should have the method describe which takes no parameters and prints out the string: "{name} is a {race} from {origin}."
    describe: function() {
      console.log(`${name} is a ${race} from ${origin}, weilding ${weapon}`);
    },

    //Each character should also have a method called evaluateFight that takes in a character object and returns the following string: "Your opponent takes {x} damage and you receive {y} damage" where x and y are the differences between each characters attack and defense values. If defense exceeds attack, then take zero damage.
    evaluateFight: function(enemy) {
      let damageToEnemy = 0;
      let damageToSelf = 0;
      if (enemy.defense < this.attack) { // bilb 1 < gand 10
        damageToEnemy = enemy.defense - this.attack;
      }
      if (this.defense < enemy.attack) { // gand 6 > bilb 2
        damageToSelf = this.defense - enemy.attack;
      }
      return `${enemy.name} takes ${damageToEnemy} damage and ${this.name} receives ${damageToSelf} damage`;
    }
  };
}
//Using array literal syntax, create an array characters that calls your factory function for each character in the table above with the relevant parameters. Your characters array should now have 5 objects in it.    
let charArr = [
  new createCharacter('Gandalf the White', 'gandalf', 'Wizard','Middle Earth', 10, 6, 'a simple wooden staff'),
  new createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit','The Shire', 2, 1, 'evil eyes'),
  new createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2, 'Sting'),
  new createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8, 'Anduril'),
  new createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5, 'Cúthalion o Galadriel')
];
  
// Add a new character to characters (make up any attributes not provided):
//Arwen Undomiel is a Half-Elf of Rivendell
charArr.push(createCharacter('Arwen Undomiel', 'arwen', 'half-elf', 'Rivendell', 6, 4, 'Hadhafang'));
 
//Using the .find() function, retrieve your character nicknamed aragorn from characters and then call his describe method.
charArr.find(char => char.nickname === 'aragorn').describe();

//Using the .filter() function, create a new array from characters that ONLY contains characters of the race Hobbit.
let hobbitArr = charArr.filter(search => search.race === 'Hobbit');
for (let ind in hobbitArr) {
  console.log(hobbitArr[ind]);
};

console.log(charArr[1].evaluateFight(charArr[0]));

for (let ind in charArr) {
  charArr[ind].describe();
};
// 8


// const HEROES = [
//     { id: 1, name: 'Captain America', squad: 'Avengers' },
//     { id: 2, name: 'Iron Man', squad: 'Avengers' },
//     { id: 3, name: 'Spiderman', squad: 'Avengers' },
//     { id: 4, name: 'Superman', squad: 'Justice League' },
//     { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
//     { id: 6, name: 'Aquaman', squad: 'Avengers' },
//     { id: 6, name: 'Hulk', squad: 'Justice League' },
//   ];
//   // Write a function findOne() that takes in the following two arguments:

//   // arr - array of Heroes objects to search through
//   // query - object with one or more key/value pairs that must exactly match the target Hero
//   // The first matching result should be returned even if multiple match. If a match isn't found, return null
  
//   let findOne = (arr, searchObj) => {
    
//     let searchKeysArr = []
//     let heroKeysArr = []
//     for (let g = 0; g < arr.length; g++) {
//         let heroObj = arr[g];
//         heroKeysArr = Object.keys(heroObj)
//         // console.log(heroKeysArr)
//         searchKeysArr = Object.keys(searchObj)
//         // console.log(searchKeysArr)
//        for (let searchKey of searchKeysArr) {
//         for (let heroKey of heroKeysArr) {
//           let matchedKey
//           if (searchKey === heroKey) {
//             matchedKey = searchKey
//           }
//           // console.log(matchedKey)
//           if (searchObj[matchedKey] === heroObj[matchedKey]) {
//             return heroObj
//           }
//           }        
          
//         }
       
//       searchKeysArr = []
//       heroKeysArr = []
//     }
//   }
  
//   console.log(findOne(HEROES, { id: 6, squad: 'Justice League' }))
  
