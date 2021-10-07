
const testFunction = (par1, par2) => {
    const num = par1 * par2;
    console.log(`These numbers multiplied together come to ${num}.`);
};

const secondFunction = (par) => {
    const squared = par ** 2;
    console.log(`Your number ${par} is ${squared} when squared.`);
};

const thirdFunction = (par1, par2) => {
    const exponent = par1 ** par2;
    console.log(`${par1} raised to the power ${par2} is ${exponent}`);
};

module.exports = {
    testFunction, 
    secondFunction
};