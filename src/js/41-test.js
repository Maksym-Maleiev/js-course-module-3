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
      // console.log(potion);

      if (potion.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }

    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    const { potions } = this;

    for (let i = 0; i < potions.length; i += 1) {
      const { name } = potions[i];

      if (potionName !== name) {
        return `Potion ${potionName} is not in inventory!`;
      }
    }

    this.potions.splice(i, 1);
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

console.table(atTheOldToad.getPotions());

atTheOldToad.addPotion({ name: 'Invisibility', price: 620 });
atTheOldToad.addPotion({ name: 'Power potion', price: 270 });

console.log(atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 }));

atTheOldToad.addPotion({ name: 'Stone skin', price: 240 });
atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 });
atTheOldToad.addPotion({ name: 'Stone skin', price: 240 });

console.table(atTheOldToad.getPotions());

atTheOldToad.removePotion('Dragon breath');
atTheOldToad.removePotion('Speed potion');

console.table(atTheOldToad.getPotions());

atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');
atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion');
