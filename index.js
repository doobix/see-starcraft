const getRandomInt = require('./random');
const starCraftUnits = require('./starcraft-units.json');

class seeStarCraft {
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

module.exports = seeStarCraft;
