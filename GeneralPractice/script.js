"use strict";
//Attempted by me
// let str = "dodogg";
// let obj = {};
// let arr = [];
// for (let t in str) {
//   obj[str[t]] = arr; //obj[d]=[]==>{d:[],}
// }
// //{ d: [], o: [], g: [], b: [] }
// for (let p in str) {
//   //p=0,1,2,3,....
//   for (let q in obj) {
//     //q='d','o','d',...
//     if(str[p]===q) {
//       obj[q].push(p);//obj["d"].push(p)
//     }
//   }
// }
// console.log(obj);
// ----------------------------------------------------------------------------------
//in class solved by mentor
// let str = "dodo"
// function mapLetters(str){
//     let obj = {}

//     for(let i=0;i<str.length;i++){
//         let t = str[i]
//         if(obj[t]==undefined){
//             obj[t]=[i]
//         }
//         else{
//             obj[t].push(i)
//         }
//     }
// console.log(obj);
// }
// mapLetters(str);

//---------------------------------------------------------------------------------------
// function hello(a,b){
//     console.log("hello")
// }
//functions
//normal function
// let hello = (a,b)=>{
//     console.log("hello",a+b)
// }
// let x=10
// arrow function
// let add = (a,b)=>{
//     console.log(a+b)
// }
// hello(2,4)
// add(4,5)
// -----------------------------------------------------------------------------------
//
// function hello(a,b,c,d,e){
// console.log(a,b,c,d,e)
// }
// let x1 = 10;
// let x2 = "hi"
// let x3 = [2,4,6,1]
// let x4 = {p:"javascript",q:10,r:[2,5],s:{name:"tarun",age:"30"}}
// let x5 = true
// hello(x1,x2,x3,x4,x5)
// -----------------------------------------------------------------------------------
// function hello(a,fun){
// console.log(a,fun)
// }
// let x=10;
// function hi(){
//     console.log("Hiiii")
//     return 1000
// }
// let y = hi();
// hello(x,hi())
// ---------------------------------------------------------------------------------
// function sum(a,b){
//     console.log(a+b)
// }
// // let sum = (a,b)=>{
// //     console.log(a+b)
// // }
// let add = sum
// add(2,4)
// -----------------------------------------------------------------------------
// function hello(a,fun){
//     // a=x=10
//     // fun=hii
//     console.log(a)
//     fun()
//     console.log(fun())
//     }
//     let x=10;
//     function hii(){
//         console.log("Hi")
//         return 1000
//     }
//     hello(x,hii)
// --------------------------------------------------------------------------------
// loops==>map,forEach,filter==>work with arrays only
// map-->map method expects a function as an argument
// let arr =  [10,20,30,40,50]
// --------------------------------------------------------------------------------
// //jonas Schmedtmann js scope chain
// function calcAge(birthYear){
//     const age = 2037-birthYear;
//     console.log(firstName);//cannot access firstName before initialisation
//     return age;
// }
// const firstName = "Jonas"//
// calcAge(1991);
// ---------------------------------------------------------------------------------
// sorting:

// example:
// let arr = [3,72,111,91,4]
// arr.sort()
// console.log(arr)
// example:
// let arr = [3,72,111,91,4]
// arr.sort((a,b)=>a-b)
// console.log(arr)
// example:
// let arr = [3,72,111,91,4]
// arr.sort((a,b)=>b-a)
// console.log(arr)

// example:
// let items = [
//     {name:"Banana",price:50},
//     {name:"Apple",price:20},
//     {name:"Orange",price:30}
// ]
// items.sort((a,b)=>a.price-b.price)
// console.log(items)
// example:
// let employees = [
//   { name: "Hannah", department: "Finance" },
//   { name: "Sarah", department: "IT" },
//   { name: "Zryan", department: "Finance" },
//   { name: "Mike", department: "IT" },
//   { name: "Yshley", department: "Finance" },
//   { name: "Jeff", department: "IT" },
// ];
// let ans = employees.sort((a, b) => {
//   if (a.department < b.department) {
//     return -1;
//   } else if (a.department > b.department) {
//     return 1;
//   }
//   else if(a.department==b.department){
//     if(a.name>b.name){
//         return -1;
//     }
//     else if(a.name<b.name){
//         return 1;
//     }
//   }
// });
// console.log(employees);
// example:
// let books = [
//     {title:"Book B",author:{firstName:"John",lastName:"Doe"}},
//     {title:"Book A",author:{firstName:"Jane",lastName:"Doe"}},
//     {title:"Book C",author:{firstName:"Alice",lastName:"Johnson"}},
//     {title:"Book D",author:{firstName:"Mike",lastName:"Smith"}}
// ]
// sort it based on author last name(descending order)
// if last name is same then sort it based on author firstName (ascending order)
// books.sort((a,b)=>{
//     if(a.author.lastName>b.author.lastName){
//         return -1
//     }
//     else if(a.author.lastName<b.author.lastName){
//         return 1
//     }
//     else if(a.author.lastName==b.author.lastName){
//         if(a.firstName>b.firstName){
//             return 1
//         }
//         else if(a.author.firstName<b.author.firstName){
//             return -1
//         }
//     }
// })
// console.log(books)
// ---------------------------------------------------------------------------------
// map() method
// let arr = [2,6,3,9,5]
// let x = arr.map(square)
// function square(v,i){
//     console.log(v,i)
//     return v*v
// }
// console.log(x)
// forEach() method
// let arr = [2,5,3,8,6]
// arr.forEach(fun)
// function fun(v,i){
// console.log(v,i)
// }
// // filter() method
// let arr = [2, 5, 8, 3, 9, 4];
// let x = arr.filter(fun);
// function fun(v, i) {
// //   console.log("Hi")
//   return v % 2 == 0;
// }
// console.log(x);
// reduce() method
// let arr = [2,5,3,7,1]
// suppose we want to calculate sum of the array
// let x = arr.reduce(fun)
// function fun(sum,value,index){
// return sum+value
// }
// console.log(x)
///////////////////////
// // arr.reduce(p1,p2)
// // reduce method will have two parameters,first parameter is 
// // the function (eg:fun in above case) and second param is the 
// // default value, so we will write it as below
// let arr = [2,5,3,7,1]
// let x = arr.reduce((sum,value,index)=>{return sum+value},0)
// console.log(x)
// if we don't pass the second parameter then its default will
//  be the first element of the array i.e "2" in this case and loop will start 
// from the second index i.e. value will be 5 and index will be 2. If we pass the second 
// parameter then sum will be that value , value will be 2,index will be 0, means loop will 
// run from first index
// let arr = [2,5,3,7,1]
// let x = arr.reduce((sum,value,index)=>{return sum+value})
// console.log(x)

