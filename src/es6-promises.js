const axios = require("axios");

// TypeScript added support for async/await with version 1.7 in 2015.[11]
//
// Javascript added support for async/await in 2017 as part of ECMAScript 2017 JavaScript edition.
const asyncWrapper = async () => {
    var x = new Promise((res) => {
        setTimeout(() => res(5), 1000)
    });

    const x1 = await x;
    console.log(x1);
    const x2 = x1 + 1;
    console.log(x2);

    var y = () => new Promise((res) => {
        setTimeout(() => res(7), 1000)
    });

    const y1 = await y();
    console.log(y1);
    Promise.reject(y1)
        .catch(x => {
            console.log(`Catching err: ${x}`);
        });

    var z = () => axios.get('https://api.weather.gov/gridpoints/TOP/31,80/forecast');
    const res = await z();
    const data = res.data;
    console.log(data);
};

asyncWrapper().catch((err) => console.log(`Error executing async code`));
