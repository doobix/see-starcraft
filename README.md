# see-starcraft

[![npm package](https://nodei.co/npm/see-starcraft.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/see-starcraft/)

Random StarCraft: Brood War stuff

## Installation

```
npm i --save see-starcraft
```

## Usage

```
const SeeStarCraft = require('./node_modules/see-starcraft');
const ssc = new SeeStarCraft();

console.log(ssc.getRandomRace());
// "Zerg"

console.log(ssc.getRandomUnit());
// {
//   "name": "Terran Science Vessel",
//   "race": "Terran",
//   "cost": {
//     "gas": 225,
//     "minerals": 100,
//     "supply": 2,
//     "time": 80
//   }
// }

console.log(ssc.getRandomBuilding());
// {
//   "name": "Protoss Gateway",
//   "race": "Protoss",
//   "cost": {
//     "gas": 0,
//     "minerals": 150,
//     "time": 60
//   }
// }
```

## License

[MIT](/LICENSE)
