// ===== Mobile Menu Toggle =====
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

// ===== Contact Form Validation =====
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", (event) => {
    const email = document.getElementById("email")?.value.trim();
    const message = document.getElementById("message")?.value.trim();

    if (!email || !message) {
      alert("⚠️ Please fill in both email and message fields.");
      event.preventDefault(); // stop submission
    } else {
      alert("✅ Thank you! Your message has been sent.");
    }
  });
}
