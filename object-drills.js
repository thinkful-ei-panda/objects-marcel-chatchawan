// 1. Object initializers and methods

let loaf = {
    flour: 300,
    water: 210,
    hydration: function() {
        this.water / this.flour * 100;
    }
}

console.log(loaf.hydration())

// 2. Iterating over an object's properties

const strangeObj = {
    foo: 'oof', 
    bar: 'rab', 
    fum: 'muf', 
    quux: 'xuuq', 
    spam: 'maps' }

for (const property in strangeObj) {
   console.log(` The ${property} is ${property.value}`)
}

// 3. Arrays in objects

let food = {
    meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
}

console.log(food['meals'][3])

// 4. Arrays of objects

const obj1 = {name: 'Bob Vance',
jobTitle: 'Owner', boss: ''}
const obj2 = {name: 'Scruffy Scruffington',
jobTitle: 'Janitor', boss: obj1}
const obj3 = {name: 'Marcel',
jobTitle: 'Lead Developer', boss: obj1}
const obj4 = {name: 'Chatchawan', 
jobTitle: 'Assistant to the Lead Developer', boss: obj3}

let userArray = [obj1, obj2, obj3, obj4]

userArray.forEach(user =>
    console.log(`This is ${user.name}, their job title is ${user.jobTitle}`)
)

// 5. Properties that aren't there

userArray.forEach(user => 
    console.log(`${user.jobTitle} ${user.name} reports to ${user.boss}.`))

// 6. Cracking the code. 'craft block argon meter bells brown croon droop'
let cipher = {
      a: 2,
      b: 3,
      c: 4,
      d: 5,
}
let decode = word => {
  let l = 'that'
    l = word.charAt(0)[cipher]
    console.log(l)
} 
console.log(decode('cat'))

// 7. Factory Functions with LOTR

function createCharacter(name, nickname, race, origin, attack, defense) {
    return {
        name,
        nickname,
        origin,
        attack,
        defense,
        evaluateFight: function(enemy) {
            if (enemy.defense > this.attack) {
                let damageToEnemy = enemy.defense - this.attack
            }
            if (this.defense > enemy.attack) {
                let damageToSelf = this.defense - enemy.attack
            }
            return `Your opponent takes ${damageToEnemy} damage and you receive ${damageToSelf} damage`
        }
    }
}

let characters = []