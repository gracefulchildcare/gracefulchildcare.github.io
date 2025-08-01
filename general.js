var menuY;
var cTheme = getComputedStyle(document.head).getPropertyValue('--c-theme');

function onDropdown() {
   document.getElementById("d-about").style.setProperty("color", cTheme, "important");
   document.getElementById("d-about").style.setProperty("font-weight", "bold");
}

function nonDropdown() {
   document.getElementById("d-about").style.setProperty("color", "gray", "important");
   document.getElementById("d-about").style.setProperty("font-weight", "normal");
}

function onTopBar() {
   document.getElementById("e-img-i").src = "https://gracefulchildcare.com/images-final/logo-theme-b.png";
}

function nonTopBar() {
   document.getElementById("e-img-i").src = "https://gracefulchildcare.com/images-final/logo.png";
}

function nOnTopBar() {
   document.getElementById("nImg").src = "https://gracefulchildcare.com/images-final/logo-theme-b.png";
}

function nNonTopBar() {
   document.getElementById("nImg").src = "https://gracefulchildcare.com/images-final/logo.png";
}

function onTopBarAbout() {
   document.getElementById("e-img-i").src = "../images-final/logo-theme-b.png";
}

function nonTopBarAbout() {
   document.getElementById("e-img-i").src = "../images-final/logo.png";
}

function inputOnFocus(e) {
   e.placeholder = "";
}

function inputNonFocus(e, ph) {
   if (e.value == "") {
      e.placeholder = ph;
   }
}

function calculateTuition() {
   var tuition;
   var age = document.getElementById("age").value;
   var dpw = document.getElementById("dpw").value;   
   
   if (age=="2") {
      if (dpw=="2") {
         tuition = 780;
      } else if (dpw=="3") {
         tuition = 1080;
      } else if (dpw=="4") {
         tuition = 1340;
      } else if (dpw=="5") {
         tuition = 1580;
      }
   } else {
      if (dpw=="2") {
         tuition = 720;
      } else if (dpw=="3") {
         tuition = 1000;
      } else if (dpw=="4") {
         tuition = 1240;
      } else if (dpw=="5") {
         tuition = 1450;
      }
   }
   
   document.getElementById("t-r").textContent = tuition;
   document.getElementById("tuition-result").style.setProperty("display", "block");
}

function detectSticky() {
   if (window.pageYOffset > menuY) {
      menu.classList.add("sticky");
   } else {
      menu.classList.remove("sticky");
   }
}

function defineMenu() {
    menuY = document.getElementById("menu-before").offsetTop;
}