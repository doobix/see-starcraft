# see-starcraft

[![npm package](https://nodei.co/npm/see-starcraft.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/see-starcraft/)

Random StarCraft: Brood War stuff

## Installation

```
npm i --save see-starcraft
```

## Usage

### Create instance of SeeStarCraft

```
const SeeStarCraft = require('./node_modules/see-starcraft');
const ssc = new SeeStarCraft();
```

### `ssc.getRandomRace()`

```
Zerg
```

### `ssc.getRandomUnit()`

```
{
  name: 'Terran Siege Tank (Siege Mode)',
  race: 'Terran',
  cost: {
    gas: 100,
    minerals: 150,
    supply: 2,
    time: 50
  },
  properties: {
    hit_points: 150,
    shields: null,
    armor: 1
  },
  ground_weapon: {
    name: 'Arclite Shock Cannon',
    damage: 70
  },
  air_weapon: {
    name: null,
    damage: null
  }
}
```

### `ssc.getRandomBuilding()`

```
{
  name: 'Protoss Robotics Support Bay',
  race: 'Protoss',
  cost: {
    gas: 100,
    minerals: 150,
    time: 30
  },
  properties: {
    hit_points: 450,
    shields: 450,
    armor: 1
  }
}
```

## License

[MIT](/LICENSE)
