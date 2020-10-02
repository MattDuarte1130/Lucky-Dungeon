// Class for Player
class Player {
  constructor(name,maxVitality = 100, currentHealth, attackPower = 5,abilityPower = 12, armor = 2){
    this.name = name
    this.maxVitality = maxVitality
    this.currentHealth = maxVitality
    this.attackPower = attackPower
    this.abilityPower = abilityPower
    this.armor = armor
  }
  useBasicAttack(enemy){
      enemy.currentHealth += enemy.armor -= this.attackPower
      console.log("Your attack hit! " + enemy.name + "'s HP is now at " + enemy.currentHealth + "!")
    }
    useAbilityPower(enemy){
        enemy.currentHealth -= this.abilityPower
        console.log("Your ability hit! " + enemy.name + "'s HP is now at " + enemy.currentHealth + "!")
    }
  }
  // Class for Weapon Items
  class Weapon {
    constructor(name, attackPower){
      this.name = name
      this.attackPower = 2 + Math.floor((Math.random()) * ((2 - 1) + 1))
    }
    boostPlayerAttack(player){
        player.attackPower += this.attackPower
        console.log(`The ${this.name} boosted ${player.name} attack power by ${this.attackPower}!`)
      }
    }

// Class For Enemy
class Enemy {
  constructor(name, maxVitality = 75 + Math.floor((Math.random()) * ((90 - 75) + 1)), currentHealth, attackPower, abilityPower, armor){
    this.name = name
    this.maxVitality = maxVitality
    this.currentHealth = maxVitality
    this.attackPower = 1 + Math.floor((Math.random()) * ((2 - 1) + 1))
    this.abilityPower = 10 + Math.floor((Math.random()) * ((10 - 7) + 1))
    this.armor = 1 + Math.floor((Math.random()) * ((3 - 1) + 1))
  }
  useBasicAttack(enemy){
      enemy.currentHealth += enemy.armor -= this.attackPower
      console.log("Your attack hit! " + enemy.name + "'s HP is now at " + enemy.currentHealth + "!")
    }
    useAbilityPower(enemy){
        enemy.currentHealth -= this.abilityPower
        console.log("Your ability hit! " + enemy.name + "'s HP is now at " + enemy.currentHealth + "!")
    }
  }

  let playerOne = new Player("Matt");
  let enemyOne = new Enemy("Wimpy Orc");
  let firstWeapon = new Weapon("Poopy Twig")
  
  console.log(playerOne)
  console.log(enemyOne)
  console.log(firstWeapon)



let getPlayerHealthPercentage = playerOne.currentHealth / playerOne.maxVitality * 100 + "%"
let $playerHealthBar = $('.healthBarValue').text(playerOne.currentHealth + "/" + playerOne.maxVitality)
let $playerHealthBarFill = $('.healthBarFill').css({'width': getPlayerHealthPercentage})


let getEnemyHealthPercentage = enemyOne.currentHealth / enemyOne.maxVitality * 100 + "%"
let $enemyHealthBar = $('.enemyHealthBarValue').text(enemyOne.currentHealth + "/" + enemyOne.maxVitality)
let $enemyHealthBarFill = $('.enemyHealthBarFill').css({'width': getEnemyHealthPercentage})

const playerBasicAttack = (enemy) =>{
  playerOne.useBasicAttack(enemy)
}

// phyical attack button now has a cooldown
$('#playerPhysicalAttack').on('click', function(){
  let basicAttackBtn = $(this);
  basicAttackBtn.prop('disabled', true);
  setTimeout(function(){
    basicAttackBtn.prop('disabled', false);
  }, 1000);
});

// ability attack button now has a cooldown
$('#playerAbilityAttack').on('click', function(){
  let abilityAttackBtn = $(this);
  abilityAttackBtn.prop('disabled', true);
  setTimeout(function(){
    abilityAttackBtn.prop('disabled', false);
  }, 5000);
});



  $(()=>{

  });
