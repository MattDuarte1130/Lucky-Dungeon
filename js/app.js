// Class for Player
class Player {
  constructor(name,vitality = 100,attackPower = 5,abilityPower = 12, armor = 2){
    this.name = name
    this.vitality = vitality
    this.attackPower = attackPower
    this.abilityPower = abilityPower
    this.armor = armor
  }
  useBasicAttack(enemy){
      enemy.vitality += enemy.armor -= this.attackPower
      console.log("Your attack hit! " + enemy.name + "'s HP is now at " + enemy.vitality + "!")
    }
    useAbilityPower(enemy){
        enemy.vitality -= this.abilityPower
        console.log("Your ability hit! " + enemy.name + "'s HP is now at " + enemy.vitality + "!")
    }
  }

// Class For Enemy
class Enemy {
  constructor(name, vitality, attackPower, abilityPower, armor){
    this.name = name
    this.vitality = 75 + Math.floor((Math.random()) * ((90 - 75) + 1))
    this.attackPower = 1 + Math.floor((Math.random()) * ((2 - 1) + 1))
    this.abilityPower = 10 + Math.floor((Math.random()) * ((10 - 7) + 1))
    this.armor = 1 + Math.floor((Math.random()) * ((3 - 1) + 1))
  }
  useBasicAttack(enemy){
      enemy.vitality += enemy.armor -= this.attackPower
      console.log("Your attack hit! " + enemy.name + "'s HP is now at " + enemy.vitality + "!")
    }
    useAbilityPower(enemy){
        enemy.vitality -= this.abilityPower
        console.log("Your ability hit! " + enemy.name + "'s HP is now at " + enemy.vitality + "!")
    }
  }

  // Class Health Bar




  let playerOne = new Player("USS Schwarzenegger");
  let enemyOne = new Enemy("Wimpy Orc");
  console.log(playerOne)
  console.log(enemyOne)

  console.log(playerOne.useBasicAttack(enemyOne))
  console.log(playerOne.useAbilityPower(enemyOne))

  $(()=>{

  })
