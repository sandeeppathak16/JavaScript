"use strict";

document.addEventListener("DOMContentLoaded", function () {
  console.log("hello");
  document
    .getElementById("loginForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      console.log("hello world");
      console.log(this.elements.username.value);
      console.log(this.elements.password.value);
    });
});
