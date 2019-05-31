//script.js
//console.log(this);
//var uri = "https://api.data.amsterdam.nl/panorama/recente_opnames/2018/?format=json";
//var uri = "https://open.data.amsterdam.nl/Attracties.json";
//var uri = "https://open.data.amsterdam.nl/Activiteiten.json";
//var uri = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
var uri = "json/movies.json";

var section = document.querySelector('section');
var button = document.querySelector("button");
var loaderElement = document.querySelector("#loader");
console.log("loaderElement",loaderElement);


////https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
function showData(jsonObj) {
  var films = jsonObj;
  console.log("showData films",films);

  for (var i = 0; i < films.length; i++) {
    console.log("film " + i);
    var filmdiv = document.createElement('div');
    var filmpiekijken = document.createElement('article');

    var filmdetails = document.createElement('section');
     var filmcover = document.createElement('img');
    filmcover.src = films[i].cover;
    var filmtitel = document.createElement('h2');
    filmtitel.textContent = films[i].title;
    var filmdatum = document.createElement('span');
    filmdatum.textContent = films[i].release_date;
    filmdatum.classList.add('filmdatum');
    var filmplot = document.createElement('p');
    filmplot.textContent = films[i].simple_plot;
    var filmregie = document.createElement('p');
    filmregie.textContent = films[i].directors[4];
    var filmgenre = document.createElement('span');
    filmgenre.textContent = films[i].genres;
    filmgenre.classList.add('filmgenre');
  
    //myImg.textContent = films[i].cover;
    // console.log(filmcover.src);

    // var reviewslezen = document.createElement('ul');
    // var reviews = films[i].reviews;
    // for (var j = 0; j < reviews.length; j++) {
    //   var listItem = document.createElement('li');
    //   listItem.textContent = reviews[j].score + ' - ' + reviews[j].created_at;
    //   reviewslezen.appendChild(listItem);
    // }
    section.appendChild(filmdiv);
    filmdiv.appendChild(filmpiekijken);
    filmpiekijken.appendChild(filmcover);
    filmpiekijken.appendChild(filmtitel);
    filmpiekijken.appendChild(filmdatum);
    filmpiekijken.appendChild(filmplot);
    filmpiekijken.appendChild(filmregie);
    filmpiekijken.appendChild(filmgenre);

    


    // var filmcard = document.querySelector('div');

// filmcard.onclick = function() {
//   filmcard.classList.toggle('big');
//   console.log("Toggle grootte");
// }

window.onkeydown = function(event) {
  if (event.keycode == 13) {
    console.log('event', event);
    document.querySelector('div').click();
  } 
  else {
    console.log('foute toets!')
  }
}


}
}


//https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
//https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
function loadimagesmetXHR(){
  var request = new XMLHttpRequest();
  request.open('get', uri);
  request.responseType = 'json';
  //request.responseType = 'text'; // now we're getting a string!
  request.send();

  request.addEventListener("load", function(){
    //console.log("request load: ",request.response);
    loaderElement.classList.remove('show');
    showData(request.response);

    var filmcards = document.querySelectorAll("div");

    for (var i = 0; i < filmcards.length; i++){
      filmcards[i].addEventListener("click", function() {
        this.classList.toggle('big');
        console.log(this)
        console.log('klik');
      });
    }
    
  });
//  request.onload = function() {
//      console.log("request.onload: ",request.response);
//    }
  request.timeout = 10000; // time in milliseconds
  request.ontimeout = function(e) {
    // XMLHttpRequest timed out. Do something here.
    console.log("ontimeout: " +request.timeout+", het laden duurt te lang !",e);
  };
  request.onerror = function() {
      console.log('Fetch Error', request.status);
  };
}


//loadimagesmetXHR();

//actie
// button.onclick = function(){
//   loaderElement.classList.add('show');
//   this.classList.add('hide');
//   section.innerHTML = ""; //main leeghalen. just in case
//   loadimagesmetXHR();
// };


var delayInMilliseconds = 400; // 1 seconde

button.onclick = function() {
  setTimeout(function() {
    loaderElement.classList.add('show');
    button.classList.add('hide');
    section.innerHTML = ""; // main leeghalen. just in case
    loadimagesmetXHR();
  }, delayInMilliseconds);
}


function loadRestApiFetch(){ //Rest Api call met Fetchs
  console.log("function loadRestApiFetch");

  loaderElement.classList.add('show');
  fetch(uri)
    .then(function(response) {
      console.log(response.headers.get('Content-Type'));
      console.log(response.headers.get('Date'));

      console.log(response.status);
      console.log(response.statusText);
      console.log(response.type);
      console.log(response.url);

      return response.json();
    })
    .then(function(myJson) {
      console.log('Request successful', myJson);
      //eerst de loader weg halen !
      loaderElement.classList.remove('show');
      //dan de html renderen
      //document.querySelector("p").innerHTML="joehoe";
      //console.log(myJson);
    })
    .catch(function(error) {
      console.log('Request failed', error)
    });
}
//loadRestApiFetch();

console.log("het script.js is geladen")

