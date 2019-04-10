const select = array => {
  const more = (a, b) => a < b

  for(let i = 0; i < array.length; i++) {
    for(let j = i + 1; j < array.length; j++) {

      if(more(array[j], array[i])) {
        let temp = array[j]
        array[j] = array[i]
        array[i] = temp
      }
    }

  }
  return array
}

const insert = array => {
  const more = (a, b) => a < b

  for(let i = 1; i < array.length; i++) {
    let temp = array[i]
    let j = i - 1

    while(more(temp, array[j]) && j >= 0) {
      array[j + 1] = array[j]
      j--
    }

    array[j + 1] = temp
  }

  return array
}

const beforeSelect = Date.now()
const selected = select([2, 5, 4, 1, 3, 6, 8, 7, 9])
const afterSelect = Date.now()

const beforeInsert = Date.now()
const inserted = insert([2, 5, 4, 1, 3, 6, 8, 7, 9])
const afterInsert = Date.now()

const sorted = [2, 5, 4, 1, 3, 6, 8, 7, 9].sort((a, b) => a > b)

console.log(sorted)
console.log(selected, (afterSelect - beforeSelect) + ' ms')
console.log(inserted, (afterInsert - beforeInsert) + ' ms')