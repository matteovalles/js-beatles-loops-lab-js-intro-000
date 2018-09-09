function theBeatlesPlay(person, instrument) {
  var arr = []
  for (let i = 0; i < person.length; i++) {
    arr.push(`${person[i]} plays ${instrument[i]}`)
  }
  return arr
}

function johnLennonFacts(array) {
  var i = 0
  while (i < array.length) {
    array[i] = `${array[i]}!!!`
  }
  return array
}
