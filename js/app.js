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

  // Class Health Bar




  let playerOne = new Player("Matt");
  let enemyOne = new Enemy("Wimpy Orc");
  console.log(playerOne)
  console.log(enemyOne)

  console.log(playerOne.useBasicAttack(enemyOne))
  console.log(enemyOne.useAbilityPower(playerOne))


let getPlayerHealthPercentage = playerOne.currentHealth / playerOne.maxVitality * 100 + "%"
let $playerHealthBar = $('.healthBarValue').text(playerOne.currentHealth + "/" + playerOne.maxVitality)
let $playerHealthBarFill = $('.healthBarFill').css({'width': getPlayerHealthPercentage})



let getEnemyHealthPercentage = enemyOne.currentHealth / enemyOne.maxVitality * 100 + "%"
let $enemyHealthBar = $('.enemyHealthBarValue').text(enemyOne.currentHealth + "/" + enemyOne.maxVitality)
let $enemyHealthBarFill = $('.enemyHealthBarFill').css({'width': getEnemyHealthPercentage})






  $(()=>{

  })
