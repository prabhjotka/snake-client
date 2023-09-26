const {connect} = require("./client");

// setup interface to handle user input from stdin

const setupInput = function (conn) {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    
      stdin.on("data", handleUserInput);
    return stdin;
  };
  
  const handleUserInput = function (key) {
    // your code here
    
    
      
        if (key === '\u0003') {
            process.exit();
          }
          
  };
console.log("Connecting ...");
const conn=connect();
setupInput(conn);




