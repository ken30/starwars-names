import uniqueRandomArray from 'unique-random-array'
const vocaloidNames = require('./vocaloid-names.json')

const mainExport = {
  all: vocaloidNames,
  random: uniqueRandomArray(vocaloidNames),
}

export default mainExport
module.exports = mainExport // for CommonJS compatibility
