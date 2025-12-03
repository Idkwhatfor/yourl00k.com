// login.js
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");
  if (!form) return; // safety

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // read values (trim username)
    const username = (document.getElementById("username") || {}).value?.trim() || "";
    const password = (document.getElementById("password") || {}).value || "";
    const genderEl = document.querySelector('input[name="gender"]:checked');

    // basic checks
    if (!username || !password) {
      alert("Please enter username and password.");
      return;
    }

    if (!genderEl) {
      alert("Please select a gender option first.");
      return;
    }

    const gender = genderEl.value;

    // Validation rules as you requested
    if (username === "iamgay" && password === "comeondaddy") {
      // username/password correct → check radio
      if (gender === "gay") {
        // everything ok → go to menu
        window.location.href = "menu.html";
      } else {
        // username/password correct but radio not set to gay
        alert("no no bro you are gay, so select the gay option");
      }
    } else {
      // username or password incorrect
      alert("Wrong username or password");
    }
  });
});
