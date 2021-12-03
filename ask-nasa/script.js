const baseUrl = 'https://api.nasa.gov/planetary/apod?api_key=';
const apiKey = "1m0frMhhYwsZOQc4zZpebowjVIVqw1w3KLVQxtXl";
let pickedDay ="";


function dateChanged(){
  let changedDate = document.getElementById("exactDate");
  pickedDay = `&date=${changedDate.value}&`;
  fetchData();
}

function zoomIt(){
  document.getElementById("image-content").classList.toggle("clicked");
}

function diplayData(dataFromNasa) {
  document.getElementById("title-here").innerHTML = dataFromNasa.title;

  const todaysVideo=document.getElementById("video-here");
  const todaysImage=document.getElementById("image-here");
  
  if (dataFromNasa.media_type ==="image"){
    todaysVideo.src = "";
    todaysImage.src = dataFromNasa.url;
    todaysImage.classList.remove("doNotDisplay");
    todaysVideo.classList.add("doNotDisplay");
    todaysImage.addEventListener("click",zoomIt);

  } else{
    todaysImage.src = "";
    todaysVideo.src = dataFromNasa.url;
    todaysImage.classList.add("doNotDisplay");
    todaysVideo.classList.remove("doNotDisplay");
    }

  document.getElementById("explanation-here").innerHTML = dataFromNasa.explanation;

  document.getElementById("exactDate").addEventListener('change', dateChanged);
}

function fetchData() {
  try{
    fetch(baseUrl+apiKey+pickedDay)
    .then(response => response.json())
    .then(json => {
      console.log(json)
      diplayData(json)
    })
  } catch(error) {
    console.log(error)
  }
}

window.addEventListener("load", fetchData());