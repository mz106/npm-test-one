
const testFunction = (par1, par2) => {
    const num = par1 * par2;
    console.log(`These numbers multiplied together come to ${num}.`);
};

const secondFunction = (par) => {
    const squared = par ** 2;
    console.log(`Your number ${par} is ${squared} when squared.`)
};

module.exports = testFunction;