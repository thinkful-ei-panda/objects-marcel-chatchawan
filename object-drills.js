// 1. Object initializers and methods

let loaf = {
    flour: 300,
    water: 210,
    hydration: function() {
        this.water / this.flour * 100;
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
   console.log(` The ${property} is ${property.value}`);
}

// 3. Arrays in objects

let food = {
    meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};

console.log(food['meals'][3]);

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
console.log(`${user.name} is ${user.jobTitle}`)
);

// 5. Properties that aren't there

userArray.forEach(user => 
    console.log(`${user.jobTitle} ${user.name} reports to ${user.boss}.`));

// 6. Cracking the code. 'craft block argon meter bells brown croon droop'


let input = 'craft block argon meter bells brown croon droop'

let newInput = 'c00y c00e c00s'

let oneWord = 'craft'

let cipher = {
      a: 2,
      b: 3,
      c: 4,
      d: 5,
};
console.log()
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

console.log(decoder(oneWord))
console.log(decodeWords(input))

// 7. Factory Functions with LOTR

function createCharacter(name, nickname, race, origin, attack, defense) {
    return {
        name,
        nickname,
        origin,
        attack,
        defense,
        evaluateFight: function(enemy) {
            let damageToSelf;
            let damageToEnemy;
            if (enemy.defense > this.attack) {
                damageToEnemy = enemy.defense - this.attack;
            }
            if (this.defense > enemy.attack) {
                damageToSelf = this.defense - enemy.attack;
            }
            return `Your opponent takes ${damageToEnemy} damage and you receive ${damageToSelf} damage`;
        }
    };
}


let characters = []

let character1 = createCharacter('Gandalf the White', 'gandalf', 'Wizard','Middle Earth', 10, 6)
let character2 = createCharacter('Bilbo Baggins', 'bilbo', 'Halfling','The Shire', 2, 1)
let character3 = createCharacter('Frodo Baggins', 'frodo', 'Halfling','The Shitre', 2, 1)

console.log(character2.evaluateFight(character1))

// 8

const HEROES = [
    { id: 1, name: 'Captain America', squad: 'Avengers' },
    { id: 2, name: 'Iron Man', squad: 'Avengers' },
    { id: 3, name: 'Spiderman', squad: 'Avengers' },
    { id: 4, name: 'Superman', squad: 'Justice League' },
    { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
    { id: 6, name: 'Aquaman', squad: 'Avengers' },
    { id: 6, name: 'Hulk', squad: 'Justice League' },
  ];
  // Write a function findOne() that takes in the following two arguments:
  
  // arr - array of Heroes objects to search through
  // query - object with one or more key/value pairs that must exactly match the target Hero
  // The first matching result should be returned even if multiple match. If a match isn't found, return null
  
  let findOne = (arr, searchObj) => {
    
    let searchKeysArr = []
    let heroKeysArr = []
    for (let g = 0; g < arr.length; g++) {
        let heroObj = arr[g];
        heroKeysArr = Object.keys(heroObj)
        // console.log(heroKeysArr)
        searchKeysArr = Object.keys(searchObj)
        // console.log(searchKeysArr)
       for (let searchKey of searchKeysArr) {
        for (let heroKey of heroKeysArr) {
          let matchedKey
          if (searchKey === heroKey) {
            matchedKey = searchKey
          }
          // console.log(matchedKey)
          if (searchObj[matchedKey] === heroObj[matchedKey]) {
            return heroObj
          }
          }        
          
        }
       
      searchKeysArr = []
      heroKeysArr = []
    }
  }
  
   
  
  console.log(findOne(HEROES, { id: 6, squad: 'Justice League' }))
  
  
   

