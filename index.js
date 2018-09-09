function theBeatlesPlay(person, instrument) {
  var arr = []
  for (let i = 0, i < person.length, i++) {
    arr.push(`${person} plays ${instrument}`)
  }
  return arr
}