var button5 = document.getElementById("btn5");

button5.onclick = function () {
    var btnIDs = ["btn1", "btn2", "btn3", "btn6", "btn9", "btn8", "btn7", "btn4"];
    var temp = document.getElementById(btnIDs[btnIDs.length - 1]).innerHTML;
    for (var j = btnIDs.length - 1; j > 0; j--) {
        document.getElementById(btnIDs[j]).innerHTML = document.getElementById(btnIDs[j - 1]).innerHTML;
    }
    document.getElementById(btnIDs[0]).innerHTML = temp;
};