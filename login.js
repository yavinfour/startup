function login() {
  const nameElem = document.querySelector("#name");
  const passwordElem = document.querySelector("#password");

  localStorage.setItem("userName", nameElem.value);
  localStorage.setItem("userPassword", passwordElem.value);

  window.location.href = "play.html";
}