// FUNCTIONS SECTION

function minutesSeconds(minutes) {
    // Write a function that receives an integer as an argument (minutes)
    // and return the convertion to seconds
    // ex:
    // minutesSeconds(5) => 300
    // minutesSeconds(3) => 180
    // Code:
    
}

function sameLength(string1, string2) {
    // Write a function that receives two strings as a arguments (string1, string2)
    // returns true if the strings have the same length, return false if not
    // ex:
    // sameLength('Cintia', 'Rafael') => true
    // sameLength('Vanesa', 'Chayanne') => false
    // Code:

}

function sayHello(name, age) {
    // Write a function that receives a string (name) and an integer (age)
    // return a string including that name and the age
    // ex:
    // sayHello('Laureano', 22) => 'Hi, my name is Laureano. I am 22 years old.'
    // sayHello('Ramiro', 28) => 'Hi, my name is Ramiro. I am 28 years old.'
    // INTENTEN HACERLO CON BACKTICKS
    // Code:

}

function isEven(number) {
    // Write a function that receives a number as an argument (number)
    // returns true if the number is even, return false if not
    // ex:
    // isEven(20) => true
    // isEven(21) => false
    // Code:

}
  
function isOdd(number) {
    // Write a function that receives a number as an argument (number)
    // returns true if the number is odd, return false if not
    // ex:
    // isOdd(20) => false
    // isOdd(21) => true
    // Code:

}

function arraySum(array) {
    // Write a function that receives an array of integers as an argument (array)
    // and return the sum of all the elements
    // ex:
    // arraySum([5, 2, 4, 5]) => 16
    // arraySum([3, 4, 1]) => 8
    // Code:
    // NO HAGAN TRAMPA, NO VALE USAR REDUCE

}

function findInArray(array, number) {
    // Write a function that receives an array of integers and a number as arguments (array, number)
    // return true if the number is in the array, return false if not
    // ex:
    // findInArray([5, 2, 4, 5], 2) => true
    // findInArray([3, 4, 1], 2) => false
    // Code:

}

function average(array) {
    // Write a function that receives an array of integers as an argument (array)
    // and return the average of them
    // ex:
    // average([1,2,3]) => 2
    // average([10, 20, 3]) => 11
    // Code:

}

function anualSalary(employees, name) {
    // Write a function that receives an array with object, each one with information about the employees
    // the funciton also receives a string (name) with the name of an employee
    // return the salary of that employee
    // ex:
    // var employees = [{
    //    name: 'Simon',
    //    salary: 1000,.
    //  },
    //  {
    //    name: 'Camila',
    //    salary: 4000,
    //  },
    //  {
    //    name: 'Sole',
    //    salary: 500,
    //  }
    // ];
    // anualSalary(employees, 'Simon'); => 12000
    // anualSalary(employees, 'Sole;); => 6000
    // Code:

}

function randomNumbers(number) {
    // Write a function that receives an integer (between 1 and 99) as an argument (number)
    // return an array of random integers (do not repeat numbers) with "number" elements inside
    // ex:
    // randomNumbers(5); => [23, 11, 4, 76, 30]
    // randomNumbers(3); => [3, 54, 18]
    // Code:

}

function triangleArea(base, height) {
    // Write a function that receives a number for the height (height) and another for the base (base)
    // return the area of a triangle with that sizes
    // ex:
    // triangleArea(5, 10); => 25
    // triangleArea(3, 20); => 30

}

function isVowel(letter) {
    // Write a function that receives a letter (letter) as an argument
    // if the letter is a vowel, should return "Is vowel", if not it should return "Is not vowel"
    // In case the argument is not a string or if it's a string with more than one letter
    // return "Incorrect data"
    // ex:
    // isVowel('a') => 'Is vowel';
    // isVowel(6) => 'Is not vowel';

}

function findTheWord(string) {
    // Write a function that receives a string (string) and returns true if it finds the word "viseven" inside.
    // if not, returns false.
    // ex:
    // findTheWord('welcome to viseven') => true;
    // findTheWord('hi, my name is Agustin') => false;
    // Code:

}

function createObject(name, surname, age, city) {
    // Write a function that receives four arguments (name, surname, age and city)
    // return an object containing that arguments
    // ex:
    // createObject('Carolina', 'Ulla', 27, 'Cordoba') => {
    //     name: 'Carolina',
    //     surname: 'Ulla',
    //     age: 27,
    //     city: 'Cordoba'
    // }
    // Code:

}

function highestRating(arr) {
    // Write a function that receives an array (arr) with information of players as an argument
    // return a string with the name of the player with highest rating and the rating
    // ex:
    // let players = [
    //   { name: 'Cintia', rating: 2000 },
    //   { name: 'Rafael', rating: 3000 },
    //   { name: 'Agustin', rating: 1200 },
    //   { name: 'Soledad', rating: 9999 },
    // ]
    //
    // highestRating(players) => 'The best player is Soledad, with 9999 points.'
    // Code:

}

function objectKeys(obj) {
    // Write a function that receives an object (obj) as an argument
    // return an array with a list of all the properties in the object
    // ex:
    // let employee = {
    //   name: 'Cinthia',
    //   age: 32,
    //   city: 'CABA',
    //   company: 'Viseven'
    // }
    //
    // objectKeys(employee) => ['name', 'age', 'city', 'company']
    // Code:

}

function showRespectToRiquelme(arr) {
    // Write a function that receives an array (arr) of objects as an argument
    // look for Riquelme and add him a property showing your respect
    // return the same arr with the change
    // ex:
    // let people = [
    //   { name: 'Cintia' },
    //   { name: 'Rafael' },
    //   { name: 'Agustin' },
    //   { name: 'Soledad'},
    //   { name: 'Riquelme'},
    //   { name: 'Anatolii'},
    //   { name: 'Camila'},
    //   { name: 'Simon'},
    // ]
    //
    // showRespectToRiquelme(people) => [
    //   { name: 'Cintia' },
    //   { name: 'Rafael' },
    //   { name: 'Agustin' },
    //   { name: 'Soledad'},
    //   { name: 'Riquelme', respect: 'You are the best' },
    //   { name: 'Anatolii'},
    //   { name: 'Camila'},
    //   { name: 'Simon'},
    // ]
    // Code:
    
}

// ---------------------------------------------------------------------------------------------------------------
// do not touch

module.exports = {
    minutesSeconds,
    sameLength,
    sayHello,
    isEven,
    isOdd,
    arraySum,
    findInArray,
    average,
    findTheWord,
    anualSalary,
    randomNumbers,
    triangleArea,
    isVowel,
    createObject,
    highestRating,
    objectKeys,
    showRespectToRiquelme
};
