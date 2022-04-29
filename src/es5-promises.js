const axios = require("axios");
var x = new Promise((res) => {
    setTimeout(() => res(5), 1000)
});

x
    .then(x => {
        console.log(x);
        return x;
    })
    .then(x => {
        console.log(x);
        return x + 1;
    })
    .then(x => x + 1)
    .catch(x => {
        console.log(x)
    })
    .then(console.log)

var y = () => new Promise((res) => {
    setTimeout(() => res(7), 1000)
});

y()
    .then(x => {
        console.log(x);
        return x;
    })
    .then(x => {
        throw x;
    })
    .catch(x => {
        console.log(`Catching err: ${x}`);
    });

var z = () => new Promise((res) => {
    axios.get('https://google.com').then((html, err) => {
        if (err) throw err;
        res(html);
    });
});

z()
    .then(x => x.data)
    .then((html) => {
        console.log(html);
    });
