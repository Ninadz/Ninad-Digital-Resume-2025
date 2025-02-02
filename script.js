document.addEventListener("DOMContentLoaded", function() {
    // Simple Contact Form Handler
    var contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Thank you for your message. We'll get back to you soon!");
        contactForm.reset();
      });
    }
  });
  