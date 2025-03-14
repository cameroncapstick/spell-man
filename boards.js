'use strict';

let boards = [];
// boards[0] is shown as "Level 1" to user

// Legend
// 0 - pac-dot
// 1 - wall
// 2 - ghost-lair
// 3 - power-pellet
// 4 - empty

// temporary layout - change me
let level1 = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1,
  1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 5, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1,
  1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1,
  1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  1, 0, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1,
  1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1,
  1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 0, 1, 0, 1,
  1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1,
  1, 0, 1, 0, 1, 0, 1, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 1, 0, 1, 0, 1, 0, 1,
  1, 0, 1, 5, 1, 0, 1, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 1, 0, 1, 5, 1, 0, 1,
  1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1,
  1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1,
  1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1,
  1, 0, 1, 0, 1, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1,
  1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1,
  1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1,
  1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1,
  1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
];
boards.push(level1);

// level 2 board
let level2 = [
  1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	4,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,
  1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	5,	3,	1,
  1,	0,	1,	1,	1,	1,	1,	1,	1,	1,	1,	0,	1,	1,	0,	1,	1,	0,	1,	1,	1,	1,	1,	1,	1,	1,	0,	1,
  1,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	1,
  1,	0,	1,	1,	1,	0,	1,	1,	1,	0,	1,	1,	0,	1,	0,	1,	0,	1,	1,	0,	1,	1,	0,	1,	1,	1,	0,	1,
  1,	0,	1,	5,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	1,
  1,	0,	1,	1,	1,	0,	1,	1,	1,	0,	1,	1,	0,	1,	0,	1,	0,	1,	1,	0,	1,	1,	0,	1,	1,	1,	0,	1,
  1,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	1,
  1,	0,	1,	1,	1,	0,	1,	1,	1,	0,	1,	1,	0,	1,	0,	1,	0,	1,	1,	0,	1,	1,	0,	1,	1,	1,	0,	1,
  1,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	1,
  1,	0,	1,	0,	1,	0,	1,	1,	1,	0,	1,	1,	1,	1,	0,	1,	1,	1,	1,	0,	1,	1,	0,	1,	0,	1,	0,	1,
  1,	0,	1,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	3,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	1,	0,	1,
  1,	0,	1,	0,	1,	0,	1,	0,	1,	1,	1,	1,	1,	1,	4,	1,	1,	1,	1,	1,	0,	1,	0,	1,	0,	1,	0,	1,
  1,	0,	1,	0,	1,	0,	1,	0,	1,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	1,	0,	1,	0,	1,	0,	1,	0,	1,
  4,	0,	1,	5,	1,	0,	1,	0,	1,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	1,	0,	1,	0,	1,	0,	1,	0,	4,
  1,	0,	1,	0,	1,	0,	1,	0,	1,	1,	1,	1,	1,	1,	4,	1,	1,	1,	1,	1,	0,	1,	0,	1,	0,	1,	0,	1,
  1,	0,	1,	0,	1,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	1,	0,	1,	0,	1,
  1,	0,	1,	0,	1,	0,	1,	0,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	0,	1,	0,	1,	0,	1,	0,	1,
  1,	0,	1,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	1,	0,	1,
  1,	0,	1,	0,	1,	0,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	0,	1,	0,	1,	0,	1,
  1,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	1,
  1,	0,	1,	1,	0,	1,	1,	0,	1,	1,	0,	1,	1,	1,	0,	1,	1,	0,	1,	1,	0,	1,	1,	0,	1,	1,	0,	1,
  1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,
  1,	0,	1,	1,	1,	0,	1,	1,	1,	1,	1,	1,	1,	1,	5,	1,	1,	1,	1,	1,	1,	1,	0,	1,	1,	1,	0,	1,
  1,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	1,
  1,	0,	1,	1,	1,	1,	1,	1,	1,	1,	1,	0,	1,	1,	0,	1,	1,	0,	1,	1,	1,	1,	1,	1,	1,	1,	0,	1,
  1,	3,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	5,	1,
  1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	4,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,
];
boards.push(level2);

// level 3 board
let level3 = [
  1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,
1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	5,	0,	1,
1,	0,	1,	1,	1,	1,	1,	1,	1,	1,	1,	0,	1,	1,	0,	1,	1,	0,	1,	1,	1,	1,	1,	1,	1,	1,	0,	1,
1,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	1,
1,	0,	1,	1,	1,	0,	1,	1,	1,	0,	1,	1,	0,	1,	0,	1,	0,	1,	1,	0,	1,	1,	0,	1,	1,	1,	0,	1,
1,	0,	0,	5,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,
1,	0,	1,	1,	1,	0,	1,	1,	1,	0,	1,	1,	0,	1,	0,	1,	0,	1,	1,	0,	1,	1,	0,	1,	1,	1,	0,	1,
1,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	1,
1,	0,	1,	1,	1,	0,	1,	1,	1,	0,	1,	1,	0,	1,	0,	1,	0,	1,	1,	0,	1,	1,	0,	1,	1,	1,	0,	1,
1,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	5,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	1,
1,	0,	0,	0,	1,	0,	1,	1,	1,	0,	1,	1,	1,	1,	0,	1,	1,	1,	1,	0,	1,	1,	0,	1,	0,	0,	0,	1,
1,	0,	1,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	3,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	1,	0,	1,
1,	0,	1,	0,	1,	0,	1,	0,	1,	1,	0,	1,	1,	1,	4,	1,	1,	0,	1,	1,	0,	1,	0,	1,	0,	1,	0,	1,
1,	0,	1,	0,	1,	0,	1,	0,	0,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	0,	0,	1,	0,	1,	0,	1,	0,	1,
4,	0,	1,	5,	0,	0,	1,	0,	1,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	1,	0,	1,	0,	0,	0,	1,	0,	4,
1,	0,	1,	0,	1,	0,	1,	0,	1,	1,	0,	1,	1,	1,	4,	1,	1,	0,	1,	1,	0,	1,	0,	1,	0,	1,	0,	1,
1,	0,	1,	0,	1,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	1,	0,	1,	0,	1,
1,	0,	1,	0,	1,	0,	1,	0,	1,	1,	0,	1,	1,	1,	0,	1,	1,	1,	0,	1,	0,	1,	0,	1,	0,	1,	0,	1,
1,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	1,
1,	0,	1,	0,	1,	0,	1,	1,	1,	1,	0,	1,	1,	1,	0,	1,	1,	1,	0,	1,	1,	1,	0,	1,	0,	1,	0,	1,
1,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	1,
1,	0,	1,	1,	0,	1,	1,	0,	1,	1,	0,	1,	1,	1,	0,	1,	1,	0,	1,	1,	0,	1,	1,	0,	1,	1,	0,	1,
1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,
1,	0,	1,	1,	1,	0,	1,	1,	1,	1,	0,	1,	1,	1,	5,	1,	1,	0,	1,	1,	1,	1,	0,	1,	1,	1,	0,	1,
1,	0,	1,	5,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	5,	1,	0,	1,
1,	0,	1,	1,	1,	0,	1,	1,	1,	1,	1,	0,	1,	1,	0,	1,	1,	0,	1,	1,	1,	1,	0,	1,	1,	1,	0,	1,
1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	5,	1,
1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,
];
boards.push(level3);


export { boards };
'use strict';

let boards = [];
// boards[0] is shown as "Level 1" to user

// Legend
// 0 - pac-dot
// 1 - wall
// 2 - ghost-lair
// 3 - power-pellet
// 4 - empty
// 5 - letter tile

// may need to increase the amount of spaces in the monster den to allow the monsters to escape and move towards player.
let level1 = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1,
  1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 5, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1,
  1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1,
  1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  1, 0, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1,
  1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1,
  1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 0, 1, 0, 1,
  1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1,
  1, 0, 1, 0, 1, 0, 1, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 1, 0, 1, 0, 1, 0, 1,
  1, 0, 1, 5, 1, 0, 1, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 1, 0, 1, 5, 1, 0, 1,
  1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1,
  1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1,
  1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1,
  1, 0, 1, 0, 1, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1,
  1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1,
  1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1,
  1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1,
  1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,

];
boards.push(level1);

// temporary layout - change me
let level2 = [
  1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	4,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,
1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	5,	3,	1,
1,	0,	1,	1,	1,	1,	1,	1,	1,	1,	1,	0,	1,	1,	0,	1,	1,	0,	1,	1,	1,	1,	1,	1,	1,	1,	0,	1,
1,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	1,
1,	0,	1,	1,	1,	0,	1,	1,	1,	0,	1,	1,	0,	1,	0,	1,	0,	1,	1,	0,	1,	1,	0,	1,	1,	1,	0,	1,
1,	0,	1,	5,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	1,
1,	0,	1,	1,	1,	0,	1,	1,	1,	0,	1,	1,	0,	1,	0,	1,	0,	1,	1,	0,	1,	1,	0,	1,	1,	1,	0,	1,
1,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	1,
1,	0,	1,	1,	1,	0,	1,	1,	1,	0,	1,	1,	0,	1,	0,	1,	0,	1,	1,	0,	1,	1,	0,	1,	1,	1,	0,	1,
1,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	1,
1,	0,	1,	0,	1,	0,	1,	1,	1,	0,	1,	1,	1,	1,	0,	1,	1,	1,	1,	0,	1,	1,	0,	1,	0,	1,	0,	1,
1,	0,	1,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	3,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	1,	0,	1,
1,	0,	1,	0,	1,	0,	1,	0,	1,	1,	1,	1,	1,	1,	4,	1,	1,	1,	1,	1,	0,	1,	0,	1,	0,	1,	0,	1,
1,	0,	1,	0,	1,	0,	1,	0,	1,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	1,	0,	1,	0,	1,	0,	1,	0,	1,
4,	0,	1,	5,	1,	0,	1,	0,	1,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	1,	0,	1,	0,	1,	0,	1,	0,	4,
1,	0,	1,	0,	1,	0,	1,	0,	1,	1,	1,	1,	1,	1,	4,	1,	1,	1,	1,	1,	0,	1,	0,	1,	0,	1,	0,	1,
1,	0,	1,	0,	1,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	1,	0,	1,	0,	1,
1,	0,	1,	0,	1,	0,	1,	0,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	0,	1,	0,	1,	0,	1,	0,	1,
1,	0,	1,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	1,	0,	1,
1,	0,	1,	0,	1,	0,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	0,	1,	0,	1,	0,	1,
1,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	1,
1,	0,	1,	1,	0,	1,	1,	0,	1,	1,	0,	1,	1,	1,	0,	1,	1,	0,	1,	1,	0,	1,	1,	0,	1,	1,	0,	1,
1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,
1,	0,	1,	1,	1,	0,	1,	1,	1,	1,	1,	1,	1,	1,	5,	1,	1,	1,	1,	1,	1,	1,	0,	1,	1,	1,	0,	1,
1,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	1,
1,	0,	1,	1,	1,	1,	1,	1,	1,	1,	1,	0,	1,	1,	0,	1,	1,	0,	1,	1,	1,	1,	1,	1,	1,	1,	0,	1,
1,	3,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	5,	1,
1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	4,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,
];
boards.push(level2);

let level3 = [
  1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,
1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	5,	0,	1,
1,	0,	1,	1,	1,	1,	1,	1,	1,	1,	1,	0,	1,	1,	0,	1,	1,	0,	1,	1,	1,	1,	1,	1,	1,	1,	0,	1,
1,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	1,
1,	0,	1,	1,	1,	0,	1,	1,	1,	0,	1,	1,	0,	1,	0,	1,	0,	1,	1,	0,	1,	1,	0,	1,	1,	1,	0,	1,
1,	0,	0,	5,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,
1,	0,	1,	1,	1,	0,	1,	1,	1,	0,	1,	1,	0,	1,	0,	1,	0,	1,	1,	0,	1,	1,	0,	1,	1,	1,	0,	1,
1,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	1,
1,	0,	1,	1,	1,	0,	1,	1,	1,	0,	1,	1,	0,	1,	0,	1,	0,	1,	1,	0,	1,	1,	0,	1,	1,	1,	0,	1,
1,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	5,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	1,
1,	0,	0,	0,	1,	0,	1,	1,	1,	0,	1,	1,	1,	1,	0,	1,	1,	1,	1,	0,	1,	1,	0,	1,	0,	0,	0,	1,
1,	0,	1,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	3,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	1,	0,	1,
1,	0,	1,	0,	1,	0,	1,	0,	1,	1,	0,	1,	1,	1,	4,	1,	1,	0,	1,	1,	0,	1,	0,	1,	0,	1,	0,	1,
1,	0,	1,	0,	1,	0,	1,	0,	0,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	0,	0,	1,	0,	1,	0,	1,	0,	1,
4,	0,	1,	5,	0,	0,	1,	0,	1,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	1,	0,	1,	0,	0,	0,	1,	0,	4,
1,	0,	1,	0,	1,	0,	1,	0,	1,	1,	0,	1,	1,	1,	4,	1,	1,	0,	1,	1,	0,	1,	0,	1,	0,	1,	0,	1,
1,	0,	1,	0,	1,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	1,	0,	1,	0,	1,
1,	0,	1,	0,	1,	0,	1,	0,	1,	1,	0,	1,	1,	1,	0,	1,	1,	1,	0,	1,	0,	1,	0,	1,	0,	1,	0,	1,
1,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	1,
1,	0,	1,	0,	1,	0,	1,	1,	1,	1,	0,	1,	1,	1,	0,	1,	1,	1,	0,	1,	1,	1,	0,	1,	0,	1,	0,	1,
1,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	1,
1,	0,	1,	1,	0,	1,	1,	0,	1,	1,	0,	1,	1,	1,	0,	1,	1,	0,	1,	1,	0,	1,	1,	0,	1,	1,	0,	1,
1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,
1,	0,	1,	1,	1,	0,	1,	1,	1,	1,	0,	1,	1,	1,	5,	1,	1,	0,	1,	1,	1,	1,	0,	1,	1,	1,	0,	1,
1,	0,	1,	5,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	5,	1,	0,	1,
1,	0,	1,	1,	1,	0,	1,	1,	1,	1,	1,	0,	1,	1,	0,	1,	1,	0,	1,	1,	1,	1,	0,	1,	1,	1,	0,	1,
1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	5,	1,
1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,
];
boards.push(level3);

export { boards };
