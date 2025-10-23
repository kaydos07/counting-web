let value = 1;
let sm_division = 1;

function sm_division_set()
{
    sm_division = document.getElementById("inputField").value;
    if(isNaN(Number(sm_division)))  
        window.alert("Please enter a valid number");
    sm_division = Number(sm_division);
}
function increase()
{
    value  += sm_division;
    document.getElementById("myh").textContent = value;
}
function decrease()
{
    value  -= sm_division;
    document.getElementById("myh").textContent = value;
}
function reset()
{
    value = 0;
    document.getElementById("myh").textContent = value;
}


document.getElementById("inputField").addEventListener("keypress", function(event) {
    if (event.key === "Enter")
        sm_division_set();
    document.getElementById("set_button").onclick = sm_division_set;
    })
document.getElementById("inc_button").onclick = increase;
document.getElementById("dec_button").onclick = decrease;
document.getElementById("res_button").onclick = reset;