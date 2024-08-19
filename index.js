// import { sayGoodBye, hello } from "./module1.js" // import แบบเลือกชื่อ function
import * as say  from "./module1.js" // import ทั้งหมดจาก module1 
import helloJS from "./module2.js"

function sayHi() {console.log('Hello module')}


sayHi()
// sayHello()
// sayGoodBye()

say.sayHello()
say.sayGoodBye()
helloJS()

