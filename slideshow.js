var currentImage = 0;
var inAnimation = false;
var slideshow = true;

async function displayImage(i) {
   if (!inAnimation && i != currentImage) {
      inAnimation = true;
      var images = document.getElementsByClassName("ss-img");
      var circles = document.getElementsByClassName("circle");
      if (i >= images.length) {
         i = 0;
      } else if (i < 0) {
         i = images.length - 1;
      }
      images[currentImage].style.opacity = 1;
      while (images[currentImage].style.opacity > 0) {
         images[currentImage].style.opacity -= 0.02;
         await sleep(1);
      }
      images[currentImage].style.display = "none";
      circles[currentImage].classList.remove("current");
      images[i].style.display = "block";
      circles[i].classList.add("current");
      images[i].style.opacity = 0;
      while (images[i].style.opacity < 1) {
         images[i].style.opacity = images[i].style.opacity -= -0.02;
         await sleep(1);
      }
      currentImage = i;
      inAnimation = false;
   } else {}
}

function sleep(ms) {
   return new Promise(resolve => setTimeout(resolve, ms));
}

function changeImage(x) {
   displayImage(currentImage + x);
}

async function startSlideshow() {
   while (slideshow) {
      await sleep(4000);
      if (slideshow) {
         changeImage(1);
      }
   }
}

function displayImageUser(i) {
   slideshow = false;
   displayImage(i);
}

function changeImageUser(x) {
   slideshow = false;
   changeImage(x);
}