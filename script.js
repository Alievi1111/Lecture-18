// მიზანი: გამარჯობის თქმა

// function sayHello() {
//   alert("Hello world");
// }

// function sayHelloToUser() {
//   let userName = prompt("შეიყვანეთ თქვენი სახელი");
//   console.log(`hello ${userName}`);
// }

// function squareNumberOne() {
//   let numb1 = 10;
// }

// function squareNumberTwo() {

// }

// function plusNumber() {
//   let numb1 = 4;
//   let numb2 = 8;

//   return numb1 + numb2;
// }
// console.log(plusNumber());
// console.log(plusNumber());

// მიზანი - დაგვიბრუნოს 5-ი პიროვნების საშუალო ქულა

function avarageNumber(numb1, numb2, numb3, numb4, numb5) {
  let sumNumber = numb1 + numb2 + numb3 + numb4 + numb5;

  let average = sumNumber / 5;

  return average;
}

let groupOne = avarageNumber(4, 5, 1, 0, 10);
let grouptwo = avarageNumber(10, 3, 2, 1, 6);

if (groupOne > grouptwo) {
  console.log("პირველი ჯგუპი წავიდეს ექსკურსიაზე");
} else if (groupOne < grouptwo) {
  console.log("პირველი ჯგუპი წავიდეს ექსკურსიაზე");
} else {
  console.log("ჩავატაროთ ახალი გამოცდა");
}
