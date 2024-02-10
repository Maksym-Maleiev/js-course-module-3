const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  updatePotionName(oldName, newName) {
    // Change code below this line
    const indexPotion = this.potions.indexOf(oldName);

    this.potions.splice(indexPotion, 1, newName);

    // Change code above this line
  },
};
