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

    // returns an object with various player properties
    Player.prototype.getStats = function() {
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility
    };
  };

  // returns the inventory array or false if empty 
  Player.prototype.getInventory = function () {
    if (this.inventory.length) {
        return this.inventory;
    }

    return false; 
  };

  Player.prototype.getHealth = function() {
    return `${this.name}'s health is now ${this.health}!`; 
  }; 

  Player.prototype.isAlive = function() {
    if(this.health === 0) {
        return false; 
    }
    return true; 
  }; 

  Player.prototype.reduceHealth = function(health) {
    this.health -= health; 

    if (this.health < 0) {
        this.health = 0;
    }
  }; 

  Player.prototype.getAttackValue = function() {
    const min = this.strength - 5;
    const max = this.strength + 5; 

    return Math.floor(Math.random() * (max - min) + min); 
  }; 

  Player.prototype.addPotion = function(potion) {
    this.inventory.push(potion); 
    // pushes to player.inventory array in Player.test.js 
  }; 


  
  Player.prototype.usePotion = function(index) {
    // ^ uses index of potion so that it knows which Potion to remove and put into a new "removed items" array,
    const potion = this.getInventory().splice(index,1)[0];
    // ^ then the Potion at index 0 of this "removed items" array is saved in a potion variable. 

    switch(potion.name) {
        case 'agility' :
            this.agility += potion.value; 
            break; 
        case 'health' :
            this.health += potion.value; 
            break; 
        case 'strength' :
            this.strength += potion.value; 
            break; 
    }
  }

module.exports = Player; 