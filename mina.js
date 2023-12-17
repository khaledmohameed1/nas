function openNav() {
  let navbarSticky = document.getElementById("navbar-sticky");
  let close = document.getElementById("close");
  let open = document.getElementById("open");
  let bottonNav = document.getElementById("bottonNav");
  console.log(navbarSticky);
  navbarSticky.classList.toggle("hidden");
  close.classList.toggle("hidden");
  open.classList.toggle("hidden");
  bottonNav.classList.toggle("absolute");
  bottonNav.classList.toggle("top-[16px]");
  bottonNav.classList.toggle("left-[16px]");
}
