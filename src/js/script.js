//! icon
feather.replace();

//! togle navbar
const navbarNav = document.querySelector(".navbar__nav");
const hamburger = document.querySelector("#hamburger-menu");
hamburger.onclick = () => {
  navbarNav.classList.toggle("active");
};
//! auto close navbar
document.addEventListener("click", function (e) {
  if (
    !hamburger.contains(e.target) &&
    !navbarNav.contains(e.target)
  ) {
    navbarNav.classList.remove("active");
  }
});
