const _ = require('lodash')

const generateTiles = () => {
  const tiles = []

  const tileCount = {
    A: 9,
    B: 2,
    C: 2,
    D: 4,
    E: 12,
    F: 2,
    G: 3,
    H: 2,
    I: 9,
    J: 1,
    K: 1,
    L: 4,
    M: 2,
    N: 6,
    O: 8,
    P: 2,
    Q: 1,
    R: 6,
    S: 4,
    T: 6,
    U: 4,
    V: 2,
    W: 2,
    X: 1,
    Y: 2,
    Z: 1
  }

  for (const letter in tileCount) {
    _.times(tileCount[letter], () => tiles.push(letter))
  }

  return tiles
}

const hasVowels = (grid) => {
  return _.difference(grid, 'AEIOU'.split('')).length < grid.length
}

const generateGrid = () => {
  const tiles = generateTiles()
  const grid = Array(8).fill(undefined).map(() => _.sample(tiles))
  if (!hasVowels(grid)) { return generateGrid() }
  return _.shuffle(grid)
}

module.exports = generateGrid
