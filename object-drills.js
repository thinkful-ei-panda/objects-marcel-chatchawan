/* eslint-disable strict */
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

userArray.forEach(function (user) { 
  if (user.boss === undefined) {
    console.log(`${user.jobTitle} ${user.name} doesn't report to anybody.`);
  } else {
    console.log(`${user.jobTitle} ${user.name} reports to ${user.boss}.`);
  }
});

// 6. Cracking the code. 'craft block argon meter bells brown croon droop'

let input = 'craft block argon meter bells brown croon droop';

let cipher = {
  a: 2,
  b: 3,
  c: 4,
  d: 5,
};

let decoder = word => {
  if(cipher[word.charAt(0)] === undefined) {
    return ' ';
  }
  else {
    return  word.charAt(cipher[word.charAt(0)] - 1);
  }
};

let decodeWords = input =>{
  let result = input.split(' ').map(word => decoder(word));
  return result.join('');
};

console.log(decodeWords(input));

7. Factory Functions with LOTR

function createCharacter(name, nickname, race, origin, attack, defense) {
  return {
    name,
    nickname,
    origin,
    attack,
    defense,
    evaluateFight: function(enemy) {
      let damageToEnemy = 0;
      let damageToSelf = 0;
      if (enemy.defense < this.attack) { // bilb 1 < gand 10
        damageToEnemy = enemy.defense - this.attack;
        console.log(enemy.defense-this.attack);
      }
      if (this.defense < enemy.attack) { // gand 6 > bilb 2
        damageToSelf = this.defense - enemy.attack;
        console.log(this.defense-enemy.attack);
      }
      return `${enemy.name} takes ${damageToEnemy} damage and ${this.name} receives ${damageToSelf} damage`;
    }
  };
}
  
let charArr = [
  new createCharacter('Gandalf the White', 'gandalf', 'Wizard','Middle Earth', 10, 6),
  new createCharacter('Bilbo Baggins', 'bilbo', 'Halfling','The Shire', 2, 1),
  new createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
  new createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8),
  new createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5)
];

charArr.push(createCharacter('Arwen Undomiel', 'arwen', 'half-elf', 'Rivendell', 6, 4))
charArr.find(char => char.nickname === 'aragorn')
console.log(charArr[1].evaluateFight(charArr[0]))
