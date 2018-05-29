const assert = require('assert');
const SeeStarCraft = require('./index');
const ssc = new SeeStarCraft();

const randomRace = ssc.getRandomRace();
console.log(randomRace);
assert(['Protoss', 'Terran', 'Zerg'].includes(randomRace));

const randomUnit = ssc.getRandomUnit();
console.log(randomUnit);
assert(Object.keys(randomUnit).includes('name'));
assert(Object.keys(randomUnit).includes('cost'));
assert(Object.keys(randomUnit.cost).includes('minerals'));
assert(Object.keys(randomUnit.cost).includes('gas'));
assert(Object.keys(randomUnit.cost).includes('supply'));
assert(Object.keys(randomUnit.cost).includes('time'));

const randomBuilding = ssc.getRandomBuilding();
console.log(randomBuilding);
assert(Object.keys(randomBuilding).includes('name'));
assert(Object.keys(randomBuilding.cost).includes('minerals'));
assert(Object.keys(randomBuilding.cost).includes('gas'));
assert(Object.keys(randomBuilding.cost).includes('time'));
