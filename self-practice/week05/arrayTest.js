console.log(Array.isArray([]))
console.log(Array.isArray(new Array(2)))
console.log(Array.isArray("[]"))
console.log(Array.isArray(false))
console.log(Array.isArray({}))

const num1 = [1, 3, 5]
const num2 = [2, 4 ,6]

console.log(num1.toString())
console.log(num1.toString())

const array14 = [1, 30, 4, 21, 100000]
array14.sort((a, b) => b - a)
console.log(array14)

const students = [
    { id: 66500102, name: "Suda", gpa: 2.5},
    { id: 66500555, name: "ada", gpa: 2.8},
    { id: 66500589, name: "pornchai", gpa: 3.25},
    { id: 66500102, name: "Pornsak", gpa: 3.8}
]

function sortStudentByName(obj){
    return obj.sort((a, b) => a.name.toUpperCase().charCodeAt(0) - b.name.toUpperCase().charCodeAt(0))
}

console.log("sort: ", sortStudentByName(students))