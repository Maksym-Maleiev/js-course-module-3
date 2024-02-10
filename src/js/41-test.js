const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    if (this.potions.includes(newPotion)) {
      return `Error! Potion ${newPotion} is already in your inventory!`;
    }

    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    const potionIndex = this.potions.indexOf(potionName);

    if (potionIndex === -1) {
      return `Potion ${potionName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1);
  },
  updatePotionName(oldName, newName) {
    const potionIndex = this.potions.indexOf(oldName);

    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1, newName);
  },
  // Change code above this line
};

console.log(atTheOldToad.getPotions());
console.log(atTheOldToad.addPotion({ name: 'Invisibility', price: 620 }));
console.log(atTheOldToad.addPotion({ name: 'Power potion', price: 270 }));
console.log(atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 }));
console.log(atTheOldToad.addPotion({ name: 'Stone skin', price: 240 }));
console.log(atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 }));
console.log(atTheOldToad.addPotion({ name: 'Stone skin', price: 240 }));
console.log(atTheOldToad.removePotion('Dragon breath'));
console.log(atTheOldToad.removePotion('Speed potion'));
console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'));
console.log(
  atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion')
);
