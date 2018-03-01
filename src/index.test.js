import {expect} from 'chai'
import vocaloidNames from '.'

describe('vocaloid-names', () => {
  it('should have a list of all available names', () => {
    expect(vocaloidNames.all).to.satisfy(isArrayOfStrings)
  })

  it('should allow me to get a random name from the list', () => {
    expect(vocaloidNames.random()).to.satisfy(isIncludedIn(vocaloidNames.all))
  })
})

function isArrayOfStrings(array) {
  return array.every(i => typeof i === 'string')
}

function isIncludedIn(array) {
  return item => array.includes(item)
}
