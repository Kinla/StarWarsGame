/* not sure how to set random HP and ATK yet... will figure out later if have time
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

*/


var vader = {
    id: "vader",
    name: "Vader",
    fullName: "Darth Vader",
    hp: 100,
    baseATK: 20,
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
    hp: 120,
    baseATK: 15,
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
    hp: 200,
    baseATK: 10,
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
    hp: 150,
    baseATK: 13,
    atk: 0,
    src: "./assets/image/img3.jpg",
    isYou: false,
    isCurOpp: false,
    isDead: false,
};

var charList = [vader, yoda, rey, kenobi];


// link click on image and match the array object
function idFighter (divID) { // going to accept divID as argument
    for (var i = 0; i < charList.length; i++){
        if (divID === charList[i].id) {
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
    $(".opp, .you, .curOpp").hide();
    $("#comment").empty().html("<p>Click on a character to start.</p>");
};


//setting up click events
    //set you + opponents
    $(".char").click(function(){
        var fighter = idFighter($(this).attr("id"));
        fighter.isYou = true; // set YOU

        //set display to show / hid / comment as appropriate
        $("#start").hide();
        $(".you").show();
        $(".oppAll").show();
        $("#comment").append("<p>Select your opponent from the right.</p>");

        //populate the YOU div
        for (var i = 0; i < charList.length; i++){
            if (charList[i].isYou){
                $("#you").append('<div class="card id="' + charList[i].id + '"><p>' + charList[i].fullName + '</p><img class="img-fluid" src="' + charList[i].src + '"><p id="youHP">' + charList[i].hp + '</p></div>');
            }
        };
        //populate the divs for you and oppALL
        for (var i = 0; i < charList.length; i++){
            if (!charList[i].isYou){
                $(".oppAll").append('<div class="card col-4 mx-0 opp" id="' + charList[i].id + '"><p class="name">' + charList[i].name + '</p><img class="img-fluid" src="' + charList[i].src + '"><p class="hp">' + charList[i].hp + '</p></div>');
            }
        };
    });

    //select current opponent
    $("div.oppAll div.opp").click(function(event, wasTriggered) {
        if (wasTriggered) {
            alert('triggered in code');
        } else {
            alert('triggered by mouse');
        }
    });

    $(".opp").click(function(){
        var fighter = idFighter($(this).attr("id"));
        fighter.isCurOpp = true; // set current opponent
        console.log($(".opp").click())
        //mark current opponent by changing background and border color
        $(this).addClass("enemy");
        //set display to show / hid / comment as appropriate
        $(".curOpp").show();
        $("#comment").append("<p>Slaughter your enemy by clicking.</p>");

        //populate the enemy div
        for (var i = 0; i < charList.length; i++){
            if (charList[i].isCurOpp){
                $("#curOpp").append('<div class="card id="' + charList[i].id + '"><p>' + charList[i].fullName + '</p><img class="img-fluid" src="' + charList[i].src + '"><p id="youHP">' + charList[i].hp + '</p></div>');
            }
        };
    });


//set up the fight 
    // attack button (which is now just click on the current opponent)

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
