const getRandomInt = require('./random');
const starCraftBuildings = require('./starcraft-buildings.json');
const starCraftUnits = require('./starcraft-units.json');

class SeeStarCraft {
  getRandomBuilding() {
    const buildingsLength = starCraftBuildings.buildings.length;
    const randomBuilding = getRandomInt(buildingsLength)
    return starCraftBuildings.buildings[randomBuilding];
  }

  getRandomRace() {
    const randomRace = getRandomInt(3);
    return ['Protoss', 'Terran', 'Zerg'][randomRace];
  }

  getRandomUnit() {
    const unitsLength = starCraftUnits.units.length;
    const randomUnit = getRandomInt(unitsLength)
    return starCraftUnits.units[randomUnit];
  }
}

module.exports = SeeStarCraft;
