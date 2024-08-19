//*********************************************************************//

//Lab 1
// class Calculator {
//   constructor(_value = 0) {
//     this.value = _value;
//   }
//   add(num){
//     this.value += num
//     return this.value
//   }
//   subtract(num) {
//     this.value -= num
//     return this.value
//   }
//   multiply(num) {
//     this.value *= num
//     return this.value 
//   }
//   divide(num) {
//     this.value /= num
//     return this.value
//   }
//   show(){
//     console.log(this.value)
//   } 
// }

// let a = new Calculator(10)
// a.add(5)
// a.show()


// //Lab 2
// class Sale{
//   constructor(name, amount, price){
//     this.name = name
//     this.amount = amount
//     this.price = price
//   }
// calc() {
//   return this.amount*this.price
// }
// }

// class Beverage extends Sale{
//   constructor(name,amount,price) { 
//     super(name,amount, price) 
//     // this.amount = amount
//     // this.price = price
//     }
// }

// let beverage = new Beverage ( 3, 19)
// console.log(beverage)


//************************************************************************ */


//Lab 1   ***** isArray *****

// let arr =[1,2,3]
// let notArr = {}
// function checkArr(arr){
//   return Array.isArray(arr)
// }
// console.log(checkArr(arr))
// console.log(checkArr(notArr))



//Lab 1    ****Object***** ให้คำนวณผลรวมของ salaries ใน object โดยใช้ Object.keys, Object.values
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };

// let result = Object.values(salaries).reduce((prev,curr)=> prev+curr,0)
// console.log(result)


// Lab2 ให้เขียนฟังก์ชัน checkEmptyObj(obj) เพื่อเช็คว่า obj เป็น object ว่างหรือไม่ 

// function checkEmptyObj(obj){
//     return Object.values(obj)== 0
//   }


// console.log(checkEmptyObj({1 : "a"}))




// let func = (...rest) => {
//   console.log(rest[0])
//   console.log(rest[1])
//   console.log(rest[2])
//   console.log(rest[3])
// }
// func(1, 'Hello', 'Codecamp', 4, 5, 6, 7, 8, 9)
// function sum(...args) { // args is the name for the array
//   let result = 0;
//   for (let arg of args) result += arg;
//   return result;
// }
// console.log(sum(1)); // 1
// console.log(sum(1, 2)); // 3
// console.log(sum(1, 2, 3)); // 6


// function showName(firstname, lastname, ...titles){
//   console.log(firstname+ ' '+ lastname)
//   console.log(titles[0])
//   console.log(titles[1])
//   console.log(titles.length)
// }

// showName('Julius', 'Caesar', 'Consul', 'Imperator','aaa');





//**************** Rest and Spread operator *************************//
//Lab1 จงเขียนฟังก์ชันหาค่าผลคูณของตัวเลข โดยพารามิเตอร์ของฟังก์ชันสามารถรับตัวเลขได้ไม่จำกัด
// function multiply(...num) {
//   let result = 1
//   for (let i of num){
//     result *= i
//   } 
//   return result
// }
// console.log(multiply(1,2,3,4))



//Lab 2 จงเขียนฟังก์ชัน filterOutOdds โดยพารามิเตอร์ของฟังก์ชันสามารถรับตัวเลขได้ไม่จำกัด และให้ return ค่าเป็น array ของเลขที่เป็นเลขคู่
// function filterOutOdds (...num){
//   let result = []
//   for (i of num){
//     i%2 == 0? result.push(i) : '';
//   }
//   return result
// }
// console.log(filterOutOdds(1, 2, 3, 4))



//Lab 3 จงเขียนฟังก์ชัน mergeObjects โดยพารามิเตอร์ของฟังก์ชันสามารถรับ Object ได้ไม่จำกัด และให้ return ค่าเป็น Object ที่เกิดจาก Object ในพารามิเตอร์มา merge กัน
// function mergeObjects(...objects) {
//   return objects.reduce((prev, curr) => {
//     return { ...prev, ...currej };
//   }, {});
// }

// console.log(mergeObjects({name : 'aaa', tel: 22222},{age : 22}))


//Lab 4 
// const nums1 = [1, -2, 3, 4];
// const nums2 = [8, 3, -8, 1];


// //จงรวม nums1 และ num2 เข้าด้วยกัน
// let result1 =[...nums1, ...nums2]
// console.log(result1)

// //จงสร้าง array ที่ได้จากการนำ nums1 และ nums2 มารวมกัน แต่ให้เพิ่ม 5 เข้าไปก่อน nums1 และเพิ่ม -6, -1 เข้าไประหว่าง nums1 กับ nums2
// let result2 = [5, ...nums1, -6, -1, ...nums2]
// console.log(result2)

// //หาผลรวมของทุก element ใน Array ที่ได้
// let result3 = result2.reduce((p,c)=>p+c,0)
// console.log('Sum total = ' +result3)



//Lab 5
//จงเขียนฟังก์ชันที่ใช้คุณสมบัติของ Spread operator เพื่อรับค่า array1
//แล้วคืนค่าเป็น array ที่มีการเปลี่ยนแปลงค่าของ index ที่ 3 ให้มีค่าเท่ากับ ค่าเดิมยกกำลัง 2 โดยที่ array1 ไม่เกิดการเปลี่ยนแปลง


// let editArr = (arr) =>{
//   let newArr =[...arr]
//   newArr[3] = newArr[3]**2
//   return newArr
// }

// console.log(editArr([1,2,3,4,5,6]))



//Lab6 จงเขียนฟังก์ชันที่รับค่า ชื่อ นามสกุล และ งานอดิเรก ซึ่งงานอดิเรกอาจมี 1 หรือมากกว่า 1 ก็ได้ แล้วคืนค่าเป็น ชื่อ, นามสกุล, งานอดิเรก และจำนวนงานอดิเรก โดยใช้คุณสมบัติของ spread parameter
// function handlePerson(name, lname, ...hobbies) {
//   console.log(hobbies)
//   return [name, lname, ...hobbies, hobbies.length]

// }

// let result = handlePerson('nut', 'non', 'HTML','JS','CSS','React')
// console.log(result)



//Lab7 จงเขียนฟังก์ชัน doubleAndReturnArgs โดยรับพารามิเตอร์มาเป็น Array และตัวเลขกี่ตัวก็ได้ และ return ค่าเป็น Array ที่ประกอบด้วยค่าเดิมในพารามิเตอร์ที่เป็น Array และค่าพารามิเตอร์ที่เป็นตัวเลขคูณสอง
//doubleAndReturnArgs([1, 2, 3], 4, 4);
// expexted result: [1, 2, 3, 8, 8]
//doubleAndReturnArgs([2], 10, 4);
// expexted result: [2, 20, 8]

// let doubleArr = (arr, ...num) => {
//   for (let i in num){
//     num[i] *= 2
//   }
//   return arr.concat(...num)
// }

// let result = doubleArr([2],10,4)
// console.log(result)


//Lab 9 จงเขียนฟังก์ชัน cloneArray โดยรับพารามิเตอร์มาเป็น Array และ return ค่าเป็น Array ที่มี element เหมือนกับพารามิเตอร์ที่รับเข้ามาทุกตัว

// let cloneArray = (arr) => {
//   let result = [...arr]
//   return result
// }

// let a = [1,2,3,4,5,6]
// console.log(cloneArray(a))



//Lab 10 จงเขียนฟังก์ชัน cloneObject โดยรับพารามิเตอร์มาเป็น Object และ return ค่าเป็น Object ที่มี key - value เหมือนกับพารามิเตอร์ที่รับเข้ามาทุกตัว

// let cloneObject = (obj) => {
//   let result = {...obj}
//   return result
// }

// let a = {name :'a', age: 20}
// console.log(cloneObject(a))




//********** Lab Destructuring **********/.

//Lab11
// let [first, second, third] = ['Maya', 'Marisa', 'Chi'];
// console.log(first); // Maya
// console.log(second); // Marisa
// console.log(third); // Chi



//Lab 12
// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//   'Raindrops on roses',
//   'whiskers on kittens',
//   'Bright copper kettles',
//   'warm woolen mittens',
// ];
// console.log(raindrops); // Raindrops on roses
// console.log(whiskers); // whiskers on kittens
// console.log(aFewOfMyFavoriteThings); // ['Bright copper kettles','warm woolen mittens' ]



//Lab 13
// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]];
// console.log(numbers); // [10,30,20]



//Lab14
// let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// let { numPlanets, yearNeptuneDiscovered } = facts;
// console.log(numPlanets); // 8
// console.log(yearNeptuneDiscovered); // 1846


//Lab15
// let planetFacts = {
//   numPlanets: 8,
//   yearNeptuneDiscovered: 1846,
//   yearMarsDiscovered: 1659
// };
// let { numPlanets, ...discoveryYears } = planetFacts;
// console.log(discoveryYears); // {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}


//Lab 16 ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร
// function getUserData({ firstName, favoriteColor = 'green' }) {
//   return `Your name is ${firstName} and you like ${favoriteColor}`;
// }
// getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' }); // Your name is Alejandro and you like purple
// getUserData({ firstName: 'Melissa' }); // Your name is Alejandro and you like green
// getUserData({}); // Your name is undefined and you like green



// Lab 17 ให้ใช้ Array destructuring ในการสลับค่าตัวแปร guest กับ admin
// let guest = 'Jane';
// let admin = 'Pete';

// [guest, admin] = ['Pete', 'Jane']
// console.log(guest)
// console.log(admin)


//Lab 18 จงเขียนฟังก์ชันตรวจสอบอายุ โดยรับข้อมูล user ที่อยู่ใน object ที่มี keys เป็น firstName lastName และ age โดยถ้า user มีอายุมากกว่า 18 ให้แสดงผลเป็นการทักทายแล้วตามด้วยชื่อ - นามสกุล ในกรณีที่มีอายุน้อยกว่าหรือเท่ากับ 18 ให้แสดงผลว่า ไม่มีสิทธิ์เข้าใช้งาน(ใช้ destructuring)
// let detail = {
//   fname: "john",
//   lname: "Doe",
//   age: 20
//   }
// let {fname, lname, age} = detail

// let checkAge = (age) =>age > 18 ? `Hello ${fname} ${lname}` : "Not allow";

// console.log(checkAge(age))



// Lab 19
//จงเขียน Object destructuring โดยกำหนดให้
//ตัวแปร name เก็บค่า name property
//ตัวแปร age เก็บค่า years property
//ตัวแปร isAdmin เก็บค่า isAdmin property หากไม่มีค่าให้ default value เป็น false

// let user = {
//   name: 'John',
//   years: 27
// };

// let {name, years:age, isAdmin = false} = user

// console.log(name)
// console.log(age)
// console.log(isAdmin)



//Lab 21 ให้ใช้ Array destructuring โดยให้ a, b, c, d, e และ f มีค่า 1, 2, 3, 4, 5, และ 6 ตามลำดับ
// let arr = [1, [2, [[[3, 4], 5], 6]]];

// let [a,[b,[[[c,d],e],f]]] = arr

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
// console.log(f)


//Lab 22 ให้ใช้ Object destructuring โดยให้ a เท่ากับ 5 และ b เท่ากับ 10
// const obj = { prop: 5, prop2: 10};

// let{prop : a, prop2 : b} = obj

// console.log(a)
// console.log(b)


//Lab 23 a และ b มีค่าเท่าไร
// let a, b;
//  { a, b } = { a: 1, b: 2 };

// Syntaxerror

// let { a, b } = { a: 1, b: 2 };
// console.log(a)
// console.log(b)



//Lab 24 Lab 24 a และ b มีค่าเท่าไร
// const [, , , a, b] = [1, 2, 3];

//Undefind


//Lab 25 ให้ใช้ destructuring โดยให้ x เท่ากับ 5 และ y เท่ากับ 100
// const q = { prop: 5, prop2: [10, 100] };

// let {prop:x, prop2:[z,y]} = q

// console.log(x)
// console.log(y)



//Lab 26 ให้ใช้ destructuring โดยให้ x เท่ากับ Hello และ y เท่ากับ b
// const q = {
//   prop: 'Hello',
//   prop2: {
//     prop2: {
//       nested: ['a', 'b', 'c']
//     }
//   }
// };

// let {
//   prop: x,
//   prop2: {
//     prop2: {
//       nested:[ w, y, z]
//     }
//   }
// } = q

// console.log(x)
// console.log(y)



//Lab 27
//ให้ใช้ for … of กับ names(ให้ destructuring object ในแต่ละ iteration)
//ในแต่ละ iteration ให้ console.log ค่า Full name ออกมา

// const names = [
//   { firstName: 'John', lastName: 'Doe' },
//   { firstName: 'Jack', lastName: 'Dann' },
//   { firstName: 'Joe', lastName: 'Dunne' }
// ];

// for(item of names){
//   let {firstName, lastName} = item
//   console.log('Full name = '+firstName+' '+lastName)
// }

//Lab 28
//ให้ใช้ for … of กับ users(ให้ destructuring object ในแต่ละ iteration)
//ในแต่ละ iteration ให้ console.log ค่า user ตามด้วย age หาก age ไม่มีค่าให้ใช้ unknown

// const users = [
//   { user: "Name1" },
//   { user: "Name2", age: 2 },
//   { user: "Name2" },
//   { user: "Name3", age: 4 }
// ];

// for (item of users){
//   let {user, age = 'unknown'} = item
//   console.log('user = '+user+' age = '+age)
// }




















