var player1 = 40;
var grantChirpus = 10;
var gamesPlayed = 0;




//start with a greeting to potential player
var greeting = prompt("Hello, Do You Think You Can Beat THE ALMIGHTY GRANT? Please ENTER 1 for Yes, 2 for NO.");

//ask user for their name
if (greeting === "1") {
    var userName = prompt("OK, please tell me your name").toUpperCase();
    var startGame = prompt("Thanks " + userName + "!! To Start, Please Press ENTER.");
} else {
    var goodBye = prompt("Have A Great Day!!");
}

//Code for Game
while (player1 > 0 && grantChirpus > 0 && gamesPlayed < 3) {

    grantChirpus -= (Math.floor(Math.random() * 2) + 1);
    player1 -= (Math.floor(Math.random() * 2) + 1);
    console.log("The Chirpinator's Score is " + grantChirpus);
    console.log(userName + ", Your Score is " + player1);
   
    if (grantChirpus <= 0) {
        gamesPlayed ++;
        console.log("Lets Play Again!");
        if (gamesPlayed < 3) {
            grantChirpus = 10;
        }
        if (gamesPlayed >= 3 && grantChirpus <= 0 && player1 >= 0) {
            console.log("THE ALMIGHTY GRANT HAS WON!!");
        } else if (gamesPlayed >= 3 && grantChirpus >= 0 && player1 <= 0) {
            console.log("CONGRATS " + userName + " YOU HAVE WON!!");

            }
     
    
    }
    
    
    
    
}
    


