
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 3);
    // console.log(randomNumber);
    return randomNumber;
};

var randomChosenColour = buttonColours[nextSequence()];
// console.log(randomChosenColour);
gamePattern.push(randomChosenColour);
// console.log(gamePattern);


  $("#green").on("click", function () {
    $(".green")
    .fadeOut(50, )
    .fadeIn(50)
    .css("opacity", "0.5");
    let greenBtn = new Audio("sounds/green.mp3");
    greenBtn.play();
  });

    $("#red").on("click", function () {
      $(".red").fadeOut(50).fadeIn(50);
           let redBtn = new Audio("sounds/red.mp3");
           redBtn.play();
    });

    

    $("#yellow").on("click", function () {
        $(".yellow").fadeOut(50).fadeIn(50);
            let yellowBtn = new Audio("sounds/yellow.mp3");
            yellowBtn.play();
    });

    $("#blue").on("click", function () {
        $(".blue").fadeOut(50).fadeIn(50);
            let blueBtn = new Audio("sounds/blue.mp3");
            blueBtn.play();
        });

// $("div").on("click", function () {
//   $(this).css("background-color", "white");


// });