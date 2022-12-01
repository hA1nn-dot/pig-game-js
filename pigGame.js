class Player{
    constructor(player){
        this.player = player;
        this.points = parseInt(document.querySelector(`#${player}__points`).innerHTML)
        this.currentPoints = parseInt(document.querySelector(`#${player}__currentPoints`).innerHTML)
        this.state = false;
    }

    getPoints() {
        return this.points;
    }

    setCurrentPoints(__currentPoints){
        this.currentPoints = __currentPoints;
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
    //Crear Dado
    let btn_roll = document.querySelector(".dice__roll");
    let dice = new Dice(document.getElementById("dice__img"));
    
    //Crear jugadores
    let player1 = new Player("player1");
    let player2 = new Player("player2");

    //Beginning...
    while(!player1.state && !player2.state){
        console.log("Inicia Juego");
        
        break;
    }

    console.log("Finaliza juego...");

    
    btn_roll.addEventListener("click",function() {
        dice.roll();
    });

}

start()
