console.log("I am JS");

var like1 = 3;
var like2 = 9;
var like3 = 12;
var like4 = 9;

function addLike1() {
  var increaseLike1 = document.querySelector("#counting1");
  var aftercounting = parseInt(increaseLike1.innerText);
  aftercounting++;
  increaseLike1.innerText = aftercounting;
}

function addLike2() {
  var increaseLike2 = document.querySelector("#counting2");
  var aftercounting = parseInt(increaseLike2.innerText);
  aftercounting++;

  increaseLike2.innerText = aftercounting;
}

function addLike3() {
  var increaseLike3 = document.querySelector("#counting3");
  var aftercounting = parseInt(increaseLike3.innerText);
  aftercounting++;
  increaseLike3.innerText = aftercounting;
}
function addLike4() {
  var increaseLike4 = document.querySelector("#counting4");
  var aftercounting = parseInt(increaseLike4.innerText);
  aftercounting++;
  increaseLike4.innerText = aftercounting;
}
