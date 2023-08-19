var var1 = document.querySelector("#pass1");
var var2 = document.querySelector("#pass2");
isAlive = false;

function passg() {
  var s =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>,.?/+_-*&^%$#@!=";
  var sb = "";
  for (var i = 0; i < 12; i++) {
    sb += s.charAt(Math.floor(Math.random() * s.length));
  }
  return sb;
}

function copy() {
  if (isAlive == false) {
    alert("Please generate a password first");
  } else {
    var1.select();
    document.execCommand("copy");
    alert("Password copied to clipboard");
  }
}
function generate() {
  isAlive = true;
  var1.value = passg();
  var2.value = passg();
}
