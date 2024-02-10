const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  removePotion(potionName) {
    // Change code below this line
    const indexPotion = this.potions.indexOf(potionName);

    this.potions.splice(indexPotion, 1);

    return this.potions;
    // Change code above this line
  },
};

console.log(atTheOldToad.removePotion('Dragon breath'));
console.log(atTheOldToad.removePotion('Speed potion'));
