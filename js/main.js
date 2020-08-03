// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");
const backToTopButton = document.querySelector("#back-to-top-btn");

// Set Initial State Of Menu

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach((item) => item.classList.add("show"));

    // Show Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach((item) => item.classList.remove("show"));

    // Show Menu State
    showMenu = false;
  }
}

// Show backToTopButton
window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 300) {
    if (!backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnExit");
      backToTopButton.classList.add("btnEntrance");
      backToTopButton.style.display = "block";
    }
  } else {
    // Hide backToTopButton
    if (backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnEntrance");
      backToTopButton.classList.add("btnExit");
      setTimeout(function () {
        backToTopButton.style.display = "none";
      }, 250);
    }
  }
}

backToTopButton.addEventListener("click", smoothScrollBackToTop);

// function backToTop() {
//   window.scrollTo(0, 0);
// }

function smoothScrollBackToTop() {
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 750;
  let start = null;

  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(
      0,
      easeInOutCubic(progress, startPosition, distance, duration)
    );
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

function easeInOutCubic(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t * t + b;
  t -= 2;
  return (c / 2) * (t * t * t + 2) + b;
}

(function () {
  var isTouch = false; //var to indicate current input type (is touch versus no touch)
  var isTouchTimer;
  var curRootClass = "can-touch"; //var indicating current document root class ("can-touch" or "")

  function addtouchclass(e) {
    clearTimeout(isTouchTimer);
    isTouch = true;
    if (curRootClass != "can-touch") {
      //add "can-touch' class if it's not already present
      curRootClass = "can-touch";
      document.documentElement.classList.add(curRootClass);
    }
    isTouchTimer = setTimeout(function () {
      isTouch = false;
    }, 500); //maintain "istouch" state for 500ms so removetouchclass doesn't get fired immediately following a touch event
  }

  function removetouchclass(e) {
    if (!isTouch && curRootClass == "can-touch") {
      //remove 'can-touch' class if not triggered by a touch event and class is present
      isTouch = false;
      curRootClass = "";
      document.documentElement.classList.remove("can-touch");
    }
  }

  document.addEventListener("touchstart", addtouchclass, false); //this event only gets called when input type is touch
  document.addEventListener("mouseover", removetouchclass, false); //this event gets called when input type is everything from touch to mouse/ trackpad
})();
