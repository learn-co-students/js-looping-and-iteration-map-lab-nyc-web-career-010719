// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return drivers.map(function(singleDriver){
    return singleDriver.toLowerCase()
  })
}

function nameToAttributes(drivers) {
  return drivers.map(function(driver){
    const firstName = driver.split(' ')[0];
    const lastName = driver.split(' ')[1];
    return {firstName: firstName, lastName: lastName}
  })
}

function attributesToPhrase(drivers){
  return drivers.map(function(driverInfo){
    return `${driverInfo.name} is from ${driverInfo.hometown}`
  })
}
