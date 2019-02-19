// Code your solution in this file.
function lowerCaseDrivers(array) {
  return array.map(function(i) {
    return i.toLowerCase();
  });
}

function nameToAttributes(array) {
  return array.map(function(i) {
    const nameOne = array.firstName = i.split(" ")[0];
    const nameTwo = array.lastName = i.split(" ")[1];
    return { firstName: nameOne, lastName: nameTwo };
  });
}

function attributesToPhrase(array) {
  return array.map(function(i) {
    return `${i.name} is from ${i.hometown}`;
  });
}
