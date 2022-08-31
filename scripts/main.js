var myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/RTIOMS.png') {
      myImage.setAttribute ('src','images/schoolphoto.png');
    } else {
      myImage.setAttribute ('src','images/RTIOMS.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = '使用者 : ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = '使用者: ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}