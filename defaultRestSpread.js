"use strict"

function getKostasFamilyMemberFullName(name, surname='Tsolakis') {
  console.log(`${name} ${surname}`);
}

getKostasFamilyMemberFullName('Eugene');

function spreadVariables(x, ...y) {
  return x * y.length;
}

console.log(spreadVariables(3, 'hello', true));

function spread(x, y, z) {
  return x + y + z;
}

console.log(spread(...[1,2,3]));
