function roll() {
    for(let i=1; i<6; i++) {
    
    var randomNumber = Math.floor(Math.random() * 6 + 1); // 0-6
    var playerOneImages = "images/d"+randomNumber+".png";

    document.getElementById("img" + i).setAttribute('src', playerOneImages);
    console.log("img" + i)
    } 
}


function score(id) {
    var x = document.getElementById("score").value;
    document.getElementById(id).innerHTML = x;
    sum();
}

function sum() {
    var y = +document.getElementById("ones1").innerText;
    var z = +document.getElementById("twos1").innerText;
    var a = +document.getElementById("threes1").innerText;
    var b = +document.getElementById("fours1").innerText;
    var c = +document.getElementById("fives1").innerText;
    var d = +document.getElementById("sixes1").innerText;
    console.log(y + z)
    var u = y + z + a + b + c + d;
    document.getElementById("sum1").innerHTML = u;
    if (u > 62) {
        document.getElementById("bonus1").innerHTML = 35;
    }
    else document.getElementById.innerHTML = 0;
}
