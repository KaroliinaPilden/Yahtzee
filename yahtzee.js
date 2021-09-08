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
}

function sum() {
    var y = +document.getElementById("ones1").innerText;
    var z = +document.getElementById("twos1").innerText;
    console.log(y + z)
    var u = +y + +z;
    document.getElementById("sum1").innerHTML = u;
}
