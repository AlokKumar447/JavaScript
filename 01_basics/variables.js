// to save the changes go on source control -> click on + for all changes -> in message
// write "container config done" ->then click on commit -> go to three dots ... -> then click on "push"

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

null : standalone value i.e. variable is given an empty value
Number : number int or float 
BigInt : for the numbers exceeding the limit of Number
Boolean : true or false 
String : set of characters written in double quotes " "
Symbol : used for uniqueness 
undefined : the variable is declared but not assign any value to it.
*/


console.log(typeof null) // object 
console.log(typeof undefined) // undefined


console.log(typeof "")
console.log(typeof 8765)



//*************************     Type conversion of data types.     ********************/

let score = undefined;

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// value of variable   type after Number(variable)     value after Number(variable)
// "33"                  number (n is small)                     33
// "33abc" (i.e.string)  number                                   NaN
//  true                 number                                   1
// false                 number                                   0
// undefined             number                                   NaN

let isLoggedIn = undefined

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log( typeof booleanIsLoggedIn);
//  console.log( booleanIsLoggedIn);
// value of variable   type after Boolean(variable)     value after Boolean(variable)

//any non-zero value    boolean (b is small)                     true
// "33abc" (i.e.string)  boolean                                 true
// ""  (empty string)     boolean                                false
// 0                     boolean                                 false
// undefined             boolean                                 false



let someNumber = 'hi'

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
/*
variable value: number/boolean/undefined/string any thing when String(variable) is applied 
the value of the new variable is just as it is assigned to old variable but in string format like 
undefined becomes "undefined", true becomes "true" ,so on 
and data type is string.

*/






