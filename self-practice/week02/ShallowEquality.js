//comparision object with [key]
function comparisoinObject(obj1, obj2){
  //ใช้ Object.entries เพื่อแยก key และ value ออกมาแล้วนำไปเช็คโดยใช้ every โดยเช็คจาก key ว่ามี vaule เดียวกันไหม
  return Object.entries(obj1).every(([key, value]) => obj2[key] === value);
}

obj1 = {id: 1, fullname: "obj1", age: 19}
obj2 = {ids: 1, fullname: "obj1", age: 19}

console.log(comparisoinObject(obj1, obj2));