let output = document.getElementById ("output");
let input = document.getElementById ("input");
let button = document.getElementById ("button");
output.innerHTML = "CHANGE MY COLOR";
button.onclick = clickHandler;

function clickHandler () 
{
    let color = input.value;
    output.style.color = color;
    input.value = '';
}