const fs = require('fs');

const textIn= fs.readFileSync('./input.txt','utf-8'); 

console.log(textIn);

let contest =`${textIn} Hello i"m PHP and APIs backend developer: `;
const textwrite= fs.writeFileSync('./input.txt', contest); 

console.log(textwrite);
