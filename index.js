// Code your solution in this file.
function lowerCaseDrivers(array) {
  return array.map(function(element) {
    return element.toLowerCase();
  });
}

function nameToAttributes(array) {
  return array.map(function(element){
    const fName = element.split(' ')[0];
    const lName = element.split(' ')[1];
    return {firstName: fName, lastName: lName};
  });
}

function attributesToPhrase(array) {
  return array.map(function(element){
    return `${element[`name`]} is from ${element[`hometown`]}`;
  });
}
