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
    for (const potion of this.potions) {
      if (potion.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }

    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    const { potions } = this;

    for (let i = 0; i < potions.length; i += 1) {
      const potion = potions[i];

      if (potionName === potion.name) {
        this.potions.splice(i, 1);
      }
    }

    return `Potion ${potionName} is not in inventory!`;
  },
  updatePotionName(oldName, newName) {
    const { potions } = this;

    for (let i = 0; i < potions.length; i += 1) {
      const potion = potions[i];

      if (oldName === potion.name) {
        potions.splice(i, 1, newName);
      }

      return `Potion ${oldName} is not in inventory!`;
    }
  },
  // Change code above this line
};

console.table(atTheOldToad.getPotions());

atTheOldToad.addPotion({ name: 'Invisibility', price: 620 });
atTheOldToad.addPotion({ name: 'Power potion', price: 270 });

console.log(atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 }));
console.log(atTheOldToad.addPotion({ name: 'Stone skin', price: 240 }));
console.log(atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 }));
console.log(atTheOldToad.addPotion({ name: 'Stone skin', price: 240 }));

console.table(atTheOldToad.getPotions());

console.log(atTheOldToad.removePotion('Dragon breath'));
console.log(atTheOldToad.removePotion('Speed potion'));

console.table(atTheOldToad.getPotions());

console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'));
console.log(
  atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion')
);

console.table(atTheOldToad.getPotions());
