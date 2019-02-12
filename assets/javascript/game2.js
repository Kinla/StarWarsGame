var vader = {
    id: "vader",
    name: "Vader",
    fullName: "Darth Vader",
    hp: 60,
    baseATK: 15,
    atk:0,
    cATK: 20,
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
    baseATK: 8,
    atk:0,
    cATK: 15,
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
    atk:0,
    cATK: 5,
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
    baseATK: 12,
    atk:0,
    cATK: 10,
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

var win = 0;

function resetGame(){
    //make sure HP/baseATK for each char is set at begining (i think this is automatic in my current set up)
    //make sure to clear any lingering atk value
    win = 0;

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
    $("#start").show();
    //set .you, .opp, .curOpp to hide and empty divs
    $(".opp, .you, .curOpp").hide();
    $("#you").empty();
    $(".oppAll").empty();
    $("#curOpp").empty();
    //add commentary for instruction to start game.
    $("#comment").empty().html("<p>Click on a character to start.</p>");
    //remove no clicks
    $(".oppAll").removeClass("noClick");
    $(".enemy").removeClass("noClick");
    $(".you").removeClass("noClick");
    $(".curOpp").removeClass("noClick");

};

//function to fade out comment.
function gray (){
    $("#comment p").addClass("gray");
};

//function to auto scroll down commentary
function scrollDown () {
    $('#comment').scrollTop($('#comment')[0].scrollHeight);
};

var you, enemy;

//setting up click events
    //set you + opponents
    $(".char").click(function(){
        gray();
        you = idFighter($(this).attr("id"));
        you.isYou = true; // set YOU
        $("#comment").append("<p>you have chosen " + you.fullName + ".</p>").delay(300)
        //set display to show / hid / comment as appropriate
        $("#start").hide();
        $(".you").show();
        $(".oppAll").show();
        $("#comment").append("<p>Now select your opponent from the right.</p>");
        scrollDown();

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
    $("body").on("click", "div.opp", function(){

        gray();

        enemy = idFighter($(this).attr("id"));
        enemy.isCurOpp = true; // set current opponent

        //mark current opponent by changing background color
        $(this).addClass("enemy");

        //set display to show / hid / comment as appropriate
        $(".curOpp").show();
        $("#comment").append("<p>Slaughter your enemy by clicking on the current opponent.</p>");
        scrollDown();

        //populate the enemy div
        for (var i = 0; i < charList.length; i++){
            if (charList[i].isCurOpp && !charList[i].isDead){
                $("#curOpp").append('<div class="card id="' + charList[i].id + '"><p>' + charList[i].fullName + '</p><img class="img-fluid" src="' + charList[i].src + '"><p id="enemyHP">' + charList[i].hp + '</p></div>');
            }
        };

        //make it so that user can no longer chose another current opponent for the time being
        $(".oppAll").addClass("noClick");
        
    });

//set up the fight 
    // attack button (which is now just click on the current opponent)
    $(".curOpp").on("click", function(){
        gray();
        you.atk += you.baseATK;
        enemy.hp -= you.atk;
        you.hp -= enemy.cATK;
        console.log(you.atk, you.baseATK, you.cATK, you.hp);
        console.log(enemy.atk, enemy.baseATK, enemy.cATK, enemy.hp);
        $("#comment").append("<p>You hit " + enemy.fullName + " for " + you.atk+ ".</p>");
        $("#enemyHP").html(enemy.hp);
        $("#comment").append("<p>" + enemy.fullName + " hits you for " + enemy.cATK+ ".</p>");
        $("#youHP").html(you.hp);  
        scrollDown();  

        // run win/lose
        winLose();
    });  
    
    // set up win lose function
    function winLose (){
        if (you.hp > 0){
            if (enemy.hp > 0){
                //do nothing here
            } else {
                enemy.isDead = true;
                win++
                $(".oppAll").removeClass("noClick");
                $(".enemy").addClass("dead noClick").removeClass(".enemy");
                $(".curOpp").hide();
                $("#curOpp").empty();
                gray();
                $("#comment").append("<p>You have defeated " + enemy.fullName +". Select a new opponent.</p>");
                scrollDown();
                
                wonGame();
    
            }
        } else if (you.hp <= 0 && enemy.hp <= 0){
            you.isDead = true;
            enemy.isDead = true;
            $(".you").addClass("dead noClick");
            $(".you").addClass("noClick");
            $(".enemy").addClass("dead noClick").removeClass(".enemy");
            $(".curOpp").addClass("dead noClick");
            $(".curOpp").addClass("noClick");
            gray();
            $("#comment").append("<p>You have taken " + enemy.fullName + " to the grave with you. Reset game to play again.</p>");
            scrollDown();

        } else {
            you.isDead = true;
            $(".you").addClass("dead noClick");
            $(".curOpp").addClass("noClick");
            gray();
            $("#comment").append("<p>" + enemy.fullName + " has defeated you. Reset game to play again.</p>");
            scrollDown();

        }
    };

function wonGame () {
    if (win === 3){
        gray();
        $("#comment").append("<p>Congrats! You have defeated all your enemies! Reset game to play again.</p>");
        scrollDown();
    }
};

//set up reset button
$(".resetBtn").click(function(){
    resetGame();
});