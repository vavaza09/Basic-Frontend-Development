const studentScores = [
    { name: 'Alice', score: 85},
    { name: 'Bob', score: 92},
    { name: 'Charlie', score: 68},
    { name: 'David', score: 55},
    { name: 'Eve', score: 78}
];

// const passingNames = 
function getPassingName(arr){
    return passingNames = arr.filter(student => student.score >= 70).map(student => student.name.toUpperCase());
}

getPassingName(studentScores);
console.log(passingNames)
// output should be: ["ALICE", "BOB", "EVE" ]