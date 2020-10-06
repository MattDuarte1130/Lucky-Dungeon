// --------------- Start of Class for Player ----------------------
class Player {
  constructor(
    name,
    maxVitality = 100,
    currentHealth,
    attackPower = 5,
    abilityPower = 10,
    healing = 2
  ) {
    this.name = name;
    this.maxVitality = maxVitality;
    this.currentHealth = maxVitality;
    this.attackPower = attackPower;
    this.abilityPower = abilityPower;
    this.healing = healing;
  }
  useBasicAttack(target) {
    target.currentHealth -= this.attackPower;
    getEnemyHealthBar(target);
    promptItemSelectionOrLoseScreen(playerOne, currentEnemy);
    console.log(
      `${this.name}'s basic attack hit! ${target.name}'s HP is now at ${target.currentHealth}!`
    );
  }
  useAbilityPower(target) {
    target.currentHealth -= this.abilityPower;
    getEnemyHealthBar(target);
    promptItemSelectionOrLoseScreen(playerOne, currentEnemy);
    console.log(
      `${this.name}'s ability attack hit! ${target.name}'s HP is now at ${target.currentHealth}!`
    );
  }
  useHealPower(user){
    if(this.currentHealth < (this.maxVitality -= this.healing)){
    this.currentHealth += this.healing
    }
}
}
// --------------- -------End of Class for Player ----------------------
// ======================================================================
// ------------------- Start of Class for Weapon Items -----------------------
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
// ------------------- End of Class for Weapon Items -----------------------
// ======================================================================
// ------------------ Start of Class for Ability Items ------------------
class Ability {
  constructor(name, abilityPower) {
    this.name = name;
    this.abilityPower = 1 + Math.floor(Math.random() * (3 - 1 + 1));
  }
  boostPlayerAbility(player) {
    player.abilityPower += this.abilityPower;
    console.log(
      `The ${this.name} boosted ${player.name}'s ability power by ${this.abilityPower} points!`
    );
  }
}
// ------------------ End of Class for Ability Items ------------------
// ======================================================================
// ------------------Start of Class for healing Items--------------------------
class Armor {
  constructor(name, vitality, healing) {
    this.name = name;
    this.vitality = 9 + Math.floor(Math.random() * (9 - 1 + 1));
    this.healing = 4 + Math.floor(Math.random() * (4 - 1 + 1));
  }
  boostPlayerMaxVitalityAndHealing(player) {
    player.maxVitality += this.vitality;
    player.healing += this.healing;
    player.currentHealth += this.vitality;
    console.log(
      `The ${this.name} boosted ${player.name}'s max vitality by ${this.vitality} points and ${player.name}'s healing by ${this.healing} points!`
    );
  }
}
// ------------------End of Class for healing Items--------------------------
// ======================================================================
// --------------------Start of Class For Enemy-----------------------------
class Enemy {
  constructor(
    name,
    maxVitality = 75 + Math.floor(Math.random() * (90 - 75 + 1)),
    currentHealth,
    attackPower,
    abilityPower,
    healing
  ) {
    this.name = name;
    this.maxVitality = maxVitality;
    this.currentHealth = maxVitality;
    this.attackPower = 2 + Math.floor(Math.random() * (5 - 2 + 1));
    this.abilityPower = 10 + Math.floor(Math.random() * (10 - 7 + 1));
    this.healing = 1 + Math.floor(Math.random() * (3 - 1 + 1));
  }
  useBasicAttack(target) {
    if (target.currentHealth >= 0 && this.currentHealth >= 0) {
      target.currentHealth -= this.attackPower;
      promptItemSelectionOrLoseScreen(playerOne, currentEnemy);
      getHealthBars(target);
      console.log(
        `${this.name}'s basic attack hit! ${target.name}'s HP is now at ${target.currentHealth}!`
      );
    } else {
      clearInterval(this.intervalId);
    }
  }
  useAbilityPower(target) {
    if (target.currentHealth >= 0 && this.currentHealth >= 0) {
      target.currentHealth -= this.abilityPower;
      promptItemSelectionOrLoseScreen(playerOne, currentEnemy);
      getHealthBars(target);
      console.log(
        `${this.name}'s ability attack hit! ${target.name}'s HP is now at ${target.currentHealth}!`
      );
    } else {
      clearInterval(this.intervalId);
    }
  }
  useHealPower(target){
    if (target.currentHealth >= 0 && this.currentHealth >= 0) {
      this.currentHealth += this.healing;
      getEnemyHealthBar(currentEnemy)
      promptItemSelectionOrLoseScreen(playerOne, currentEnemy);
    } else {
      clearInterval(this.intervalId);
    }
  }
  startAttacking(target) {
    this.intervalId = setInterval(() => this.useBasicAttack(target), 1250);
    this.intervalId = setInterval(() => this.useAbilityPower(target), 5250);
    this.intervalId = setInterval(() => this.useHealPower(target), 10000);
  }
}
// -------------- End of Enemy Class -----------------
// =============================================================
// ---------------- Create Player--------------------
let playerOne = new Player("King MattyIce");
let firstWeapon = new Weapon("Poopy Stick");
let firstArmor = new Armor("Paper armor");
let firstAbility = new Ability("Water Bottle");
$('#playerName').text(`${playerOne.name}`)

firstWeapon.boostPlayerAttack(playerOne);
firstArmor.boostPlayerMaxVitalityAndHealing(playerOne);
firstAbility.boostPlayerAbility(playerOne);

let $firstWeaponDescription = `${firstWeapon.name} it contains + ${firstWeapon.attackPower} attack power.`;
let $firstArmorDescription = `${firstArmor.name} it contains + ${firstArmor.vitality} vitality and ${firstArmor.healing} healing points.`;
let $firstAbilityDescription = `${firstAbility.name} it contains + ${firstAbility.abilityPower} ability power.`;
$("#itemOne").append($firstWeaponDescription);
$("#itemTwo").append($firstArmorDescription);
$("#itemThree").append($firstAbilityDescription);

// -----------------Player Stats -----------------------
const getPlayerStats = () => {
  $("#playerAttackStats").text(`Attack Power: ${playerOne.attackPower}`);
  $("#playerVitStats").text(`Vitality: ${playerOne.maxVitality}`);
  $("#playerArmorStats").text(`Healing: ${playerOne.healing}`);
  $("#playerAbilityStats").text(`Ability Power: ${playerOne.abilityPower}`);
};
//--------------------- End of player stats ---------------------

// currentEnemy.startAttacking(playerOne);
// console.log(firstWeapon);
// console.log(firstAbility);
// console.log(firsthealing);
// console.log(playerOne);
// console.log(currentEnemy);

// -------------------Select reward Item--------------------------
let $rewardItemDiv = $(".rewardItem");
let $rewardItemWeapon = $("#rewardWeapon");
let $rewardItemArmor = $("#rewardArmor");
let $rewardItemAbility = $("#rewardAbility");

// ------ Create reward function ------------
const createRewardItems = () => {
  let rewardWeapon = new Weapon(
    `${weaponNames[Math.floor(Math.random() * weaponNames.length)]}`
  );
  let rewardArmor = new Armor(
    `${armorNames[Math.floor(Math.random() * armorNames.length)]}`
  );
  let rewardAbility = new Ability(
    `${abilityNames[Math.floor(Math.random() * abilityNames.length)]}`
  );
  let $makeWeaponDiv = $("<div>").attr("id", "rewardWeapon");
  let $makeArmorDiv = $("<div>").attr("id", "rewardArmor");
  let $makeAbilityDiv = $("<div>").attr("id", "rewardAbility");
  $makeWeaponDiv.addClass("rewardItem");
  $makeArmorDiv.addClass("rewardItem");
  $makeAbilityDiv.addClass("rewardItem");
  $("#winningItems").append($makeWeaponDiv);
  $("#winningItems").append($makeArmorDiv);
  $("#winningItems").append($makeAbilityDiv);
  rewardWeapon.attackPower = rewardWeapon.attackPower * itemStatMultiplier;
  rewardArmor.vitality = rewardArmor.vitality * itemStatMultiplier;
  rewardArmor.healing = rewardArmor.healing * itemStatMultiplier;
  rewardAbility.abilityPower = rewardAbility.abilityPower * itemStatMultiplier;

  let $rewardWeaponDescription = `${rewardWeapon.name} it contains + ${rewardWeapon.attackPower} attack power.`;
  let $rewardArmorDescription = `${rewardArmor.name} it contains + ${rewardArmor.vitality} vitality and + ${rewardArmor.healing} healing points.`;
  let $rewardAbilityDescription = `${rewardAbility.name} it contains + ${rewardAbility.abilityPower} ability power.`;

  $("#rewardWeapon").text($rewardWeaponDescription);
  $("#rewardArmor").text($rewardArmorDescription);
  $("#rewardAbility").text($rewardAbilityDescription);

  const selectWeaponToEquip = () => {
    $makeWeaponDiv.on("click", spawnNextEnemy);
    $makeWeaponDiv.on("click", (event) => {
      const $selectedTarget = $(event.target);
      const $selectedtargetsParent = $selectedTarget.parent();
      $selectedtargetsParent.hide();
      $("#itemOne").text($rewardWeaponDescription);
      playerOne.attackPower = 5;
      playerOne.currentHealth = playerOne.maxVitality;
      rewardWeapon.boostPlayerAttack(playerOne);
      $makeWeaponDiv.remove();
      $makeArmorDiv.remove();
      $makeAbilityDiv.remove();
      getHealthBars(playerOne);
      getPlayerStats();
    });
    const selectArmorToEquip = () => {
      $makeArmorDiv.on("click", spawnNextEnemy);
      $makeArmorDiv.on("click", (event) => {
        const $selectedTarget = $(event.target);
        const $selectedtargetsParent = $selectedTarget.parent();
        $selectedtargetsParent.hide();
        $("#itemTwo").text($rewardArmorDescription);
        playerOne.maxVitality = 100;
        playerOne.healing = 2;
        playerOne.currentHealth = playerOne.maxVitality;
        rewardArmor.boostPlayerMaxVitalityAndHealing(playerOne);
        $makeWeaponDiv.remove();
        $makeArmorDiv.remove();
        $makeAbilityDiv.remove();
        getHealthBars(playerOne);
        getPlayerStats();
      });
      const selectAbilityToEquip = () => {
        $makeAbilityDiv.on("click", spawnNextEnemy);
        $makeAbilityDiv.on("click", (event) => {
          const $selectedTarget = $(event.target);
          const $selectedtargetsParent = $selectedTarget.parent();
          $selectedtargetsParent.hide();
          $("#itemThree").text($rewardAbilityDescription);
          playerOne.abilityPower = 10;
          playerOne.currentHealth = playerOne.maxVitality;
          rewardAbility.boostPlayerAbility(playerOne);
          $makeWeaponDiv.remove();
          $makeArmorDiv.remove();
          $makeAbilityDiv.remove();
          getHealthBars(playerOne);
          getPlayerStats();
        });
      };
      selectAbilityToEquip();
    };
    selectArmorToEquip();
  };
  selectWeaponToEquip();
  spawnEnemyAfterItemSelection();
};

const spawnEnemyAfterItemSelection = () => {
  $(".rewardItemDiv").on("click", spawnNextEnemy);
};

// -------------------End of Select reward Item--------------------------
// =====================================================================
// ----------Round Counter and Increase New Enemy Stats -----------------
let numOfEnemiesDefeated = 0;
let enemyStatMultiplier = 1;
let itemStatMultiplier = 1;
let currentEnemy = null;

const spawnNextEnemy = () => {
  currentEnemy = null;
  currentEnemy = new Enemy(
    `${enemyNames[Math.floor(Math.random() * enemyNames.length)]}`
  );
  currentEnemy.maxVitality = currentEnemy.maxVitality * enemyStatMultiplier;
  currentEnemy.currentHealth = currentEnemy.maxVitality;
  currentEnemy.attackPower = currentEnemy.attackPower * enemyStatMultiplier;
  currentEnemy.abilityPower = currentEnemy.abilityPower * enemyStatMultiplier;
  currentEnemy.healing = currentEnemy.healing * enemyStatMultiplier;
  getEnemyHealthBar(currentEnemy);
  $('#enemyName').text(`${currentEnemy.name}`)
  $("#enemyAttackStats").text(`Attack Power: ${currentEnemy.attackPower}`);
  $("#enemyVitStats").text(`Vitality: ${currentEnemy.maxVitality}`);
  $("#enemyArmorStats").text(`healing: ${currentEnemy.healing}`);
  $("#enemyAbilityStats").text(`Ability Power: ${currentEnemy.abilityPower}`);
  currentEnemy.startAttacking(playerOne);
};

$("#startGame").one("click", (event) => {
  const $selectedTarget = $(event.target);
  const $selectedtargetsParent = $selectedTarget.parent();
  $selectedtargetsParent.hide();
  spawnNextEnemy();
  getHealthBars(playerOne);
  getPlayerStats();
});

// ----------- Win or lose scenario --------------
const promptItemSelectionOrLoseScreen = (user, target) => {
  if (target.currentHealth <= 0 && user.currentHealth > 0) {
    enemyStatMultiplier += 0.5;
    numOfEnemiesDefeated++;
    itemStatMultiplier += 2;
    createRewardItems();
    $("#winningItems").show();
    //alert(`Congragulations! You defeated the ${target.name}. Select one of the three items displayed below!`)
  } else if (user.currentHealth <= 0 && target.currentHealth > 0) {
    alert(
      `Wow you got destroyed by the ${target.name}! Better luck next time.`
    );
  }
};
//promptItemSelectionOrLoseScreen(playerOne, currentEnemy)

// ------------------Health Bars --------------------
const getHealthBars = (player) => {
  let getPlayerHealthPercentage =
    (player.currentHealth / player.maxVitality) * 100 + "%";
  let $playerHealthBar = $(".healthBarValue").text(
    player.currentHealth + "/" + player.maxVitality
  );
  let $playerHealthBarFill = $(".healthBarFill").css({
    width: getPlayerHealthPercentage,
  });
};

const getEnemyHealthBar = (enemy) => {
  let getEnemyHealthPercentage =
    (enemy.currentHealth / enemy.maxVitality) * 100 + "%";
  let $enemyHealthBar = $(".enemyHealthBarValue").text(
    enemy.currentHealth + "/" + enemy.maxVitality
  );
  let $enemyHealthBarFill = $(".enemyHealthBarFill").css({
    width: getEnemyHealthPercentage,
  });
};
// ------------------Health Bars --------------------

// ------- Player Attack Button Functions -----------
const playerUseBasicAttack = (user, target) => {
  user.useBasicAttack(target);
};
const playerUseAbilityAttack = (user, target) => {
  user.useAbilityPower(target);
};
const playerUseHealingAbility = (user) =>{
  user.useHealPower()
}
// ------- End of Player Attack Button Functions -----------

// -------- phyical attack button now has a cooldown ------------
$("#playerPhysicalAttack").on("click", function () {
  let basicAttackBtn = $(this);
  playerUseBasicAttack(playerOne, currentEnemy);
  basicAttackBtn.prop("disabled", true);
  setTimeout(function () {
    basicAttackBtn.prop("disabled", false);
  }, 1000);
});

//  -------------ability attack button now has a cooldown ---------------
$("#playerAbilityAttack").on("click", function () {
  let abilityAttackBtn = $(this);
  playerUseAbilityAttack(playerOne, currentEnemy);
  abilityAttackBtn.prop("disabled", true);
  setTimeout(function () {
    abilityAttackBtn.prop("disabled", false);
  }, 5000);
});

//-----------------Heal ability button ---------------------------
$("#playerHealAbility").on("click", function () {
  let useHealBtn = $(this);
  playerUseHealingAbility(playerOne)
  getHealthBars(playerOne);
  useHealBtn.prop("disabled", true);
  setTimeout(function () {
    useHealBtn.prop("disabled", false);
  }, 10000);
});

//-------------------Arrays for Item Names and enemy Names ---------------------
const enemyNames = [
  "Wimpy Orc",
  "Medium Orc",
  "Large Ugly Orc",
  "Green Goblin",
  "Sneaky thief",
  "Evil Ninja",
  "Brolic Hobo",
  "Kanye West",
  "Shrek",
];

const weaponNames = [
  "Cardboard Sword",
  "Excalibur",
  "Infinty Edge",
  "Light Saber",
  "Claymore",
  "Huge Branch",
  "Cactus",
  "Bamboo Stick",
  "Twig",
];

const armorNames = [
  "Tree Bark Armor",
  "Iron Armor",
  "Gold Armor",
  "Gold Plated Armor",
  "Chain Armor",
  "Cloth Armor",
  "Steel Skirt",
  "Power Rangers Costume",
  "A real Power Rangers Costume",
  "Iron Man Suit",
  "Captain's Shield",
];

const abilityNames = [
  "Flamethrower",
  "Water Hose",
  "Power Washer",
  "Sprinkler",
  "Leaf Blower",
  "Blow Horn",
  "Charizard The Pokemon",
  "Water Bending Scroll",
  "Dragon Warrior Scroll",
  "Dominos Pizza Box",
];

$(() => {});
