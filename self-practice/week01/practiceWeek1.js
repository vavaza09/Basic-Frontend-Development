// ลองทำ filter Object 

function filterObject(object, func){
  // ใช้ .fromEntries แปลง arr ที่ผ่าน filter มาแล้ว
  return Object.fromEntries(
    Object.entries(object).filter(([key, value]) => func(value))//แปลง object เป็น arr และ Desturctor เป็น key, value จากนั้นเขา .filter ของ arr
  );
}

console.log(filterObject({a: 1, b: 5, c: 2}, value => value > 2));