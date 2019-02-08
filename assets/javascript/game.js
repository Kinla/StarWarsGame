var mainChar = false;
var defender = false;

/*
vader = [0];
yoda = [1];
rey = [2];
kenobi = [3];
*/

var game = {
    charList: ["Vader", "Yoda", "Rey", "Kenobi"],
    hp: [],
    dmg: [],
    dmgMain = "",
    hasFinished = true,
    win = false,
    lose = false,

    //reset game
    resetGame: function(){
        this.setDmg();
        this.setHP();
        this.win = false;
        this.lose = false;    
        this.hasFinished = false;
        //need to reset image locations
        //need to reset win/lose message
        //need to reset player selection


    },

    //resetDisplay
    updateDisplay: function (){
        //update HP for each
        //update message for blows
    },

    //set base dmg for each char at random between 5-20
    setDmg: function () {
        for (var i = 0; i < charList.length; i++){
            dmg[i] = Math.floor(Math.random() * 16) + 5;
        }
    },

    //set HP for each char at random between 200 and 100
    setHP: function () {
        for (var i = 0; i < charList.length; i++){
            hp[i] = Math.floor(Math.random() * 101) + 100;
        }
    },


}
/*
$("#vader").click(){
    if (
}
*/