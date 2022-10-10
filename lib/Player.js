const Potion = require('../lib/Potion'); 
// Don't use arrow function because that changes the meaning of this
function Player(name = '') {
    this.name = name; 
    // name parameter sets a default empty string if no name is provided. 
    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7); 
    this.inventory = [new Potion('health'), new Potion()]; 
}

module.exports = Player; 