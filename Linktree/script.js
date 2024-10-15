function displayMessage() {
 document.getElementById(
   "message").innerHTML =
  "Release to find out my account details";
}

function displayName() {
 document.getElementById(
   "message").innerHTML =
  "Opay<br>8086959894";
}

function displayName() {
 document.getElementById(
   "name").innerHTML =
  "Welcome";
}

function displayError() {
 document.getElementById(
   "message").innerHTML =
  "Wema<br> 0291725471";
}
document.getElementById("photo")
 .addEventListener("touchstart",
  displayMessage);
document.getElementById("photo")
 .addEventListener("touchcancel",
  displayError);
document.getElementById("photo")
 .addEventListener("touchend",
  displayName);
