var myButton = document.getElementById("btn");
myButton.onclick = function () {
    document.getElementById("btn").innerHTML = parseInt(document.getElementById("btn").innerHTML) + 1;
}