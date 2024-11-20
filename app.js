const readline = require('readline');

const readinput = readline.createInterface({
  input:process.stdin,
  output:process.stdout
});

readinput.question("Please enter your name :", (name) =>{
  console.log("You Enterd : "+name);
  readinput.close();
});

readinput.on('close',() =>{
  console.log("Close Interface");
  process.exit(0);
})

