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

export default Dice;