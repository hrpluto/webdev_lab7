function init(){
//add your javascrip between these two lines of code

var button = document.getElementById("entrybutton");
var textInput = document.getElementById("entryinput");

function myFunction() {
  alert("Linus Jordan: " + textInput.value);
  document.getElementById("textoutput").innerHTML = textInput.value;
}

button.addEventListener("click", myFunction);

}
window.addEventListener('load', init);