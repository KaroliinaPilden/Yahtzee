function roll() {
var randomNumber = Math.floor(Math.random() * 6 + 1); // 0-6
var playerOneImages = "images/d"+randomNumber+".png";

document.querySelector('.img1').setAttribute('src', playerOneImages);

var randomNumber = Math.floor(Math.random() * 6 + 1); // 0-6
var playerOneImages = "images/d"+randomNumber+".png";

document.querySelector('.img2').setAttribute('src', playerOneImages);

var randomNumber = Math.floor(Math.random() * 6 + 1); // 0-6
var playerOneImages = "images/d"+randomNumber+".png";

document.querySelector('.img3').setAttribute('src', playerOneImages);

var randomNumber = Math.floor(Math.random() * 6 + 1); // 0-6
var playerOneImages = "images/d"+randomNumber+".png";

document.querySelector('.img4').setAttribute('src', playerOneImages);

var randomNumber = Math.floor(Math.random() * 6 + 1); // 0-6
var playerOneImages = "images/d"+randomNumber+".png";

document.querySelector('.img5').setAttribute('src', playerOneImages);
}

function score(id) {
  var x = document.getElementById("score").value;
  document.getElementById(id).innerHTML = x;
}

function sum() {
  var y = +document.getElementById("ones1").value;
  var z = +document.getElementById("twos1").value;
  var u = +y + +z;
  document.getElementById("sum1").innerHTML = u;
}