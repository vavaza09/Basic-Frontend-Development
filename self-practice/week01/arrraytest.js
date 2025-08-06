// -------------------A-----------------
// 1. create array with many data types
const arr = [1, "2", true]
// 2. print array size
console.log(arr.length)
// 3. print the first item
console.log(arr[0])
// 4. print the last item
console.log(arr[arr.length - 1])
// 5. add two more item at the end of array with object and array data types respectively
arr[arr.length] = [1, 2, 3]
arr[arr.length] = {'name': 'vava', 'age': 19}
console.log(arr)
// 6. print all array
for(let i = 0; i < arr.length; i++){
    console.log(`${i + 1}.`,arr[i])
}

// 7. shrink array
arr.shift()
console.log(arr)

// 8. spread string
const str1 = "HelloSIT"
const arr2 = [...str1]
console.log(arr2)

// 9. create array with Constructor

let conarr1 = new Array()
let conarr2 = new Array(10)
let conarr3 = new Array(1, '2', true)
console.log(conarr1, 'array size:', conarr1.length)
console.log(conarr2, 'array size:', conarr2.length)
console.log(conarr3, 'array size:', conarr3.length)

//10. create array with Array.of() of create Array wiht one element that Constructor can dont  do
const ofarr1 = Array.of(10)
console.log(ofarr1, 'array size:', ofarr1.length)
//11. create array with Array.from() of copy Array or use like Arrray.of()
const fromarr1 = Array.from(ofarr1)
console.log(ofarr1, 'array size:', ofarr1.length)

//12 . delete array but not shrink

//13. Array Destructuring assignment (',' for skip sequence, '...' rest operator for group element)
const [a, b] = [5, 10]
console.log('a:', a, 'b:', b)

const [, , x , , ...y] = [5, 10, 15, 20, 25]
console.log('x:', x, 'y:', y)
