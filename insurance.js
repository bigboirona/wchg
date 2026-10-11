(() => {
  "use strict";
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#primary-navigation");
  const masthead = document.querySelector(".masthead");
  if (!toggle || !nav || !masthead) return;
  document.documentElement.classList.add("js");
  const smallScreen = window.matchMedia("(max-width: 900px)");
  const setOpen = (open, restoreFocus = false) => {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    if (restoreFocus) toggle.focus();
  };
  toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));
  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) setOpen(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") setOpen(false, true);
  });
  document.addEventListener("click", (event) => {
    if (smallScreen.matches && !masthead.contains(event.target)) setOpen(false);
  });
  const resetAtBreakpoint = () => setOpen(false);
  if (smallScreen.addEventListener) smallScreen.addEventListener("change", resetAtBreakpoint);
  else if (smallScreen.addListener) smallScreen.addListener(resetAtBreakpoint);
})();
