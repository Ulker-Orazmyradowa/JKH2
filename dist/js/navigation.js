// For adding active classes to language
var header = document.getElementById("myDiv");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("activeLanguage");
    current[0].className = current[0].className.replace(" activeLanguage", "");
    this.className += " activeLanguage";
  });
}

//toggle to hide and show the side navigation

function openCloseFunction() {
  document.getElementById("mySidenav").classList.toggle("showNav");
  document.getElementById("main").classList.toggle("showMain");
  document.getElementById("downloadBtn1").classList.toggle("showBtn1");
  document.getElementById("downloadBtn2").classList.toggle("showBtn2");
}

//for tabs to open and close the navigation butttons

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();



//These lines of code are for opening the navigation tabs

function openNavTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent2");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks2");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" activeBell", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " activeBell";
}
document.getElementById("defaultOpen2").click();


//these lines of code are for opening a profile tab

function openProFileTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent3");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks3");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" activeProfile", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " activeProfile";
}
document.getElementById("defaultOpen3").click();




//these lines of codes are for displaying the details of table

// function openDetails(){
//   document.getElementById("detailsCont").classList.toggle("showDetails");
// }

function openJan(icon) {
  var x = document.getElementById("January");
  icon.classList.toggle("bx-x");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
    
  }
}

function openFeb(icon){
  var y = document.getElementById("February");
  icon.classList.toggle("bx-x");
  
  if (y.style.display === "block") {
    y.style.display = "none";
  } else {
    y.style.display = "block";
  }
}


function openJan2(icon) {
  var x = document.getElementById("January2");
  icon.classList.toggle("bx-x");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
    
  }
}

function openFeb2(icon){
  var y = document.getElementById("February2");
  icon.classList.toggle("bx-x");
  
  if (y.style.display === "block") {
    y.style.display = "none";
  } else {
    y.style.display = "block";
  }
}






//these lines of codes are for modal Box:

var modal = document.querySelector(".modal");

var btn = document.querySelector(".myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




///these lines of code is for dynamic star rating:

// Function to get previous and next siblings of the target element
function getSiblings(element,  type){
  var arraySib = [];
  if ( type == 'prev' ){
      while ( element = element.previousSibling ){
          arraySib.push(element);
      }
  } else if ( type == 'next' ) {
      while ( element = element.nextSibling ){
          arraySib.push(element);
      }
  }
  return arraySib;
}
for (var i = 1; i <= 5; i++) { document.getElementById("w__stars").innerHTML += `<span class="r__icon"><i class='bx bx-star'></i></span>`; }
var icon = document.getElementsByClassName("r__icon");
for (var i = 0; i < icon.length; i++) {
icon[i].addEventListener("click", function (e){
  this.innerHTML = `<i class='bx bxs-star'></i>`;
  var prev = getSiblings(this, 'prev')
  var next = getSiblings(this, 'next')
  // populate previous siblings
  for(p = 0; p < prev.length; p++){
     prev[p].innerHTML = `<i class='bx bxs-star'></i>`
  }
  // clear next siblings
  for(n = 0; n < next.length; n++){
     next[n].innerHTML = `<i class='bx bx-star'></i>`
  }
});
}




//These lines of codes are for opening thoughts form

function openThought() {
  document.getElementById("thoughtForm").style.display = "block";
  document.getElementById("dNone").style.display="none"
}
function closeThought() {
  document.getElementById("questionContainer").style.display = "none";
}



function openThought2() {
  document.getElementById("thoughtForm2").style.display = "block";
  document.getElementById("dNone2").style.display="none"
}
function closeThought2() {
  document.getElementById("questionContainer2").style.display = "none";
}



function show() {
  let placeInput = document.getElementById("password-place");
  let hidePass = document.getElementById("button-pass");

  if (placeInput.type == "password") {
      placeInput.type = "text";
      hidePass.className = "bx bx-hide bx-tada bx-rotate-90";
      
  } else {
      placeInput.type = "password";
      hidePass.className = "bx bx-show bx-tada bx-rotate-90";
  }

}