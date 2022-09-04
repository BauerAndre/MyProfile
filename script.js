var i = 0;
var txt = "<image> ";
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("img_tag").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
