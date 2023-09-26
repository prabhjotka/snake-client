const net = require("net");

// establishes a connection with the game server
const connect = function() {
    const conn = net.createConnection({
        host: "165.227.47.243",
        port: "50541"
        ,
    });

    // interpret incoming data as text
    conn.setEncoding("utf8");
    conn.on("data", (meassge) => {
        console.log(meassge);


    });
    conn.on("connect", () => {
        console.log("Successfully connected to game server");
        const message = "Name--PKM";
        conn.write(message);
        // setInterval(() => {
        //     conn.write("Move: up");
        // }, 500);
        // setInterval(() => {
        //     conn.write("Move:up");
        // }, 600);
        // setInterval(() => {
        //     conn.write("Move:right");
        // }, 700);
        // setInterval(() => {
        //     conn.write("Move: up");
        // }, 800);



    })


    return conn;
};

// console.log("Connecting ...");
// connect();
module.exports = {

    connect,

};