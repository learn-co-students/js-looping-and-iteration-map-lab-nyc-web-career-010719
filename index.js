// Code your solution in this file.
function lowerCaseDrivers(drivers)
{
  const lower_drivers = drivers.map(name=>name.toLowerCase())
  return lower_drivers
}
function nameToAttributes(drivers)
{
  const full_names = drivers.map(item => {
    const container = {};
    console.log(item)
    container.firstName = item.split(" ")[0];
    container.lastName = item.split(" ")[1];
    return container;
  })
  return full_names
};
function attributesToPhrase(drivers)
{
  const phrases = drivers.map(item => {
    let str = `${item.name} is from ${item.hometown}`
    return str;
  })
  return phrases

};
