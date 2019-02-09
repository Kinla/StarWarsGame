// define chars in multiple array
/* 
vader = 0
yoda = 1
rey = 2
kenobi =3
*/

//base
var charList = ["Vader", "Yoda", "Rey", "Kenobi"];
var fullName = ["Darth Vader", "Yoda", "Rey", "Obi-Wan Kenobi"]
var hp = [];
var atk = [];
//you
var yourFullName = "";
var yourHP = 0;
var yourBaseATK = 0;
var yourATK = 0;
var isDead = false;
//opponents
var oppList = [];
var oppFullName = [];
var oppHP = [];
var oppATK = [];
var oppIsDead = [];
//current opponent
var curOppFullName = "";
var curOppHP = 0;
var curOppATK = 0;
var curOppIsDead = false;
var isCurOpp = [false, false, false];


//set up game on load
$(document).ready(resetGame());

function resetGame () {
    setHP();
    setATK();
    isDead = [false];
    oppIsDead = [false, false, false];
    isCurOpp = [false, false, false];

    $("#start").show();
    $("#opp-0, #opp-1, #opp-2, #you, #opp").hide();
    $("#comment").empty().html("<p>Click on a character to start.</p>");
    displayResetHP();
};


// function to set up HP between 100 and 200
function setHP () {
    for (var i = 0; i < charList.length; i++){
        hp[i] = Math.floor(Math.random() * 101) + 100;
    };
};

// function to set up atk between 5 and 20
function setATK () {
    for (var i = 0; i < charList.length; i++){
        atk[i] = Math.floor(Math.random() * 16) + 5;
    };
};


//used to display the new HP every game on for the "aside icons"
function displayResetHP(){
    for (var i = 0; i < charList.length; i++){
        $("#hp-" + i).html(hp[i]);
    }
};

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
