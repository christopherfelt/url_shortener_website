const apiKey = 'AIzaSyCafDwvZql1iKcew4gP-a-t6_t9c4kwAUc';
const url = 'https://www.googleapis.com/urlshortener/v1/url'
const projection = 'FULL';

const inputField = document.getElementById('txtbox');
const expandButton = document.getElementById('expandBut');
const shortenButton = document.getElementById('shortenBut');
const responseField = document.getElementById('urlreadout');

function expandUrl() {
  const urlToExpand = url + '?key=' + apiKey + '&shortUrl=' + inputField.value;
  const xhr =  new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.onreadystatechange = function () {
    if(xhr.readyState === XMLHttpRequest.DONE) {
      console.log(xhr.response);
      var addInput = document.createElement('p');
      addInput.appendChild(document.createTextNode(xhr.response.longUrl));
      responseField.appendChild(addInput);
    }
  }
  xhr.open('GET', urlToExpand);
  xhr.send();
}

function shortenUrl() {
  const urlWithKey = url + '?key=' + apiKey;
  const urlToShorten = inputField.value;
  console.log(urlToShorten);
  const data = JSON.stringify({longUrl:urlToShorten});
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.onreadystatechange = function() {
    if(xhr.readyState === XMLHttpRequest.DONE){
      console.log(xhr.response);
      var addInput = document.createElement('p');
      addInput.appendChild(document.createTextNode(xhr.response.id));
      responseField.appendChild(addInput);
    }
  }
  xhr.open('POST', urlWithKey);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(data);
}

function expand() {
  responseField.innerHTML = '';
  expandUrl();
  return false;
}

function shorten() {
  responseField.innerHTML = '';
  shortenUrl();
  return false;
}

expandButton.addEventListener("click", expand);
shortenButton.addEventListener("click", shorten);
