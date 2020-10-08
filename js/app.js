// --------------- Start of Class for Player ----------------------
class Player {
  constructor(
    name,
    maxVitality = 100,
    currentHealth,
    attackPower = 10,
    abilityPower = 15,
    healing = 7
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
    $('#logPlayerBasicAttack').text(`-${this.attackPower}`);
    setTimeout(function(){$('#logPlayerBasicAttack').text("")}, 900)
  }
  useAbilityPower(target) {
    target.currentHealth -= this.abilityPower;
    getEnemyHealthBar(target);
    promptItemSelectionOrLoseScreen(playerOne, currentEnemy);
    $('#logPlayerAbilityAttack').text(
      `-${this.abilityPower}`
    );
    setTimeout(function(){$('#logPlayerAbilityAttack').text("")}, 1000)
  }
  useHealPower(user){
    if((this.currentHealth + this.healing) < this.maxVitality){
    this.currentHealth += this.healing
    $('#logPlayerHealAbility').text(
      `+${this.healing}`
    );
    setTimeout(function(){$('#logPlayerHealAbility').text("")}, 1000)
  } else {
    this.currentHealth = this.maxVitality
    $('#logPlayerHealAbility').text(
      `+${this.healing}`
    );
    setTimeout(function(){$('#logPlayerHealAbility').text("")}, 1000)
  }
}
}
// --------------- -------End of Class for Player ----------------------
// ======================================================================
// ------------------- Start of Class for Weapon Items -----------------------
class Weapon {
  constructor(name, attackPower) {
    this.name = name;
    this.attackPower = 2 + Math.floor(Math.random() * (5 - 2 + 1));
  }
  boostPlayerAttack(player) {
    player.attackPower += this.attackPower;
  }
}
// ------------------- End of Class for Weapon Items -----------------------
// ======================================================================
// ------------------ Start of Class for Ability Items ------------------
class Ability {
  constructor(name, abilityPower) {
    this.name = name;
    this.abilityPower = 2 + Math.floor(Math.random() * (7 - 2 + 1));
  }
  boostPlayerAbility(player) {
    player.abilityPower += this.abilityPower;
  }
}
// ------------------ End of Class for Ability Items ------------------
// ======================================================================
// ------------------Start of Class for healing Items--------------------------
class Armor {
  constructor(name, vitality, healing) {
    this.name = name;
    this.vitality = 10 + Math.floor(Math.random() * (18 - 10 + 1));
    this.healing = 5 + Math.floor(Math.random() * (11 - 5 + 1));
  }
  boostPlayerMaxVitalityAndHealing(player) {
    player.maxVitality += this.vitality;
    player.healing += this.healing;
    player.currentHealth += this.vitality;
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
    this.attackPower = 5 + Math.floor(Math.random() * (10 - 5 + 1));
    this.abilityPower = 5 + Math.floor(Math.random() * (14 - 5 + 1));
    this.healing = 5 + Math.floor(Math.random() * (14 - 5 + 1));
  }
  useBasicAttack(target) {
    if (target.currentHealth > 0 && this.currentHealth > 0) {
      target.currentHealth -= this.attackPower;
      promptItemSelectionOrLoseScreen(playerOne, currentEnemy);
      getHealthBars(target);
      $('#logEnemyBasicAttack').text(
        `-${this.attackPower}`
      );
      setTimeout(function(){$('#logEnemyBasicAttack').text("")}, 900)
    } else {
      clearInterval(this.intervalId);
    }
  }
  useAbilityPower(target) {
    if (target.currentHealth > 0 && this.currentHealth > 0) {
      target.currentHealth -= this.abilityPower;
      promptItemSelectionOrLoseScreen(playerOne, currentEnemy);
      getHealthBars(target);
      $('#logEnemyAbilityAttack').text(
        `-${this.abilityPower}`
      );
      setTimeout(function(){$('#logEnemyAbilityAttack').text("")}, 1000)
    } else {
      clearInterval(this.intervalId);
    }
  }
  useHealPower(target){
    if (target.currentHealth > 0 && this.currentHealth > 0) {
      this.currentHealth += this.healing;
      $('#logEnemyHealAbility').text(
        `+${this.healing}`);
        setTimeout(function(){$('#logEnemyHealAbility').text("")}, 1000)
      getEnemyHealthBar(currentEnemy)
      promptItemSelectionOrLoseScreen(playerOne, currentEnemy);
    } else {
      clearInterval(this.intervalId);
    }
  }
  startAttacking(target) {
    this.intervalId = setInterval(() => this.useBasicAttack(target), 1250);
    this.intervalId = setInterval(() => this.useAbilityPower(target), 3500);
    this.intervalId = setInterval(() => this.useHealPower(target), 5500);
  }
}
// -------------- End of Enemy Class -----------------
// =============================================================
// ---------------- Create Player--------------------
let playerOne = new Player("Lucky Hero");
let firstWeapon = new Weapon("Poopy Stick");
let firstArmor = new Armor("Paper armor");
let firstAbility = new Ability("Water Bottle");
$('#playerName').text(`${playerOne.name}`)

firstWeapon.boostPlayerAttack(playerOne);
firstArmor.boostPlayerMaxVitalityAndHealing(playerOne);
firstAbility.boostPlayerAbility(playerOne);

let $firstWeaponDescription = `+ ${firstWeapon.attackPower} attack power`;
let $firstArmorDescription = `+ ${firstArmor.vitality} vitality`;
let $firstArmorDescription2 = `+ ${firstArmor.healing} healing`;
let $firstAbilityDescription = `+ ${firstAbility.abilityPower} ability power`;
$("#itemBoxWeaponName").text(`${firstWeapon.name}`);
$('#itemBoxWeaponDescription').text($firstWeaponDescription)
$("#itemBoxArmorName").text(`${firstArmor.name}`);
$('#itemBoxArmorDescription').text($firstArmorDescription)
$('#itemBoxArmorDescription2').text($firstArmorDescription2)
$("#itemBoxAbilityName").text(`${firstAbility.name}`);
$('#itemBoxAbilityDescription').text($firstAbilityDescription)


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
  $makeWeaponDiv.append($("<h2>").attr("id", "weaponName"))
  $makeWeaponDiv.append($("<p>").attr("id", "weaponDescription"))

  let $makeArmorDiv = $("<div>").attr("id", "rewardArmor");
  $makeArmorDiv.append($("<h2>").attr("id", "armorName"))
  $makeArmorDiv.append($("<p>").attr("id", "armorDescription"))
  $makeArmorDiv.append($("<p>").attr("id", "armorDescription2"))

  let $makeAbilityDiv = $("<div>").attr("id", "rewardAbility");
  $makeAbilityDiv.append($("<h2>").attr("id", "abilityName"))
  $makeAbilityDiv.append($("<p>").attr("id", "abilityDescription"))

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

  let $rewardWeaponDescription = `+ ${rewardWeapon.attackPower} attack power`;
  let $rewardArmorDescription = `+ ${rewardArmor.vitality} vitality`;
  let $rewardArmorDescription2 = `+ ${rewardArmor.healing} healing`;
  let $rewardAbilityDescription = `+ ${rewardAbility.abilityPower} ability power`;

  $("#weaponDescription").text($rewardWeaponDescription);
  $("#armorDescription").text($rewardArmorDescription);
  $("#armorDescription2").text($rewardArmorDescription2)
  $("#abilityDescription").text($rewardAbilityDescription);

  $("#weaponName").text(`${rewardWeapon.name}`);
  $("#armorName").text(`${rewardArmor.name}`);
  $("#abilityName").text(`${rewardAbility.name}`);

  const selectWeaponToEquip = () => {
    $makeWeaponDiv.one("click", spawnNextEnemy);
    $makeWeaponDiv.one("click", (event) => {
      const $selectedTarget = $(event.target);
      const $selectedtargetsParent = $selectedTarget.parent();
      $selectedtargetsParent.hide();
      $("#itemBoxWeaponName").text(`${rewardWeapon.name}`);
      $('#itemBoxWeaponDescription').text($rewardWeaponDescription)
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
      $makeArmorDiv.one("click", spawnNextEnemy);
      $makeArmorDiv.one("click", (event) => {
        const $selectedTarget = $(event.target);
        const $selectedtargetsParent = $selectedTarget.parent();
        $selectedtargetsParent.hide();
        $("#itemBoxArmorName").text(`${rewardArmor.name}`);
        $('#itemBoxArmorDescription').text($rewardArmorDescription)
        $('#itemBoxArmorDescription2').text($rewardArmorDescription2)
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
        $makeAbilityDiv.one("click", spawnNextEnemy);
        $makeAbilityDiv.one("click", (event) => {
          const $selectedTarget = $(event.target);
          const $selectedtargetsParent = $selectedTarget.parent();
          $selectedtargetsParent.hide();
          $("#itemBoxAbilityName").text(`${rewardAbility.name}`);
          $('#itemBoxAbilityDescription').text($rewardAbilityDescription)
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
  $(".rewardItemDiv").one("click", spawnNextEnemy);
};

// -------------------End of Select reward Item--------------------------
// =====================================================================
// ----------Round Counter and Increase New Enemy Stats -----------------
let numOfEnemiesDefeated = 0;
let enemyStatMultiplier = 1;
let itemStatMultiplier = 1;
let currentEnemy = null;

const roundCounterDisplay = () =>{
  $(".numOfEnimiesDefeatedDisplay").text(`Enemies Defeated: ${numOfEnemiesDefeated}`)
}

const spawnNextEnemy = () => {
  $('.combatLog').text('')
  $('.enemyContainer').css({'background-image': 'url(css/img/' + enemyPics[Math.floor(Math.random() * enemyPics.length)] + ')'});
  roundCounterDisplay()
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
  $('#container').show()
  spawnNextEnemy();
  getHealthBars(playerOne);
  getPlayerStats();
});

// ----------- Win or lose scenario --------------
const promptItemSelectionOrLoseScreen = (user, target) => {
  if (target.currentHealth <= 0 && user.currentHealth > 0) {
    enemyStatMultiplier += 0.5;
    numOfEnemiesDefeated++;
    itemStatMultiplier += 1.5;
    createRewardItems();
    $("#winningItems").show();
    //alert(`Congragulations! You defeated the ${target.name}. Select one of the three items displayed below!`)
  } else if (user.currentHealth <= 0 && target.currentHealth > 0) {
    $('#container').hide()
    $('#losingScreen').show()
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
    width: getPlayerHealthPercentage
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
const resetPlayerCoolDowns = () =>{
  $('.playerBtn').prop('disabled', false);
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
  }, 3000);
});

//-----------------Heal ability button ---------------------------
$("#playerHealAbility").on("click", function () {
  let useHealBtn = $(this);
  playerUseHealingAbility(playerOne)
  getHealthBars(playerOne);
  useHealBtn.prop("disabled", true);
  setTimeout(function () {
    useHealBtn.prop("disabled", false);
  }, 5000);
});

//-------------------Arrays for Item Names and enemy Names ---------------------
const enemyNames = [
  "Wimpy Orc",
  "Medium Orc",
  "Large Ugly Orc",
  "Green Goblin",
  "Sneaky Thief",
  "Evil Ninja",
  "Brolic Hobo",
  "Kanye West",
  "Shrek",
  "The Joker",
  "Thanos",
  "Diablo",
  "Federal Taxes",
  "Covid-19",
  "Too Many Carbs",
  "Enemy With A Bad Name",
  "Dr. Doofenshmirtz",
  "Wario",
  "Waluigi",
  "Gary",
  "Gym Leader",
  "Akatsuki Member",
  "Madara",
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
  "Broken Armor",
  "Iron Armor",
  "Gold Armor",
  "Diamond Armor",
  "Chain Armor",
  "Cloth Armor",
  "Steel Skirt",
  "Tree Bark",
  "Stark's Suit",
  "Captain's Shield",
];

const abilityNames = [
  "Flamethrower",
  "Water Hose",
  "Power Washer",
  "Sprinkler",
  "Leaf Blower",
  "Blow Horn",
  "Charizard",
  "Water Bending Scroll",
  "Dragon Warrior Scroll",
  "Dominos Pizza Box",
];

const enemyPics = ['BarbGame.png', 'devilGame.png', 'diabloGame.png', 'wizGame.png']

$(() => {
  $('#container').hide()
const $openBtn = $('#openModal');
const $modal = $('#modal');
const $closeBtn = $('#close');
const openModal = () => {
  $modal.css('display', 'block');
}
const closeModal = () => {
  $modal.css('display', 'none');
}
$openBtn.on('click', openModal);
$closeBtn.on('click', closeModal);
});
