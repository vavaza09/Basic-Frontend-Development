//1. annonymous arrow function
words = ["apple", "banana", "oragne"]
const startAWords = words.filter(word => word.startsWith('a'));
console.log(startAWords);
//2. annoymous function declarations
const startAWords2 = words.filter(function (word) {
    return word.startsWith("a")
});
console.log(startAWords2);

//3. named arrow function
const checkStartA = (word) => word.startsWith('a');
const startAwords3 = words.filter(checkStartA);
console.log(startAwords3);

//4. named function declaretion
const checkStartA2 = function (word) {
    return word.startsWith('a');
};
const startAwords4 = words.filter(checkStartA2);
console.log(startAwords4);

//Array Iteator Methods
wordStartWithA = []
const startAword5 = words.forEach(word => {
    if(word.startsWith('a')) wordStartWithA.push(word);
});
console.log(wordStartWithA)

const employees = [
    {id: 1001, firstname: 'Somchai', lastname: 'Jaidee'},
    {id: 1002, firstname: 'Pornchai', lastname: 'Deejai'},
    {id: 1005, firstname: 'Suda', lastname: 'Rakdee'}
];
const FullnameArr = employees.map(employee => employee.firstname.toUpperCase() + ' ' + employee.lastname.toUpperCase());
console.log(FullnameArr);
const JaiArr = employees.map(employee => employee.firstname.toUpperCase() + ' ' + employee.lastname.toUpperCase()).filter(fullname => fullname.includes('JAI'))
console.log(JaiArr)

const carts = [{productId: 1002, price: 10, amount: 5},
    {productId: 2005, price: 100, amount: 2},
    {productId: 5001, price: 5, amount: 4}
]
const NetPrice = carts.reduce((totalPrice, currentProduct) => 
    totalPrice + currentProduct.price * currentProduct.amount, 0) * 1.07;
console.log(NetPrice.toFixed(2))
//Stack and queue Methods
//Subarray Methods
    // splice
const words2 = ['apple', 'orange', 'banana']
words2.splice(2, 0, 'cherry', 'berry')
console.log(words2)
words2.splice(2, 2)
console.log(words2)
    //replace with splice
words2.splice(2, 0, 'mango')
console.log(words2)
    //slice
const word3 = ['apple', 'orange', 'banana','cherry', 'berry']
console.log(word3.slice(1))
console.log(word3.slice(0, 3))
console.log(word3.slice(2))
console.log(word3.slice(-3))