let a:number=10, b:number=20;

//Arithmetic operations

console.log("******* Arithmetic Operators **********")
console.log(a+b);
console.log(b-a);
console.log(a*b);
console.log(b/a);
console.log(a%b);
console.log(5**2);

console.log("******* Assignment Operators **********")
//Assignment Operators =

a=10;
b=5;

//a+=b;     //a=a+b;
//console.log(a)

console.log(a+=b);   // a=a+b   --->15
console.log(a-=b);   // a=a-b   --->10
console.log(a*=b);   // a=a*b   ----> 50
console.log(a/=b);   // a=a/b  ---->10
console.log(a%=b);  // a=a%b  ----> 0

//Relational/Comparison Operators
//Returns boolean- true/ false
//   >  <  >=  <=  ==  !=  ===(Strict equality)

console.log("********** Relational Operators ********")
a=10;
b=20

console.log(a>b);  //false
console.log(a<b); // true
console.log(a<=b); //true
console.log(a>=b); //false
console.log(a==b); //false
console.log(a!=b); //true

//Difference between ==(equaltiy)       ===(strict equality)

console.log("******** Difference between ==  === *********")
let num1:any=10;   //number type
let num2:any="10"   // string

console.log(num1==num2); //true ( only comapres values)
console.log(num1===num2); //false(comapres the values & type)

//Logical Operators   &&  ||  !
// returns true/false (boolean)
// works between boolean variables

// b1      b2       &&           ||          !b1
//--------------------------------------------------
//true      true    true        true          false
//true      false   false       true
//false     true    false       true           true
// false    false   false       false

console.log("****************  Logical Operators ***************")

let b1:boolean=true;
let b2:boolean=false;

console.log(b1 && b2);  //false
console.log(b1 || b2);  ///true
console.log(!b1);  //false
console.log(!b2);  //true

//combination of logical & Relational operators

console.log("******** Mixing of Logical & Relational operators **********")

console.log(20>10 && 10>5); // true
console.log(10<20 || 5>10);  //true

// Ternary/conditional operator

//  ?:

//  exp ?  res1 : res2;

//Example 1
/*
let a:number=100, b:number=200;

let res:number= (a>b) ? a: b;
console.log(res);//200
*/

//Example 2:

let personAge:number=30;

let res1:string= (personAge>=18)? "Adult": "Minor";
//let res:string= (personAge<18)? "Minor": "Adult";


console.log(res1);  // Adult
