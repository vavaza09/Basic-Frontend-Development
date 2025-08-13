//key ซ้ำได้แต่ Value ที่ได้จะเป็นตัวสุดท้าย
// const book = {name: "INT191", name: 'INT151'}
// console.log(book)

const student = {name: 'Thanasorn', address: {baanNumber: 37, provide: 'Chaigmai', postNumber: 50200}}
console.log(student)

function Pet(name, color, type){
    this.name = name
    this.color =  color
    this.type = type
}
const nod = new Pet('nod', 'black', 'dog')

class Hero{
    constructor(name, power, age){
            this.name = name;
            this.power = power;
            this.age = age;
    }
}

const Siriyagone = new Hero('tan', 'eat too much', 18)
console.log(Siriyagone)

//4. using Object.create(existing object)
const SiriyagoneProfile= Object.create(Siriyagone)
console.log(SiriyagoneProfile.name)
SiriyagoneProfile.id = 67130500051
console.log(SiriyagoneProfile)

//loop with object
const book = {name: 'nod', author: 'vava', pubilsher: 'tan' }
for (const key in book){
    console.log(`${key}: ${book[key]}`)
}

book2 = book // "alias" ใน memory หนึ่งช่องมีการอ้างถึงมากว่า 1 ตัวแปร
console.log(book2 === book)

function changeName(obj){
    obj.name = 'Thanasorn'
}

function isHumandIdEqual(obj1, obj2){
    return obj1.id === obj2.id
}

const human = {id: 1, name: "nod", age: 18}
const human2 = {id: 1, name: "nod", age: 18}
changeName(human)
console.log(human.name)
console.log(isHumandIdEqual(human, human2))
///
console.log(Object.keys(human))
console.log(JSON.stringify(human))

// object destructoring
const std1 = { id: 1, name: "Thanasorn", adress: { no: 111, city: "Bangkok"}}
let { name: fullname, id: stdId, adress: fulladdress} = std1
let { city: myAddress } = fulladdress
console.log(myAddress)

