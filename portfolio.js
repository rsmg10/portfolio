"use strict";
let switchElem = document.querySelector(".switch");
switchElem.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
