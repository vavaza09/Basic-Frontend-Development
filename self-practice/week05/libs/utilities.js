//utilities.js
function echo(msg) {
  return msg
}
function getLength(str) {
  return str.length
}
const GPAAverage = 3.0
class Book {
  constructor(isbn) {
    this.isbn = isbn
  }
}

export { getLength as default, echo, Book as BookClass, GPAAverage}
//module.exports = { echo, getLength, GPA: GPAAverage, Book }
//object syntax //{echo:echo, getLength:getLength, GPA: GPAAverage}

//test.js
const { echo, getLength, GPA, Book } = require("./libs/utilities.js")
console.log(echo("Today is a present"))
console.log(getLength("JS Beginner"))
console.log(GPA)
const b1 = new Book(1234)
console.log(b1)
 