const { wait } = require("./promise-parallel");

wait(5000).then(() => {
    wait(10000).then();
})
