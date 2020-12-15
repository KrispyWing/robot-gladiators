// Game States
// WIN - the player has defeated all enemy robots
//  * Fight all enemy robots
//  * Defeat each enemy robot
// LOSE - Players Robot health is zero or less


var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// Log the Players variable values
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// This creates a function named "fight"

var fight = function(enemyName) {
    //repeat and execute while enemy robot is alive

    while(enemyHealth > 0 && playerHealth > 0) {
    
    // ask player if they would like to fight or run
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    // if the player chooses to skip confirm and then stop the loop
    if (promptFight === "skip"  || promptFight === "SKIP") {
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you want to skip the fight?");
        //if yes (true), leave fight
        if (confirmSkip) {
        window.alert(playerName + " has chosen to skip the fight!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
        }                
    }
    
        // Subtract the playerAttack value from the enemyHealth value and log it
        enemyHealth = enemyHealth - playerAttack;
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health left.");
        // Check the Enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");

            // Award player money for Winning
            playerMoney = playerMoney + 20

            // leave while() loop since enemy is dead
            break;               
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // subtract the enemyAttack value from the playerHealth Value and log it
        playerHealth = playerHealth - enemyAttack;
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health left.");
        // Check the players Health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            // leave while() loop if player is dead
            break;        
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }   
    }    
};

//Function to start a new game
var startGame = function() {
    //reset player stats
    playerHealth = 100;
    playerAttack - 10;
    playerMoney = 10;

    for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {

            // Let player know what Round they are in
            window.alert("Welcome to Robot Gladiators Round " + (i + 1) );
        
            // Pick new Enemy to fight based on the index of enemyNames array  
            var pickedEnemyName = enemyNames[i];
        
            //rest enemyHealth before starting new fight
            enemyHealth = 50;

            // Use debugger to pause script from running and check what going on at that moment in the code
            // debugger;

            // Pass the pickedEnemyName variable value into the fight function where it will assume the enemyName parameter
            fight(pickedEnemyName);
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
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("YOu've lost your robot in battle.");
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

// Start the game when the page loads
startGame();
