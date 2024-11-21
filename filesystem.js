const { error } = require('console');
const fs = require('fs');


// const textIn= fs.readFileSync('./input.txt','utf-8'); // Read file Sync 

const textInAsync= fs.readFile('./input.txt','utf-8', (error,data)=>{
  console.log('data '+data);
}); // Read file Async 


// let contest =`${textIn} Hello i"m PHP and APIs backend developer: `;
let contest =`Hello i"m PHP and APIs backend developer: `;
const textwrite= fs.writeFileSync('./input.txt', contest); 

console.log(textwrite);
