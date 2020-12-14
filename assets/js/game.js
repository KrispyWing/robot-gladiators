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
    // Alert players that the round is starting
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    //if the player chooses to fight then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {    
        // Subtract the playerAttack value from the enemyHealth value and log it
        enemyHealth = enemyHealth - playerAttack;
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health left.");
        // Check the Enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");        
    }   
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

        // subtract the enemyAttack value from the playerHealth Value and log it
        playerHealth = playerHealth - enemyAttack;
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health left.");
        // Check the players Health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");        
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }   
    }

    // if the player chooses to skip
    else if (promptFight === "skip"  || promptFight === "SKIP") {
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you want to skip the fight?");
        //if yes (true), leave fight
        if (confirmSkip) {
        window.alert(playerName + " has chosen to skip the fight!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 2;
        }
        // if no (false), ask question again by running fight() again
        else {
            fight()
        }        
    }
    else {
        window.alert("You need to choose a valid option. Try Again!");
    }
};

//execute the fight function
for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
} 
