const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".cross-btn");
const drawer = document.querySelector(".mobile-nav-drawer");

menuIcon.addEventListener("click", () => {
  drawer.classList.add("active");
  menuIcon.style.display = "none";
  closeIcon.style.display = "flex";
  closeIcon.classList.add("active");
});

closeIcon.addEventListener("click", () => {
  drawer.classList.remove("active");
  closeIcon.classList.remove("active");
  menuIcon.style.display = "block";
  closeIcon.style.display = "none";
});
