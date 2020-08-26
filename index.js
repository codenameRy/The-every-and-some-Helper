//A Little Every and A Lot of Some

//For Loop
var computers = [
  { name: 'Apple', ram: 24 },
  { name: 'Compaq', ram: 4 },
  { name: 'Acer', ram: 32 }
];

var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

for (let i = 0; i < computers.length; i++) {
  var computer = computers[i];

  if ( computer.ram < 16) {
    allComputersCanRunProgram = false;
  } else {
    onlySomeComputersCanRunProgram = true;
  }
}

console.log(allComputersCanRunProgram);
console.log(onlySomeComputersCanRunProgram);

//Refractor

var everyComputerCheck = computers.every((computer) => {
  return computer.ram > 16;
})

console.log(everyComputerCheck)

var someComputerCheck = computers.some((computer) => {
  return computer.ram > 16;
})

console.log(someComputerCheck);
