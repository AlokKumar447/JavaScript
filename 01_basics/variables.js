// variable name should be readable 
// semi colon is optional at the end of the statements.
const accountId = 13535
let accountEmail = "alok@gmail.com"
var accountPassword = "12346"
accountCity = "Jaipur"

console.log(accountId , accountEmail, accountPassword , accountCity);
// printing the things in new line
console.log(accountId +"\n"+ accountEmail+"\n"+ accountPassword +"\n"+ accountCity);
/*
    const : this variable must be initialised at the time of declaration and further it 
          neither be updated nor be redeclared. scope is block
    let  : initialisation is optional and it can be updated but not redeclared again 
         scope is block. uninitialized value is undefined.
    var  : scope is global , update and redeclare both are possible.
         due to it's global scope it is avoided from using it, instead use only const 
         and let. never use var.
    on the line 6 : this type of things are also supported by js. but it is not
    recommended it's default variable type is =   
 */

// using the table property of console   * rememeber square bracket.
console.table([accountId,accountEmail,accountPassword,accountCity])

// some basics
"use strict";   // treat all JS codes as newer version

// alert( )  function will not work b/z we are using nodejs , not browser 
// similar goes to prompt() also. 

// ECMAscript defines the standards of js.

// ** Two documentations need to be followed :
//   1. ECMAscript i.e. tc39.es  (for specifications)
//.  2. mdn (for developers)


// data types
/*  7 primitive data types and one Object (non primitive)
nnbbssu = null, Number , BigInt, Boolean, String, Symbol,undefined ( syntax as it is)
    follow documentation on ecma or mdn for data types
*/


console.log(typeof null) // object 
console.log(typeof undefined) // undefined


console.log(typeof "")
console.log(typeof 8765)









