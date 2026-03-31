const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
const yearEl = document.querySelector("#year");
const successBanner = document.querySelector("#booking-success");
const signupBanner = document.querySelector("#signup-success");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

if (successBanner) {
  const params = new URLSearchParams(window.location.search);
  if (params.get("sent") === "1") {
    successBanner.hidden = false;
    params.delete("sent");
    const next = params.toString();
    const cleanUrl = `${window.location.pathname}${next ? `?${next}` : ""}${window.location.hash}`;
    window.history.replaceState({}, "", cleanUrl);
  }
}

if (signupBanner) {
  const params = new URLSearchParams(window.location.search);
  if (params.get("signup") === "1") {
    signupBanner.hidden = false;
    params.delete("signup");
    const next = params.toString();
    const cleanUrl = `${window.location.pathname}${next ? `?${next}` : ""}${window.location.hash}`;
    window.history.replaceState({}, "", cleanUrl);
  }
}
