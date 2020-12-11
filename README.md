# Lucky Dungeon
by Matt Duarte

## Wireframe
![alt text](https://i.imgur.com/82sIfzV.png "Wireframe")

## User Story
1. The user clicks start on main page to start game.
2. The battle will begin and the user has 3 options on which abilities to perform.
3. The 3 buttons can only be activated with mouse onClick events.
4. Basic attack is represented by Attack Power property and can be preformed every 1 second.
5. Ability Attack is represented by Ability Power and can be performed every 3 seconds.
6. Healing Ability will heal the user represented by the Healing value on the armor.
7. Vatality is the user's health points and will increase the max health points.
8. The enemy will have the same three abilities and same length of cooldowns.
9. If the user dies the lose screen will apear allowing user to restart the game.
10. If the user kills the enemy a reward items page will appear. 
11. 3 randomly generated Items will appear and only 1 can be selected.
12. The new rewarded item will boost the user's main stats on the bottom of the game.
13. The item will then be placed in the item box next to the player stats.
14. The game will repeat stage 1 the only thing is the enemies get harder the more you advance.
15. The goal is to see how many enemies you can defeat in one run.

## How the game works
1. The player's main stats are always the same every game.
2. The three first items have the same name but roll differnt stats that are in a range.
3. The first enemy is relativly weak but will scale pretty fast.
4. The enemy skills are rolled differently every time and also has a range of values.
5. Every enemy defeated will be added to a counter at the top, this will then multiply the rewared items and the next enemy stats.
6. Later in the game the rewarded items can be worse then the ones currently equipped, but you have to select a new item this makes the game more challenging.
7. The game is to see how lucky you can get with item rolls and the enemy stats rolls, to see how far you can get in the game.

## Struggles 
1. I wanted to have elemental effects and armor mitigation, but it was getting to complicated and messing up the rest of my code.
So I scrapped the idea, I then added the heal ability which I enjoy more.
2. Using css to have all the divs in the right spot took a while and was really annoying with everything being nested in eachother.
3. I had a problem where multiple enemies will spawn and this took a while to debug.
4. Cooldowns were a little challenging and took some time to figure out.

## Wins
1. I was really happy how the Health Bars came out and the button cooldowns.
2. The item selection and DOM manipulation was a huge win for me.
3. I really like the hit and heal values appearing on the sprites, because I was not a fan of the combat log.

## Some Functionality
1. To get the random stats I did "Min + Math.floor(Math.random() * (Max - Min + 1))" This will randomly roll a number in the range.
2. Item rewards are divs thazt get created when the enemy dies then deleted after the item is picked.
3. Cooldown was setting btn.prop('disabled', true) then setting it back to false with setTimeout.
4. A lot of jQuery was used with .show() and .hide() to display other screens or attack hit indicators.
5. Enemy atuo attacking with delay was used with setInterval, thanks TA Nate for this one.

## What I want to add
1. I really want to try and include elemental effects like fire, earth, and water.
2. I want to add some combat animations and sound effects. 
3. I want items to each have an image to represent them.
4. Add new stats like crit chance, life steal and attack speed.
5. Add boss fights that reward legendary items.
6. Add an inventory that allows you to save all previous items. 

## Image Sources
Charecters Used
1. Anime - seven deadly sins
2. Anime - Black Clover
3. Game - Diablo 3

