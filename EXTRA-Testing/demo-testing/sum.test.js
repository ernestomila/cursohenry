
const sum = require('./sum.js')

it("deben sumarse los parámetros", ()=>{
    console.log(expect(sum(3,5)));
    expect(sum(3,5)).toBe(8);
});