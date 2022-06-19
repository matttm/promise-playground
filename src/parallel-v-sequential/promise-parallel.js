const {wait} = require("./common");

Promise.all([wait(5000), wait(10000)]).then(console.log);

