
let gamePattern = [];
let  buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
// console.log(userClickedPattern);
let level = 0;

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 3);
    // console.log(randomNumber);
    level ++;
    userClickedPattern = [];
    return randomNumber;
};

var randomChosenColour = buttonColours[nextSequence()];
// console.log(randomChosenColour);
gamePattern.push(randomChosenColour);
// alert(randomChosenColour);


  $("#green").on("click", function () {
    $(".green")
    .fadeOut(50, )
    .fadeIn(50)
    .css("opacity", "0.5");
    let greenBtn = new Audio("sounds/green.mp3");
    greenBtn.play();
        userClickedPattern.push($(this).attr("id"));
        // alert("the id is: " + userClickedPattern); 
  });

    $("#red").on("click", function () {
      $(".red").fadeOut(50).fadeIn(50);
           let redBtn = new Audio("sounds/red.mp3");
           redBtn.play();
                   userClickedPattern.push($(this).attr("id"));
                //    alert("the id is: " + userClickedPattern);
    });

    

    $("#yellow").on("click", function () {
        $(".yellow").fadeOut(50).fadeIn(50);
            let yellowBtn = new Audio("sounds/yellow.mp3");
            yellowBtn.play();
                    userClickedPattern.push($(this).attr("id"));
                    // alert("the id is: " + userClickedPattern);
    });

    $("#blue").on("click", function () {
        $(".blue").fadeOut(50).fadeIn(50);
            let blueBtn = new Audio("sounds/blue.mp3");
            blueBtn.play();
        userClickedPattern.push($(this).attr("id"));
        // alert("the id is: " + userClickedPattern);
        });

// $("div").on("click", function () {
//   $(this).css("background-color", "white");


// });


  $("button").click(function () {
    userClickedPattern.push($("button").attr("id"));
     alert("the id is: " + userClickedPattern);
  });

  let gameStarted = false;

  $(document).keypress(function () {
    if (!gameStarted) {
      // Call the nextSequence function on the first keypress
      nextSequence();
      // Set the flag to true to indicate the game has started
      gameStarted = true;
      if (gameStarted) {
        $("h1").text("Level "+level);
      }
    }
  });

  function checkAnswer(currentLevel) {

  }
