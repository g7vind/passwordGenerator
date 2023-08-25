var var1 = document.querySelector("#pass1"),
var2 = document.querySelector("#pass2");
function passg() {
  for (var e = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>,.?/+_-*&^%$#@!=", a = "", r = 0; r < 12; r++) a += e.charAt(Math.floor(Math.random() * e.length));
  return a
}
function copy(e) {
  0 == isAlive ? alert("Please generate a password first") : ((1 == e ? var1 : var2).select(), document.execCommand("copy"), alert("Password copied to clipboard"))
}
function generate() {
  isAlive = !0, var1.value = passg(), var2.value = passg()
}
isAlive = !1;