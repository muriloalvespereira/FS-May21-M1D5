/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/
let area = function(l1, l2){
    return l1*l2
}
console.log(area(3,7))
/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/
let crazySum = function(a, b){
    if (a !== b){
        return a + b
    } else {
        return (a + b) * 3
    }
}

console.log(crazySum(2, 2))
/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/
const crazyDiff = (num1) => num1 > 19 ? Math.abs(num1-19)*3 : Math.abs (num1 - 19);
console.log(`Exercise3 ${crazyDiff(7)}`)

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/
function boundary(n){
    if (n>20 && n<=100 || n === 400){
        return true
    } else{
        return false
    }
}
    console.log(`Exercise 4 ${boundary(33)}`)

const boundary2 = (n) => (n>20 && n<=100 || n === 400)? true:false;
console.log(`Exercise 4 another way ${boundary2(17)}`)
/* WRITE YOUR CODE HERE */

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/
function strivify(a){
    if (a.startsWith ("Strive")){
        return a
    } else{
        return " Strive " + a
    }
}
console.log(strivify("Hello"))
/* WRITE YOUR CODE HERE */

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/
function check3and7(positiveNumber){
    if (positiveNumber%3===0 || positiveNumber%7===0){
    return true
}else{
    return false
}
}
console.log(check3and7(5))
/* WRITE YOUR CODE HERE */

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

function reverse(s) {
    let o = '';
    for (let i = s.length - 1; i >= 0; i--)
      o += s[i];
    return o;
  }
  console.log(reverse("Strive"))
/* WRITE YOUR CODE HERE */

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/
let firstOne
let secondOne
function upperFirst (changeFirst){
    if (/\s/g.test(changeFirst)){
        let arrayUpper = changeFirst.split(' ');
        firstOne = arrayUpper[0];
        secondOne = arrayUpper[1];
        return (firstOne[0].toUpperCase() + firstOne.slice(1)) + " " +
        secondOne[0].toUpperCase() + secondOne.slice(1);
       
    }
}
console.log(upperFirst("murilo alves"))


function upperFirst1(string){
    let separateWord = string.toLowerCase().split(' ');
    for (let i = 0; i < separateWord.length; i++) {
       separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
       separateWord[i].slice(1);
    }
    return separateWord.join(' ');
}
console.log(upperFirst1("jim-bim john's mcdonald is a test for exercise"))


/* WRITE YOUR CODE HERE */


/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/
function cutString(givenString){
    let splitWord = givenString.split('');
    splitWord.shift();
    splitWord.pop();
    return splitWord.join('');
}
console.log(cutString("Vamos"))
/* WRITE YOUR CODE HERE */

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/
function giveMeRandom(numberRandom) {
    let array = [];
    for (let i = 0; i <= numberRandom; i++) {
      array.push(Math.floor(Math.random() * 10));
    }
    return array;
  }
  console.log(giveMeRandom(8));

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/