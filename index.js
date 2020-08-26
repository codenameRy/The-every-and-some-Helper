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

//Every and Some Syntax

var names = [
  "Alexandria",
  "Matthew",
  "Litty"
];

var everyNames = names.every((name) => {
  return name.length > 6;
})

console.log(everyNames)

var someNames = names.some((name) => {
  return name.length > 4;
})

console.log(someNames);

//Every and Some in Practice

function Field(value) {
  this.value = value;
}

Field.prototype.validate = function () {
  return this.value.length > 0;
}
var username = new Field("2cool");
var password = new Field("my_password");
var birthdate = new Field("12/12/2020")

// console.log(username.validate());

var fields = [ username, password, birthdate ];
var newFields = fields.every((field) => {
  return field.validate
})

if (newFields) {
  //allow user to submit
} else {
  //show an error
}

console.log(newFields + " Valid Form")

//Challenge 1 - Find Submitted Users

//Given an array of users, return 'true' if every user has submitted a request for

var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];

var hasSubmitted = users.every((user) => {
  return user.hasSubmitted === true;
})

console.log(hasSubmitted)

//Challenge 2 - In Progress Network Requests

//Given an array of network objects representing network requests, assign the boolean 'true' to te variable 'inProgress' if any network request has a status of 'pending'

var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

var inProgress = requests.some((request) => {
  return request.status = 'pending';
})

console.log(inProgress)