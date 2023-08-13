const openBrackets = ["(", "{", "[","|"];
const closeBrackets = [")","{","[","|"];
let resArrOpenBrackets = [];
let resArrCloseBrackets = [];
module.exports = function check(str, bracketsConfig) {
   let chars = str.split('');
   for (let i = 0; i < chars.length; i++) {
     if (openBrackets.includes(chars[i])) {
       resArrOpenBrackets.push(chars[i]);
     }
     if (closeBrackets.includes(chars[i])) {
       resArrCloseBrackets.push(chars[i]);
     }
   }
   return resArrCloseBrackets.length === resArrOpenBrackets.length
}
