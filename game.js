var gamePattern = [];
var userClickedPattern = [];
var level = 0; //keep track of the level
var check = false;

//check when keyboard is pressed
$(document).on('keypress', function () {
    check = true;

    nextSequence();

});


function nextSequence() {

    level++;
    if (check) {
        $("h1").text("Level" + " " + level);
    }
    var randomNum = Math.floor((Math.random() * 4) + 1);
    var buttonColours = ["red", "blue", "green", "yellow"];
    var randomCol = buttonColours[randomNum];

    gamePattern.push(randomCol);


    var colorToChosee = "#" + randomCol;
    $(colorToChosee).fadeIn(200).fadeOut(200).fadeIn(200);

    toMakeSound(colorToChosee);
    handler();
}

function toMakeSound(color) {
    switch (color) {
        case "#red":
            var red = new Audio('sounds/red.mp3');
            red.play();
            break;
        case "#blue":
            var blue = new Audio('sounds/blue.mp3');
            blue.play();
            break;
        case "#green":
            var green = new Audio('sounds/green.mp3');
            green.play();
            break;
        case "#yellow":
            var yellow = new Audio('sounds/yellow.mp3');
            yellow.play();
            break;

        default:
            break;
    }
}

function handler() {
    $(".btn").click(function () {
        var userChosenColour = this.id;

        userClickedPattern.push(userChosenColour);
        // console.log(userClickedPattern);
        toMakeSound("#" + userChosenColour);
        animatePress(userChosenColour);

        checkAnswer(userClickedPattern.length - 1);

    });


}
function animatePress(currentColour) {
    // add press call to the button that get clicked 
    var activeBut = $("#" + currentColour);
    console.log(activeBut);
    activeBut.addClass("pressed");

    setTimeout(function () {
        $(activeBut).removeClass("pressed");
    }, 100);
}
function checkAnswer(currentLevel) {
    //game logic 
if(gamePattern[currentLevel]== userClickedPattern[currentLevel]){
    console.log("success");
} 

if (userClickedPattern.length === gamePattern.length){

    //5. Call nextSequence() after a 1000 millisecond delay.
    setTimeout(function () {
      nextSequence();
    }, 1000);

  }
  else{
    console.log("wrong");
    var wrong = new Audio('sounds/wrong.mp3');
            wrong.play();
}
}



