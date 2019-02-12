if (youHP > 0 && enemyHP < 0){
    gray();
    $("#comment").append("<p>You hav defeated " + enemy.fullName +". Select a new opponent.</p>");
    enemy.isDead = true;
    $(".oppAll").removeClass("noClick");
    $(".enemy").addClass(".dead noClick").removeClass(".enemy");
    scrollDown();

} else if (youHP < 0 && enemyHP > 0){
    you.isDead = true;
    $(this).addClass("noClick");
    $("#comment").append("<p>" + enemy.fullName + " has defeated you. Reset game to play again.</p>");
    scrollDown();
}
