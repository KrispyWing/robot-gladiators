
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// Log the Players variable values
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

// This creates a function named "fight"

var fight = function() {
    // Alert players that the round is starting
    window.alert("Welcome to Robot Gladiators!");
    
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
    
};

//execute the fight function
fight();