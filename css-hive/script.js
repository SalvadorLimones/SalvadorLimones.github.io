function btnClicked() {
  document.getElementById("catImg").classList.toggle("clicked");
  document.getElementById("heartBtn").classList.toggle("clicked");
}
var i = 0;

function togglePlay() {
  i++;
  if (i%2 == 1) {
   document.getElementById('audio').play();
  } else{
    document.getElementById('audio').pause();
  }
}


function loadEvent() {
  console.log("page loaded");
  document.getElementById("heartBtn").addEventListener("click", btnClicked);
  document.getElementById('heartBtn').addEventListener('click', togglePlay);
}

window.addEventListener("load", loadEvent);