const getRandomInt = require('./random');
const starCraftBuildings = require('./starcraft-buildings.json');
const starCraftUnits = require('./starcraft-units.json');

class SeeStarCraft {
  getRandomBuilding() {
    const race = this.getRandomRace();
    const buildingLength = starCraftBuildings[race].length;
    const randomBuilding = getRandomInt(buildingLength)
    return starCraftBuildings[race][randomBuilding];
  }

  getRandomRace() {
    const randomRace = getRandomInt(3);
    return Object.keys(starCraftUnits)[randomRace];
  }

  getRandomUnit() {
    const race = this.getRandomRace();
    const unitsLength = starCraftUnits[race].length;
    const randomUnit = getRandomInt(unitsLength)
    return starCraftUnits[race][randomUnit];
  }
}

module.exports = SeeStarCraft;
