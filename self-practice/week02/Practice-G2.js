function calculateTotalPages(items, itemsPerPage){
    if (items < 0 || itemsPerPage <= 0){
        throw Error('items per page must be greater than zero')
    }
    return Math.ceil(items / itemsPerPage)
}

console.log(calculateTotalPages(10,3))
console.log(calculateTotalPages(25,5))
console.log(calculateTotalPages(0,5))
console.log(calculateTotalPages(10,10))
console.log(calculateTotalPages(10,0))