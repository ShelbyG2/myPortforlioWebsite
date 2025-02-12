const menubar = document.getElementById("menu-icon");
const menu = document.getElementById("mobile-nav");
const close = document.getElementById("close-icon");

menubar.addEventListener("click", () => {
  menu.style.display = "flex";
  menubar.style.display = "none";
  close.style.display = "block";
});

close.addEventListener("click", () => {
  menu.style.display = "none";
  menubar.style.display = "block";
  close.style.display = "none";
});
