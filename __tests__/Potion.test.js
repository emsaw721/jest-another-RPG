const Potion = require('../lib/Potion.js'); 


// here we are assuming that when we create a new Potion, it will take the string 
//we pass in and assign it to the potions' name
test('creates a health potion object', () => {
    const potion = new Potion('health');

    expect(potion.name).toEqual(expect.any(String));
    expect(potion.name.length).toBeGreaterThan(0); 
    expect(potion.value).toEqual(expect.any(Number)); 
}); 

// Do not use arrow functions as contructor functions, change the meaning of keyword "this",
// which is a core piece of constructor functions. 