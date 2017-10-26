//JSLab Part3
//Objects, Functions and more, oh my!
//Convert the variables relating to Grant and the user’s character into objects.

var player1 = 40;
var grantChirpus = 10;
var gamesPlayed = 0;



function startGame() {
    var greeting = prompt("Hello, Do You Think You Can Beat THE ALMIGHTY GRANT? Please Enter Yes or NO.").toLowerCase();
    if (greeting === "yes") {
        var playerName = prompt("Please type in your name.").toUpperCase();
        console.log("Ok, Lets Boogie!");
        startCombat(playerName);
    }
}

startGame();

function startCombat(playerName) {

    var player1 = {

        playeerName: name,
        health: 40,
        wins: 0,
        healCount: 0,
        heal: function(){
            this.health += Math.floor(Math.random() * 10) + 1;
            this.healCount++;
        }
        attackDamage: function () {
            return Math.floor(Math.random() * 3) + 1;
        }
    }
}
    
    var grantChirpus = {

        name: grantChirpus,
        health: 40,
        wins: 0,
        gLosses: 0,
        attackDamage: function () {
            return (Math.floor(Math.random() * 5) + 1);

        }
    }

    while (player1.health > 0 && grantChirpus.health > 0) {
        
        var keepPlaying = prompt("Would you like to Attack, Heal, or Quit?");
        if (keepPlaying === "attack"){
            player1.health -= grantChirpus.attackDamage();
            grantChirpus.health -= player1.attackDamage();
            console.log(playerName +  "your health remaining is: " + player1.health);
            console.log("The Almighty Grant has " + grantChirpus.health + " remaining.");
            if (0 >= grantChirpus){
                grantChirpus.gLosses++;
            }
            if (0 >= grantChirpus.health && grantChirpus.glosses < 3) {
                grantChirpus.health = 10;
            } else if (keepPlaying === "heal") {
                
            if (player1.healCount < 2){
                player1.heal();
                console.log( player1 + "has " + player1.health + " remaining!");
                grantChirpus.health -= player1.attackDamage();
                console.log( "The Chirpinator has " + grantChirpus.health + " remaining!");
                
            } else {
                prompt("Would you like to Attack, or Quit?");
            } 
        } else {
            console.log("GAME OVER!!!");
            if (grantChirpus.health < player1.health) {
                grantChirpus.health = 0;
            } else {
                player1.health = 0;
            }
            break;
            }
        }
            
    }

            if( grantChirpus.health <= 0 ) {
                player1.wins ++;
                console.log(playerName + " has WON!!!!");
            } else {
                grantChirpus.wins ++;
                console.log("The Almighty Grant Has WON!!!!");
            }
     var anotherRound = prompt("Would you like to Attack, or Quit?");
        if(anotherRound === "yes") {
            startGame();
        } else {
            console.log("Thank you, see you next time!");
        }

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    