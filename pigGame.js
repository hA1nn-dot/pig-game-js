class Player{
    constructor(player){
        this.player = player;
        this.points = parseInt(document.querySelector(`#${player}__points`).innerHTML)
        this.currentPoints = parseInt(document.querySelector(`#${player}__currentPoints`).innerHTML)
        this.bg = document.querySelector(`.${player}`);
        this.winner = false;
        this.turn = false;
    }

    getPoints() {
        return this.points;
    }

    getCurrentPoints(){
        return this.currentPoints;
    }

    changeTurn(){
        this.turn = !this.turn;
        if( this.turn ){
            this.bg.classList.add("player--active");
        }else{
            this.bg.classList.remove("player--active");
        }
    }

    setPoints(__points){
        this.points += __points;
        document.querySelector(`#${this.player}__points`).innerHTML = this.points;
    }

    setCurrentPoints(__currentPoints){
        this.currentPoints = this.currentPoints + __currentPoints;
        document.querySelector(`#${this.player}__currentPoints`).innerHTML = this.currentPoints;
    }

    resetCurrentPoints(){
        this.currentPoints = 0;
        document.querySelector(`#${this.player}__currentPoints`).innerHTML = this.currentPoints;
    }
}

class Dice{
    constructor(dice){
        this.dice = dice;
        this.number = 1;
    }

    roll(){
        this.number = Math.floor((Math.random() * 6)) + 1;
        this.dice.src = "./assets/dice-" + this.number + ".svg"
    }

    getNumber(){
        return this.number;
    }
}

function start(){
    let btn_roll = document.querySelector(".dice__roll");
    let btn_hold = document.querySelector(".dice__hold");
    
    //Crear Dado
    let dice = new Dice(document.getElementById("dice__img"));

    const TOTAL_TURNS = 5;
    let currentTurn = 1;
    //Crear jugadores
    let player1 = new Player("player1");
    let player2 = new Player("player2");

    //Beginning...
    player1.changeTurn()
   
    btn_roll.addEventListener("click",function() {
        if (player1.turn){
            dice.roll();
            let number = dice.getNumber();
            if (number == 1){   //Lost currentPoints
                player1.resetCurrentPoints();
                player1.changeTurn()
                player2.changeTurn();
            }else{
                player1.setCurrentPoints(number);
            }
        }else if (player2.turn){
            dice.roll();
            let number = dice.getNumber();
            if (number == 1){   //Lost currentPoints
                player2.resetCurrentPoints();
                player2.changeTurn();
                player1.changeTurn();
                console.log("Termina turno " + currentTurn);
                if(currentTurn >= TOTAL_TURNS){
                    console.log("Termina juego...");
                }else {
                    currentTurn++;
                }

            }else{
                player2.setCurrentPoints(number);
            }
            
        }
    });

    btn_hold.addEventListener("click", function (){
        if(player1.turn){
            player1.setPoints(player1.getCurrentPoints());
            player1.resetCurrentPoints();
            player1.changeTurn();
            player2.changeTurn();
        }else if (player2.turn){
            player2.setPoints(player2.getCurrentPoints());
            player2.resetCurrentPoints();
            player2.changeTurn();
            player1.changeTurn();
            console.log("Termina turno " + currentTurn);
            currentTurn++;
        }
        if(currentTurn >= TOTAL_TURNS){
            console.log("Termina juego...");
        }
    });

}

start()
