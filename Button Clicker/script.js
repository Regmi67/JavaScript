console.log("connecting");

function hide(element) {
  console.log("here");
  element.remove();
}

function logIn(element) {
  if (element.innerText == "logIn") {
    element.innerText = "LogOut";
  } else {
    element.innerText = "logIn";
  }
}
var like = 37;
function likes(element) {
  like++;
  console.log(like);
  element.innerText = like + " likes";
}

var like1 = 14;
function likes1(element) {
  like1++;
  console.log(like1);
  element.innerText = like1 + " likes";
  alert("this page is liked");
}
