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

// 7. Factory Functions with LOTR

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
      if (enemy.defense < this.attack) { // gand 6 < bilb 2
        damageToEnemy = enemy.defense - this.attack;
      }
      if (this.defense < enemy.attack) { // bilb 1 < gand 10
        damageToSelf = this.defense - enemy.attack;
      }
      return `Your opponent takes ${damageToEnemy} damage and you receive ${damageToSelf} damage`;
    }
  };
}
  
let charArr = [
  ('Gandalf the White', 'gandalf', 'Wizard','Middle Earth', 10, 6),
  ('Bilbo Baggins', 'bilbo', 'Halfling','The Shire', 2, 1),
  ('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
  ('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8),
  ('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5)
];

let charObjArr = charArr.map(createCharacter())

console.log(charObjArr)

