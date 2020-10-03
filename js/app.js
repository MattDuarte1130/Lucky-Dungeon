// Class for Player
class Player {
  constructor(
    name,
    maxVitality = 100,
    currentHealth,
    attackPower = 5,
    abilityPower = 12,
    armor = 2
  ) {
    this.name = name;
    this.maxVitality = maxVitality;
    this.currentHealth = maxVitality;
    this.attackPower = attackPower;
    this.abilityPower = abilityPower;
    this.armor = armor;
  }
  useBasicAttack(target) {
    target.currentHealth -= this.attackPower;
    console.log(
      "Your attack hit! " +
        target.name +
        "'s HP is now at " +
        target.currentHealth +
        "!"
    );
  }
  useAbilityPower(target) {
    target.currentHealth -= this.abilityPower;
    console.log(
      "Your ability hit! " +
        target.name +
        "'s HP is now at " +
        target.currentHealth +
        "!"
    );
  }
}
// Class for Weapon Items
class Weapon {
  constructor(name, attackPower) {
    this.name = name;
    this.attackPower = 2 + Math.floor(Math.random() * (2 - 1 + 1));
  }
  boostPlayerAttack(player) {
    player.attackPower += this.attackPower;
    console.log(
      `The ${this.name} boosted ${player.name}'s attack power by ${this.attackPower}!`
    );
  }
}

// Class for Ability Items
class Ability {
  constructor(name, abilityPower) {
    this.name = name;
    this.abilityPower = 1 + Math.floor(Math.random() * (1 - 1 + 1));
  }
  boostPlayerAbility(player) {
    player.abilityPower += this.abilityPower;
    console.log(
      `The ${this.name} boosted ${player.name}'s ability power by ${this.attackPower} points!`
    );
  }
}


// Class for Armor Items
class Armor {
  constructor(name, vitality, armor) {
    this.name = name;
    this.vitality = 9 + Math.floor(Math.random() * (9 - 1 + 1));
    this.armor = 0 //4 + Math.floor(Math.random() * (4 - 1 + 1));
  }
  boostPlayerMaxVitalityAndArmor(player) {
    player.maxVitality += this.vitality;
    player.armor += this.armor;
    player.currentHealth += this.vitality
    console.log(
      `The ${this.name} boosted ${player.name}'s max vitality by ${this.vitality} points and ${player.name}'s armor by ${this.armor} points!`
    );
  }
}

// Class For Enemy
class Enemy {
  constructor(
    name,
    maxVitality = 75 + Math.floor(Math.random() * (90 - 75 + 1)),
    currentHealth,
    attackPower,
    abilityPower,
    armor,
  ) {
    this.name = name;
    this.maxVitality = maxVitality;
    this.currentHealth = maxVitality;
    this.attackPower = 2 + Math.floor(Math.random() * (5 - 2 + 1));
    this.abilityPower = 10 + Math.floor(Math.random() * (10 - 7 + 1));
    this.armor = 1 + Math.floor(Math.random() * (3 - 1 + 1));
  }
  useBasicAttack(target) {
    if(target.currentHealth >= 0 && this.currentHealth >= 0){
      target.currentHealth -= this.attackPower;
      console.log(
        "Your attack hit! " +
          target.name +
          "'s HP is now at " +
          target.currentHealth +
          "!"
      );
    } else {
      clearInterval(this.intervalId)
    }
  }
  useAbilityPower(enemy) {
    target.currentHealth -= this.abilityPower;
    console.log(
      "Your ability hit! " +
        target.name +
        "'s HP is now at " +
        target.currentHealth +
        "!"
    );
  }
  startAttacking(target){
      this.intervalId = setInterval(()=> this.useBasicAttack(target), 1250);
  }
}





let playerOne = new Player("Matt");
let enemyOne = new Enemy("Wimpy Orc");
let firstWeapon = new Weapon("Poopy Twig");
let firstArmor = new Armor("Paper Armor")
let firstAbility = new Ability("Water Spout")

firstWeapon.boostPlayerAttack(playerOne);
firstArmor.boostPlayerMaxVitalityAndArmor(playerOne)
firstAbility.boostPlayerAbility(playerOne)

enemyOne.startAttacking(playerOne);
console.log(firstWeapon);
console.log(firstAbility);
console.log(firstArmor);
console.log(playerOne);
console.log(enemyOne);

//let enemyAttacks = setInterval(()=> enemyOne.startAttacking(playerOne), 1250);
//console.log(enemyAttacks)



//playerOne.useBasicAttack(enemyOne)
//playerOne.useBasicAttack(enemyOne)

// Health Bars --------------------
let getPlayerHealthPercentage =
  (playerOne.currentHealth / playerOne.maxVitality) * 100 + "%";
let $playerHealthBar = $(".healthBarValue").text(
  playerOne.currentHealth + "/" + playerOne.maxVitality
);
let $playerHealthBarFill = $(".healthBarFill").css({
  width: getPlayerHealthPercentage,
});

let getEnemyHealthPercentage =
  (enemyOne.currentHealth / enemyOne.maxVitality) * 100 + "%";
let $enemyHealthBar = $(".enemyHealthBarValue").text(
  enemyOne.currentHealth + "/" + enemyOne.maxVitality
);
let $enemyHealthBarFill = $(".enemyHealthBarFill").css({
  width: getEnemyHealthPercentage,
});

const playerBasicAttack = (enemy) => {
  playerOne.useBasicAttack(enemy);
};

// phyical attack button now has a cooldown
$("#playerPhysicalAttack").on("click", function () {
  let basicAttackBtn = $(this);
  basicAttackBtn.prop("disabled", true);
  setTimeout(function () {
    basicAttackBtn.prop("disabled", false);
  }, 1000);
});

// ability attack button now has a cooldown
$("#playerAbilityAttack").on("click", function () {
  let abilityAttackBtn = $(this);
  abilityAttackBtn.prop("disabled", true);
  setTimeout(function () {
    abilityAttackBtn.prop("disabled", false);
  }, 5000);
});

$(() => {});
