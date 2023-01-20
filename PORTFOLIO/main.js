////////////// LOADER FUCNTION START ///////////////////////
var loader;

function loadNow(opacity) {
  if (opacity <= 0) {
    displayContent();
  } else {
    loader.style.opacity = opacity;
    window.setTimeout(function () {
      loadNow(opacity - 0.035);
    }, 100);
  }
}

function displayContent() {
  loader.style.display = "none";
  document.getElementById("content").style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  loader = document.getElementById("loader");
  loadNow(1);
});

////////////// LOADER FUCNTION END //////////////////////////
/////////////////////////////////////////////////////////////


////////////// CANVAS OPEN ONCLICK FUNTION START //////////////////

let offCanvas = document.getElementById("canvas");
let burgerMenu = document.getElementById("burger");

burgerMenu.addEventListener("click", function (event) {
  offCanvas.style.visibility = "visible";
  event.stopPropagation();
});

document.addEventListener("click", function () {
  offCanvas.style.visibility = "hidden";
});

////////////// CANVAS OPEN ONCLICK FUNTION END //////////////////
/////////////////////////////////////////////////////////////////

////////////// MESSAGE SEND FUNCTION / ERASE INPUT AREA /////////

let submitButton = document.getElementById("submit")

submitButton.addEventListener('click', function(){
  alert(`Your message has been sent \nThank You!`)
  eraseText()
  function eraseText() {
    document.getElementById("textarea").value = "";
  }
})

/////////////////////////////////////////////////////////////////
////////////// SCROLL TO TOP FUNTION START //////////////////////

const element = document.getElementById("totop");

element.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", function () {
  if (window.scrollY === 0) {
    element.classList.remove("active");
  } else {
    element.classList.add("active");
  }
});

////////////// SCROLL TO TOP FUNTION END //////////////////////