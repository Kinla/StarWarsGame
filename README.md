# StarWarsGame
### Overview

This is a simple Star Wars Themed RPG game where you can choose to be Obi-Wan Kenobi, Yoda, Vader or Rey. Your must defeat all 3 other to win the game!

Link to game: https://kinla.github.io/StarWarsGame/
- - -

### Techonologies
- HTML
- CSS / Bootstrap
- JavaScript / JQuery

- - -

### Game Design
##### Basic
1. When the game starts, the player will choose a character by clicking on the fighter's picture. The player will fight as that character for the rest of the game.

   * The player must then defeat all of the remaining fighters. Enemies are moved to the `opponents area`.

2. The player chooses an opponent by clicking on an enemy's picture.

   * Once the player selects an opponent, that enemy is moved to a `defender area`.

   * The player will now be able to click the `attack` button.
     * Whenever the player clicks `attack`, their character damages the defender. The opponent will lose `HP` (health points). These points are displayed at the bottom of the defender's picture. 
     * The opponent character will instantly counter the attack. When that happens, the player's character will lose some of their `HP`. These points are shown at the bottom of the player character's picture.

3. The player will keep hitting the attack button in an effort to defeat their opponent.

   * When the defender's `HP` is reduced to zero or below, remove the enemy from the `defender area`. The player character can now choose a new opponent.

4. The player wins the game by defeating all enemy characters. The player loses the game the game if their character's `HP` falls to zero or below.

##### Additional Notes

* Each character in the game has 3 attributes: `Health Points`, `Attack Power` and `Counter Attack Power`.

* Each time the player attacks, their character's Attack Power increases by its base Attack Power. 
  * For example, if the base Attack Power is 6, each attack will increase the Attack Power by 6 (12, 18, 24, 30 and so on).
  
* The enemy character only has `Counter Attack Power`. 
  * Unlike the player's `Attack Points`, `Counter Attack Power` never changes.

* The `Health Points`, `Attack Power` and `Counter Attack Power` of each character must differ.

* No characters in the game can heal or recover Health Points. 

* A winning player must pick their characters wisely by first fighting an enemy with low `Counter Attack Power`. This will allow them to grind `Attack Power` and to take on enemies before they lose all of their `Health Points`. Healing options would mess with this dynamic.

* Players will be able to win and lose the game no matter what character they choose. The challenge comes from picking the right enemies, not choosing the strongest player.

- - -

### Improvements

1. Once fighter is selected the "logo" would be moved towards the top of the right side coloumn or shrink to verticle. Currently taking up too much room
2. Try to give this game a mobile responsive design
3. Add HP bars.
4. Make it so that there is no `attack` button. You can just click on the defender's picture to kill them.
5. Change cursor to a light sabor on attaak
