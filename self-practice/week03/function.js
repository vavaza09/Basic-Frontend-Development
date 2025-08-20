function sumNumber(...a){
    let result = 0
    for(i = 0; i < a.length; i++){
        result = result + a[i]
    }
    return result
} 

console.log(sumNumber(1, 2, 3, 4, 5, 6))

//2
const sum2 = () => a + b
//3
const sum3 = function () {
    return a + b
}

function operator(num1, num2, op){
    return op(num1, num2)
}

console.log(operator(5, 6, (a, b) => a + b))


function Test(x){
    return x
}

function Test2(x){
    return x + 50
}

console.log(Test(Test2)(4))

function doSomething(a, b, c){
    console.log(arguments[0])
    arguments[1]
    arguments[2]
    console.log(a, b, c)
}

doSomething(2, 3, 4)

function sum4([x1, x2], [y1]){
    return x1 + y1 + x2
}

console.log(sum4([4, 5], [3, 6]))