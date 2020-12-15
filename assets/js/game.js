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
            
            //if we're not on the last enemy in the array
            if (playerHealth > 0 && i < enemyNames.length - 1) {

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

var shop = function() {
    //ask player what they would like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the shop? Please enter one: 'REFILL, 'UPGRADE', or 'LEAVE' to make a choice"
    );

    //switch to carry out the action
    switch (shopOptionPrompt) {
        case "refill":
        case "REFILL":
            if (playerMoney >= 7) {
            window.alert("Refilling the players health by 20 for 7 dollars.");
            //Increase health and decrease money
            playerHealth = playerHealth + 20;
            playerMoney = playerMoney - 7;
            }

            else {
                window.alert("You don't have enough money!");
            }
            break;
        
        case "upgrade":
        case "UPGRADE":
            if (playerMoney >= 7) {
            window.alert("Upgrading players attack power by 6 for 7 dollars.");

            //increase attack and decrese money
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough Money!");
            }
            break;

        case "leave":
        case "LEAVE":
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
