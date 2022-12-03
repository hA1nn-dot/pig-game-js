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

export default Player;