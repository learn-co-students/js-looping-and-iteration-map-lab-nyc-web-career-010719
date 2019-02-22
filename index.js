function lowerCaseDrivers (collection) {
  return collection.map( (s) => {
    return s.toLowerCase()
  })
}

function nameToAttributes (collection) {
  return collection.map( (s) => {
    const driverFirst = s.split(' ')[0]
    const driverLast = s.split(' ')[1]
    return {firstName: driverFirst, lastName: driverLast}
  })
}

function attributesToPhrase (collection) {
  return collection.map( (obj) => {//attributes 'name' and 'hometown'
    return `${obj.name} is from ${obj.hometown}`
  })
}
