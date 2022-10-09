const Potion = require('../lib/Potion.js'); 


// here we are assuming that when we create a new Potion, it will take the string 
//we pass in and assign it to the potions' name
test('creates a health potion object', () => {
    const potion = new Potion('health');

    expect(potion.name).toBe('health');
    expect(potion.value).toEqual(expect.any(Number)); 
}); 