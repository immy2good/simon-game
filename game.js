let gamePattern = [ ];
let level = 0;
let buttonColours = ["red", "blue", "green", "yellow"];
let userClickedPattern = [ ];

let gameStarted = false;

$(document).keypress(function () {
  if (!gameStarted) {
    // Call the nextSequence function on the first keypress
    $("#level-title").text("Level " + level);
    nextSequence();
    // Set the flag to true to indicate the game has started
    gameStarted = true;
  }
});


$("#green").on("click", function () {
  $(".green").fadeOut(50).fadeIn(50).css("opacity", "0.5");
  let greenBtn = new Audio("sounds/green.mp3");
  greenBtn.play();
  userClickedPattern.push($(this).attr("id"));
  console.log("User Clicked Patern is : " + userClickedPattern);
  checkAnswer(userClickedPattern.length - 1);
  
  
  
});

$("#red").on("click", function () {
  $(".red").fadeOut(50).fadeIn(50);
  let redBtn = new Audio("sounds/red.mp3");
  redBtn.play();
  userClickedPattern.push($(this).attr("id"));
console.log("User Clicked Patern is : " + userClickedPattern);
checkAnswer(userClickedPattern.length - 1);


});

$("#yellow").on("click", function () {
  $(".yellow").fadeOut(50).fadeIn(50);
  let yellowBtn = new Audio("sounds/yellow.mp3");
  yellowBtn.play();
  userClickedPattern.push($(this).attr("id"));
  console.log("User Clicked Patern is : " + userClickedPattern);
  checkAnswer(userClickedPattern.length - 1);
  
});

$("#blue").on("click", function () {
  $(".blue").fadeOut(50).fadeIn(50);
  let blueBtn = new Audio("sounds/blue.mp3");
  blueBtn.play();
  userClickedPattern.push($(this).attr("id"));
  console.log("User Clicked Patern is : " + userClickedPattern);
  checkAnswer(userClickedPattern.length - 1);
  
});

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    // $("h1").text("Success " + level);
    // console.log("Success");
    if (userClickedPattern.length === gamePattern.length) {
      //5. Call nextSequence() after a 1000 millisecond delay.
      setTimeout(function () {
            nextSequence();
          }, 1000);
        }
      }
      else {
        // $("h1").text("Game Over" );
        console.log("failure");
      }
    };
    
    
    function nextSequence() {
      userClickedPattern = [];

      level++;
    $("#level-title").text("Level " + level);

      var randomNumber = Math.floor(Math.random() * 3);
      var randomChosenColour = buttonColours[randomNumber];
      gamePattern.push(randomChosenColour);

        $("#" + randomChosenColour)
          .fadeIn(100)
          .fadeOut(100)
          .fadeIn(100);
        playSound(randomChosenColour);

    }

    function playSound(name) {
      var audio = new Audio("sounds/" + name + ".mp3");
      audio.play();
    }