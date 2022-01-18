var number1 = Math.floor(Math.random()*6 + 1);
var toAdd1 = "images/dice" + number1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", toAdd1);

var number2 = Math.floor(Math.random()*6 + 1);
var toAdd2 = "images/dice" + number2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", toAdd2);

if (number1 > number2){
  document.querySelectorAll("h1")[0].innerHTML = "🚩 Player 1 wins"
}
else if (number1 < number2){
  document.querySelectorAll("h1")[0].innerHTML = "Player 2 wins 🚩"
}
else{
  document.querySelectorAll("h1")[0].innerHTML = "Draw"
}
