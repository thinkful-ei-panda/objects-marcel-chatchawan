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
  jobTitle: 'Owner', boss: ''};
const obj2 = {name: 'Scruffy Scruffington',
  jobTitle: 'Janitor', boss: obj1};
const obj3 = {name: 'Marcel',
  jobTitle: 'Lead Developer', boss: obj1};
const obj4 = {name: 'Chatchawan', 
  jobTitle: 'Assistant to the Lead Developer', boss: obj3};

let userArray = [obj1, obj2, obj3, obj4];

userArray.forEach(user =>
  console.log(`This is ${user.name}, their job title is ${user.jobTitle}`)
);

// 5. Properties that aren't there

userArray.forEach(user => 
  console.log(`${user.jobTitle} ${user.name} reports to ${user.boss}.`));

// 6. Cracking the code. 'craft block argon meter bells brown croon droop'


let input = 'craft block argon meter bells brown croon droop';

let newInput = 'c00y c00e c00s';

let oneWord = 'craft';

let cipher = {
  a: 2,
  b: 3,
  c: 4,
  d: 5,
};
console.log();
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

console.log(decoder(oneWord));
    
// 7. Factory Functions with LOTR
('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2)
('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8)
('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5)


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
         console.log(`Enemy defense is ${enemy.defense}, your attack is ${this.attack}, difference is ${enemy.defense-this.attack}`);
        damageToEnemy = enemy.defense - this.attack;
        // console.log(damageToEnemy);
      }
      if (this.defense < enemy.attack) { // bilb 1 < gand 10
        console.log(`Your defense is ${this.defense}, enemy attack is ${enemy.attack}, difference is ${this.defense-enemy.attack}`);
        damageToSelf = this.defense - enemy.attack;
        console.log(damageToSelf);
      }
      return `Your opponent takes ${damageToEnemy} damage and you receive ${damageToSelf} damage`;
    }
  };
}
  
let gand = createCharacter('Gandalf the White', 'gandalf', 'Wizard','Middle Earth', 10, 6);
let bilb = createCharacter('Bilbo Baggins', 'bilbo', 'Halfling','The Shire', 2, 1);
let character3 = createCharacter('Frodo Baggins', 'frodo', 'Halfling','The Shire', 2, 1);
  
console.log(bilb.evaluateFight(gand));


