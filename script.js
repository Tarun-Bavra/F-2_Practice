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
/////////////////////////////
//in class solved by mentor
let str = "dodo"
function mapLetters(str){
    let obj = {}
    for(let i=0;i<str.length;i++){
        let t = str[i]
        if(obj[t]==undefined){
            obj[t]=[i]
        }
    }
console.log(obj);
console.log(str);
}
