const wait = (time) => {
    return new Promise((res) => {
        setTimeout(() => {
            console.log(`Waited ${time} ms`);
            res();
        }, time);
    })
};

module.exports = {
    wait
};
