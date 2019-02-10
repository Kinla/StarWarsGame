// function to set up HP between 100 and 200
function setHP () {
    for (var i = 0; i < charList.length; i++){
        return (Math.floor(Math.random() * 101) + 100);
    };
};


// function to set base atk between 5 and 20
function setATK () {
    for (var i = 0; i < charList.length; i++){
        this.hp = Math.floor(Math.random() * 16) + 5;
    };
};


var charList = [vader, yoda, rey, kenobi];
console.log(charList[0].hp);

var vader = {
    id: "vader",
    name: "Vader",
    fullName: "Darth Vader",
    hp: return Math.floor(Math.random() * 101) + 100,
    baseATK: return Math.floor(Math.random() * 16) + 5,
    atk: 0,
    src: "./assets/image/img0.jpg",
    isYou: false,
    isCurOpp: false,
    isDead: false,
};

var yoda = {
    id: "yoda",
    name: "Yoda",
    fullName: "Yoda",
    hp: setHP(),
    baseATK: Math.floor(Math.random() * 16) + 5,
    atk: 0,
    src: "./assets/image/img1.jpg",
    isYou: false,
    isCurOpp: false,
    isDead: false,
};

var rey = {
    id: "rey",
    name: "Rey",
    fullName: "Rey",
    hp: Math.floor(Math.random() * 101) + 100,
    baseATK: Math.floor(Math.random() * 16) + 5,
    atk: 0,
    src: "./assets/image/img2.jpg",
    isYou: false,
    isCurOpp: false,
    isDead: false,
};

var kenobi = {
    id: "kenobi",
    name: "Kenobi",
    fullName: "Obi-Wan Kenobi",
    hp: Math.floor(Math.random() * 101) + 100,
    baseATK: Math.floor(Math.random() * 16) + 5,
    atk: 0,
    src: "./assets/image/img3.jpg",
    isYou: false,
    isCurOpp: false,
    isDead: false,
};



// link click on image and match the array object
function idFighter (divID) { // going to accept divID as argument
    for (var i; i < charList.length; i++){
        if (divID === charList[i]) {
            return charList[i];
        }
    }
};
// on game start and reset function
$(document).ready(resetGame());


function resetGame(){
    //make sure HP/baseATK for each char is set at begining and 
    //make sure to clear any lingering atk value
    //make sure to set isYou, isCurOpp, isDead for all to false
    for (var i = 0; i < charList.length; i++){
        charList[i].hp = Math.floor(Math.random() * 101) + 100;
        charList[i].baseATK = Math.floor(Math.random() * 16) + 5;
        charList[i].atk = 0;
        charList[i].isYou = false;
        charList[i].isCurOpp = false;
        charList[i].isDead = false;
    };
    //populate all #start hp for each char
    for (var i = 0; i < charList.length; i++){
        $("#hp-" + i).html(charList[i].hp);
    };
    //set #start to show
    //set #start, #you, #opp, #curopp to hide
    //add commentary for instruction to start game.
    $("#start").show();
    $("#opp-0, #opp-1, #opp-2, #you, #opp").hide();
    $("#comment").empty().html("<p>Click on a character to start.</p>");
};


//setting up click events
    //set you + opponents
    $(".char").click(function(){
        var id = $(this).attr("id");
        var fighter = idFighter (id);
        fighter.isYou = true; // set YOU
        
        //execute function for populating "youDIV"

        //use for loop to populate opp div
        for (var i; i < charList.length; i++){
            if (!fighter.isYou){
                
            }
        };
        //execute function for populating the "oppDIV"

    });

    //select current opponent

//set up the fight 
    // attack button

    //update display for current fight

    //evaluate isDead
    

//set up reset button




/*
// for Vader
$("#vader").click(function(){
    //priming for fight
    yourFullName = fullName[0];
    yourHP = hp[0];
    yourBaseATK = atk[0];
    oppList = [charList[1], charList[2], charList[3]];
    oppFullName = [fullName[1], fullName[2], fullName[3]];
    oppHP = [hp[1], hp[2], hp[3]];
    oppATK = [atk[1], atk[2], atk[3]];

    //move you to battle area
    $("#yourName").html(yourFullName);
    $("#yourImg").attr("src", "./assets/image/img0.jpg");
    $("#yourHP").html(yourHP);
    $("#you").show();

    //move opps to the selector area
    for (var i = 0; i < oppList.length; i++){
        $("#oppName-" + i).html(oppList[i]);
        $("#img-" + i).attr("src", "./assets/image/img" + (i + 1) + ".jpg");
        $("#oppHP-" + i).html(oppHP[i]);
        $("#opp-" + i).show();
        $("#start").hide();
    }

    //add commentary
    $("#comment").append("<p>Select an opponent. Choose wisely.</p>");

});

// for Yoda
$("#yoda").click(function(){
    //priming for fight
    yourFullName = fullName[1];
    yourHP = hp[1];
    yourBaseATK = atk[1];
    oppList = [charList[0], charList[2], charList[3]];
    oppFullName = [fullName[0], fullName[2], fullName[3]];
    oppHP = [hp[0], hp[2], hp[3]];
    oppATK = [atk[0], atk[2], atk[3]];

    //move you to battle area
    $("#yourName").html(yourFullName);
    $("#yourImg").attr("src", "./assets/image/img1.jpg");
    $("#yourHP").html(yourHP);
    $("#you").show();

    //move opps to the selector area
    for (var i = 0; i < oppList.length; i++){
        $("#oppName-" + i).html(oppList[i]);
        $("#img-" + 0).attr("src", "./assets/image/img" + (0) + ".jpg");
        $("#img-" + 1).attr("src", "./assets/image/img" + (2) + ".jpg");
        $("#img-" + 2).attr("src", "./assets/image/img" + (3) + ".jpg");
        $("#oppHP-" + i).html(oppHP[i]);
        $("#opp-" + i).show();
        $("#start").hide();
    }

    //add commentary
    $("#comment").append("<p>Select an opponent. Choose wisely.</p>");

});

// for Rey
$("#rey").click(function(){
    //priming for fight
    yourFullName = fullName[2];
    yourHP = hp[2];
    yourBaseATK = atk[2];
    oppList = [charList[0], charList[1], charList[3]];
    oppFullName = [fullName[0], fullName[1], fullName[3]];
    oppHP = [hp[0], hp[1], hp[3]];
    oppATK = [atk[0], atk[1], atk[3]];

    //move you to battle area
    $("#yourName").html(yourFullName);
    $("#yourImg").attr("src", "./assets/image/img2.jpg");
    $("#yourHP").html(yourHP);
    $("#you").show();

    //move opps to the selector area
    for (var i = 0; i < oppList.length; i++){
        $("#oppName-" + i).html(oppList[i]);
        $("#img-" + 0).attr("src", "./assets/image/img" + (0) + ".jpg");
        $("#img-" + 1).attr("src", "./assets/image/img" + (1) + ".jpg");
        $("#img-" + 2).attr("src", "./assets/image/img" + (3) + ".jpg");
        $("#oppHP-" + i).html(oppHP[i]);
        $("#opp-" + i).show();
        $("#start").hide();
    }

    //add commentary
    $("#comment").append("<p>Select an opponent. Choose wisely.</p>");

});

// for Kenobi
$("#kenobi").click(function(){
    //priming for fight
    yourFullName = fullName[3];
    yourHP = hp[3];
    yourBaseATK = atk[3];
    oppList = [charList[0], charList[1], charList[2]];
    oppFullName = [fullName[0], fullName[1], fullName[2]];
    oppHP = [hp[0], hp[1], hp[2]];
    oppATK = [atk[0], atk[1], atk[2]];

    //move you to battle area
    $("#yourName").html(yourFullName);
    $("#yourImg").attr("src", "./assets/image/img3.jpg");
    $("#yourHP").html(yourHP);
    $("#you").show();

    //move opps to the selector area
    for (var i = 0; i < oppList.length; i++){
        $("#oppName-" + i).html(oppList[i]);
        $("#img-" + i).attr("src", "./assets/image/img" + i + ".jpg");
        $("#oppHP-" + i).html(oppHP[i]);
        $("#opp-" + i).show();
        $("#start").hide();
    }

    //add commentary
    $("#comment").append("<p>Select an opponent. Choose wisely.</p>");

});

//Select your current opponent

*/
