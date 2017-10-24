//PART 2
//Expand by adding functions



var player1 = 40;
var grantChirpus = 10;
var gamesPlayed = 0;

startGame();
getDamage();
startCombat();

function startGame(){
    var greeting = prompt("Hello, Do You Think You Can Beat THE ALMIGHTY GRANT? Please Enter Yes or NO.");
    if(greeting === "yes"){
        var playerName = prompt("Please type in your name.").toUpperCase();
        console.log("Ok " + playerName + "Lets Boogie!");
        startCombat();
    }
}

    function getDamage () {
    return Math.floor(Math.random() * 5) + 1;
    }

function startCombat(){
    
    while(player1 > 0 && grantChirpus > 0 && gamesPlayed < 3){
        
        if(prompt("Would you like to ATTACK!!! or Quit?")=== "attack"){
            
            player1 = getDamage();
            grantChirpus = getDamage();
            console.log("You currently have " + player1 + " points!");
            console.log("The Almighty Grant has " + grantChirpus + " points!");
            
            if(player1 <= 0 && play > 0) {
                gamesPlayed += 1
                console.log("On to the next round!");
            }
            if (gamesPlayed < 3) {
                    player1 = 10;
                
            }
            
        }
            else {
            console.log("Goodbye! Have a Great Day!!!")
            break;

            }
            
        if (player1 > 0 && gamesPlayed <= 0) {
            console.log("The Almight Grant Has Won Again!!! Muwhahahaha");
        } 
            else if (player1 <= 0 && player1 > 0 && gamesPlayed === 3) {
            console.log("Congrats! You Have Won!!!!")
            }  
            
        
        
    }
    
}



