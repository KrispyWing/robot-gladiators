// Game States
// WIN - the player has defeated all enemy robots
//  * Fight all enemy robots
//  * Defeat each enemy robot
// LOSE - Players Robot health is zero or less


var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
}

//function to set name
var getPlayerName = function() {
    var name = "";
    while (name === "" || name === null ) {
        name = prompt("What is your Robot's name?");        
    }
    console.log("Your robot's name is " + name);
    return name;
};

var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -=7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -=7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    }
};

// Log the Players variable values
console.log(playerInfo.name, playerInfo.attack, playerInfo.health);

var enemyInfo = [
{
    name: "Roberto",
    attack: randomNumber(10, 14)
},
{
    name: "Android Amy",
    attack: randomNumber(10, 14)
},
{
    name: "Robo Trumble",
    attack: randomNumber(10, 14)
}
];

var fightOrSkip = function() {
    //ask player if they would like to fight or skip us ing fightOrSkip function
    var promptFight = window.prompt("Would you like to  fight or skip this battle? Enter FIGHT or SKIP to choose.");

    if (promptFight === "" || promptFight === null) {
        window.alert("You need to provide a valid answer! Please try again.");
        return fightOrSkip();
    }
    
    promptFight = promptFight.toLowerCase();

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to skip the fight?");
    }

    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping
      playerInfo.money = playerInfo.money - 10;
      return true;
    }    
}

// This creates a function named "fight"

var fight = function(enemy) {
    //keep track of who goes first
    var isPlayerTurn = true;

    if (Math.random() > 0.5) {
        isPlayerTurn = false;
    }

    //repeat and execute while enemy robot is alive
    while(enemy.health > 0 && playerInfo.health > 0) {
                
        if (isPlayerTurn) {
            //call function to ask player if they want to fight or skip
            if (fightOrSkip()) {
                //if true leave fight by breaking the loop
                break;
            }
            // Subtract the playerInfo.attack value from the enemy.health value and log it
            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

            enemy.health = Math.max(0, enemy.health - damage);
            console.log(playerInfo.name + " attacked " + enemy.name + " for " + damage + " damage. " + enemy.name + " now has " + enemy.health + " health left.");
            // Check the Enemy's health
            if (enemy.health <= 0) {
                window.alert(enemy.name + " has died!");

                // Award player money for Winning
                playerInfo.money = playerInfo.money + 20

                // leave while() loop since enemy is dead
                break;               
            } else {
                window.alert(enemy.name + " still has " + enemy.health + " health left.");
            }
        } else {    
            // subtract the enemy.attack value from the playerInfo.health Value and log it
            var damage = randomNumber(enemy.attack - 3, enemy.attack);
            playerInfo.health = Math.max(0, playerInfo.health - damage);
            console.log(enemy.name + " attacked " + playerInfo.name + " for " + damage + " damage. " + playerInfo.name + " now has " + playerInfo.health + " health left.");
            // Check the players Health
            if (playerInfo.health <= 0) {
                window.alert(playerInfo.name + " has died!");
                // leave while() loop if player is dead
                break;        
            } else {
                window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
            }   
        }
        isPlayerTurn = !isPlayerTurn;
    }    
};

//Function to start a new game
var startGame = function() {
    //reset player stats
    playerInfo.reset();
    
    for(var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {

            // Let player know what Round they are in
            window.alert("Welcome to Robot Gladiators Round " + (i + 1) );
        
            // Pick new Enemy to fight based on the index of enemy.names array  
            var pickedEnemyObj = enemyInfo[i];
        
            //rest enemy.health before starting new fight
            pickedEnemyObj.health = randomNumber(40, 60);

            // Use debugger to pause script from running and check what going on at that moment in the code
            // debugger;

            // Pass the pickedenemy.name variable value into the fight function where it will assume the enemy.name parameter
            fight(pickedEnemyObj);
            
            //if we're not on the last enemy in the array
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {

                //ask player if they want to enter the store() function
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

                //if yes take them to the store() function
                if (storeConfirm) {
                    shop();
                }
            }
        }

        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    // after loops ends, player is either out of health or enemies
    endGame();
}

// function to end the game
var endGame = function() {
    //if the player is still alive, player wins
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }
    // ask player if they would like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm) {
        // restart game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back Soon!");
    }
}

var shop = function() {
    //ask player what they would like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the shop? Please enter one: 1 for 'REFILL, 2 for 'UPGRADE', or 3 for 'LEAVE' to make a choice"
    );
    
    // change reponse from string to integer
    shopOptionPrompt = parseInt(shopOptionPrompt);

    //switch to carry out the action
    switch (shopOptionPrompt) {
        case 1:
            playerInfo.refillHealth();
            break;
        
        case 2:
            playerInfo.upgradeAttack();
            break;

        case 3:
            window.alert("Leaving the store.");

            // do nothing, so function ends
            break;
        
        default:
            window.alert("You did not pick a valid option, Try Again.");

            // call shop() function again to force player to pick a valid option
            shop();
            break;
    }
}

// Start the game when the page loads
startGame();
