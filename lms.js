// ==UserScript==
// @name         Auto LMS Login
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Automatically fills and submits LMS login credentials
// @match        *://*/*
// @grant        none
// ==UserScript==

(function () {
  "use strict";

  // CONFIGURATION: Replace with your actual LMS details
  const TARGET_URL_KEYWORD = "lms"; // A unique word in your LMS login URL
  const USERNAME = "YOUR_USERNAME_HERE";
  const PASSWORD = "YOUR_PASSWORD_HERE";

  function autoLogin() {
    if (!window.location.href.toLowerCase().includes(TARGET_URL_KEYWORD))
      return;

    // Common selector patterns for username/password fields and submit buttons
    const usernameInput = document.querySelector(
      'input[type="text"], input[type="email"], input[name*="user"], input[id*="user"]',
    );
    const passwordInput = document.querySelector('input[type="password"]');
    const submitButton = document.querySelector(
      'input[type="submit"], button[type="submit"], button[id*="login"], button[id*="submit"]',
    );

    if (usernameInput && passwordInput && submitButton) {
      usernameInput.value = USERNAME;
      passwordInput.value = PASSWORD;

      usernameInput.dispatchEvent(new Event("input", { bubbles: true }));
      passwordInput.dispatchEvent(new Event("input", { bubbles: true }));

      submitButton.click();
    }
  }

  window.addEventListener("load", autoLogin);

  setInterval(autoLogin, 2000);
})();
