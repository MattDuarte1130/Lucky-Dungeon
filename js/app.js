// --------------- Start of Class for Player ----------------------
class Player {
  constructor(
    name,
    maxVitality = 100,
    currentHealth,
    attackPower = 50,
    abilityPower = 10,
    armor = 2
  ) {
    this.name = name;
    this.maxVitality = maxVitality;
    this.currentHealth = maxVitality;
    this.attackPower = attackPower;
    this.abilityPower = abilityPower;
    this.armor = armor;
    this.interval = true;
  }
  useBasicAttack(target) {
    target.currentHealth -= this.attackPower;
    getEnemyHealthBar(target)
    promptItemSelectionOrLoseScreen(playerOne, currentEnemy)
    console.log(
      `${this.name}'s basic attack hit! ${target.name}'s HP is now at ${target.currentHealth}!`
    );
  }
  useAbilityPower(target) {
    target.currentHealth -= this.abilityPower;
    getEnemyHealthBar(target)
    promptItemSelectionOrLoseScreen(playerOne, currentEnemy)
    console.log(
      `${this.name}'s ability attack hit! ${target.name}'s HP is now at ${target.currentHealth}!`
    );
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
// ------------------Start of Class for Armor Items--------------------------
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
// ------------------End of Class for Armor Items--------------------------
// ======================================================================
// --------------------Start of Class For Enemy-----------------------------
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
      promptItemSelectionOrLoseScreen(playerOne, currentEnemy)
      getHealthBars(target)
      console.log(
        `${this.name}'s basic attack hit! ${target.name}'s HP is now at ${target.currentHealth}!`
      );
    } else {
      clearInterval(this.intervalId)
    }
  }
  useAbilityPower(target) {
    if(target.currentHealth >= 0 && this.currentHealth >= 0){
      target.currentHealth -= this.abilityPower;
      promptItemSelectionOrLoseScreen(playerOne, currentEnemy)
      getHealthBars(target)
      console.log(
        `${this.name}'s ability attack hit! ${target.name}'s HP is now at ${target.currentHealth}!`
      );
    } else {
      clearInterval(this.intervalId)
    }
  }
  startAttacking(target){
      this.intervalId = setInterval(()=> this.useBasicAttack(target), 1250);
      this.intervalId = setInterval(()=> this.useAbilityPower(target), 5500);
  }
}
// -------------- End of Enemy Class -----------------
// =============================================================
// ---------------- Create Player and Enemy --------------------
let playerOne = new Player("Matt");
// let currentEnemy = new Enemy("Wimpy Orc");
// console.log(currentEnemy);
let firstWeapon = new Weapon("Poopy Stick");
let firstArmor = new Armor("Paper Armor")
let firstAbility = new Ability("Water Bottle")

firstWeapon.boostPlayerAttack(playerOne);
firstArmor.boostPlayerMaxVitalityAndArmor(playerOne)
firstAbility.boostPlayerAbility(playerOne)

// currentEnemy.startAttacking(playerOne);
console.log(firstWeapon);
console.log(firstAbility);
console.log(firstArmor);
console.log(playerOne);
// console.log(currentEnemy);



// -------------------Select reward Item--------------------------
let $rewardItemDiv = $('.rewardItem')
let $rewardItemWeapon = $('#rewardWeapon')
let $rewardItemArmor = $('#rewardArmor')
let $rewardItemAbility = $('#rewardAbility')


// ------ Create reward function ------------
const createRewardItems = () =>{
  let rewardWeapon = new Weapon("Reward Weapon",);
  let rewardArmor = new Armor("Reward Armor")
  let rewardAbility = new Ability("Reward Ability")
  let $makeWeaponDiv = $('<div>').attr('id', 'rewardWeapon')
  let $makeArmorDiv = $('<div>').attr('id', 'rewardArmor')
  let $makeAbilityDiv = $('<div>').attr('id', 'rewardAbility')
  $makeWeaponDiv.addClass('rewardItem')
  $makeArmorDiv.addClass('rewardItem')
  $makeAbilityDiv.addClass('rewardItem')
  $('#winningItems').append($makeWeaponDiv)
  $('#winningItems').append($makeArmorDiv)
  $('#winningItems').append($makeAbilityDiv)
rewardWeapon.attackPower = rewardWeapon.attackPower * itemStatMultiplier
rewardArmor.vitality = rewardArmor.vitality * itemStatMultiplier
rewardArmor.armor = rewardArmor.armor * itemStatMultiplier
rewardAbility.abilityPower = rewardAbility.abilityPower * itemStatMultiplier

  let $rewardWeaponDescription = (`${rewardWeapon.name} it contains + ${rewardWeapon.attackPower} attack power.`)
  let $rewardArmorDescription  = (`${rewardArmor.name} it contains + ${rewardArmor.vitality} vitality and ${rewardArmor.armor} armor points.`)
  let $rewardAbilityDescription = (`${rewardAbility.name} it contains + ${rewardAbility.abilityPower} ability power.`)

  $('#rewardWeapon').text($rewardWeaponDescription)
  $('#rewardArmor').text($rewardArmorDescription)
  $('#rewardAbility').text($rewardAbilityDescription)


  const selectWeaponToEquip = () =>{
    $makeWeaponDiv.on('click', spawnNextEnemy)
    $makeWeaponDiv.on('click', (event) => {
      const $selectedTarget = $(event.target)
      const $selectedtargetsParent = $selectedTarget.parent()
      $selectedtargetsParent.hide()
      $('#itemOne').text($rewardWeaponDescription)
      playerOne.attackPower = 50;
      playerOne.currentHealth = playerOne.maxVitality
      rewardWeapon.boostPlayerAttack(playerOne)
      $makeWeaponDiv.remove()
      $makeArmorDiv.remove()
      $makeAbilityDiv.remove()
    })
  const selectArmorToEquip = () =>{
    $makeArmorDiv.on('click', spawnNextEnemy)
    $makeArmorDiv.on('click', (event) => {
      const $selectedTarget = $(event.target)
      const $selectedtargetsParent = $selectedTarget.parent()
      $selectedtargetsParent.hide()
      $('#itemTwo').text($rewardArmorDescription)
      playerOne.maxVitality = 100;
      playerOne.armor = 2;
      playerOne.currentHealth = playerOne.maxVitality
      rewardArmor.boostPlayerMaxVitalityAndArmor(playerOne)
      $makeWeaponDiv.remove()
      $makeArmorDiv.remove()
      $makeAbilityDiv.remove()
    })
  const selectAbilityToEquip = () =>{
    $makeAbilityDiv.on('click', spawnNextEnemy)
    $makeAbilityDiv.on('click', (event) => {
      const $selectedTarget = $(event.target)
      const $selectedtargetsParent = $selectedTarget.parent()
      $selectedtargetsParent.hide()
      $('#itemThree').text($rewardAbilityDescription)
      playerOne.abilityPower = 10;
      playerOne.currentHealth = playerOne.maxVitality
      rewardAbility.boostPlayerAbility(playerOne)
      $makeWeaponDiv.remove()
      $makeArmorDiv.remove()
      $makeAbilityDiv.remove()
    })
  }
  selectAbilityToEquip()
}
selectArmorToEquip()
}
selectWeaponToEquip()
spawnEnemyAfterItemSelection()

}

const spawnEnemyAfterItemSelection = () =>{
  $(".rewardItemDiv").on('click', spawnNextEnemy)
}


// -------------------End of Select reward Item--------------------------
// =====================================================================
// ----------Round Counter and Increase New Enemy Stats -----------------
let numOfEnemiesDefeated = 0
let enemyStatMultiplier = 1
let itemStatMultiplier = 1
let currentEnemy = null
const enemyNames = ['Wimpy Orc', "Medium Orc", "Large Ugly Orc", "Green Goblin"]

const spawnNextEnemy = () =>{
  currentEnemy = null
  currentEnemy = new Enemy(`${enemyNames[Math.floor(Math.random() * 3)]}`)
  currentEnemy.maxVitality = currentEnemy.maxVitality * enemyStatMultiplier
  currentEnemy.currentHealth = currentEnemy.maxVitality
  currentEnemy.attackPower = currentEnemy.attackPower * enemyStatMultiplier;
  currentEnemy.abilityPower = currentEnemy.abilityPower * enemyStatMultiplier;
  currentEnemy.armor = currentEnemy.armor * enemyStatMultiplier;
  getEnemyHealthBar(currentEnemy)
  console.log(currentEnemy)
  currentEnemy.startAttacking(playerOne)
}

$('#startGame').on('click',(event) => {
  const $selectedTarget = $(event.target)
  const $selectedtargetsParent = $selectedTarget.parent()
  $selectedtargetsParent.hide()
  spawnNextEnemy()
  })


// ----------- Win or lose scenario --------------
const promptItemSelectionOrLoseScreen = (user, target) =>{
  if (target.currentHealth <= 0 && user.currentHealth > 0){
    enemyStatMultiplier = enemyStatMultiplier += 0.5
    numOfEnemiesDefeated = numOfEnemiesDefeated += 0.75
    itemStatMultiplier = itemStatMultiplier += 1.75
    createRewardItems()
    $('#winningItems').show()
    //alert(`Congragulations! You defeated the ${target.name}. Select one of the three items displayed below!`)
  } else if (user.currentHealth <= 0 && target.currentHealth > 0){
    alert(`Wow you got destroyed by the ${target.name}! Better luck next time.`)
  }
}
//promptItemSelectionOrLoseScreen(playerOne, currentEnemy)

// ------------------Health Bars --------------------
const getHealthBars = (player) =>{
let getPlayerHealthPercentage =
  (player.currentHealth / player.maxVitality) * 100 + "%";
let $playerHealthBar = $(".healthBarValue").text(
  player.currentHealth + "/" + player.maxVitality
);
let $playerHealthBarFill = $(".healthBarFill").css({
  width: getPlayerHealthPercentage,
});
}

const getEnemyHealthBar = (enemy) =>{
let getEnemyHealthPercentage =
  (enemy.currentHealth / enemy.maxVitality) * 100 + "%";
let $enemyHealthBar = $(".enemyHealthBarValue").text(
  enemy.currentHealth + "/" + enemy.maxVitality
);
let $enemyHealthBarFill = $(".enemyHealthBarFill").css({
  width: getEnemyHealthPercentage,
});
}
// ------------------Health Bars --------------------

// ------- Player Attack Button Functions -----------
const playerUseBasicAttack = (user, target) =>{
  user.useBasicAttack(target)
}
const playerUseAbilityAttack = (user, target) =>{
  user.useAbilityPower(target)
}
// ------- End of Player Attack Button Functions -----------

// -------- phyical attack button now has a cooldown ------------
$("#playerPhysicalAttack").on("click", function () {
  let basicAttackBtn = $(this);
  playerUseBasicAttack(playerOne, currentEnemy)
  basicAttackBtn.prop("disabled", true);
  setTimeout(function () {
    basicAttackBtn.prop("disabled", false);
  }, 1000);
});

//  -------------ability attack button now has a cooldown ---------------
$("#playerAbilityAttack").on("click", function () {
  let abilityAttackBtn = $(this);
  playerUseAbilityAttack(playerOne, currentEnemy)
  abilityAttackBtn.prop("disabled", true);
  setTimeout(function () {
    abilityAttackBtn.prop("disabled", false);
  }, 5000);
});



$(() => {

});
