function solve(map, miner, exit) {
  var maxX = map[0].length;
  var maxY = map.length;
  var instruction = [];

  for (var i = miner.y; i < map.length; i++) {
    for (var j = miner.x; j < map[i].length; j++) {
      if (i === exit.y && j === exit.x) {
        return instruction;
      }

    }
  }


  return ['default'];
}

var map = [[true, false],
           [true, true]];

console.log(solve(map, {x:0,y:0}, {x:1,y:1}));
