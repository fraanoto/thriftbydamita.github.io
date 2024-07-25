document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Pesan Anda telah terkirim!");
    contactForm.reset();
  });

  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const whatsappURL = `https://wa.me/6281378225373?text=Name:%20${name}%0AEmail:%20${email}%0AMessage:%20${message}`;

    window.open(whatsappURL, "_blank");
  });
