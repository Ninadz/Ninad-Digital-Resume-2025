document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        if (name && email && message) {
            alert("Thanks, " + name + "! I'll get back to you soon.");
            form.reset();
        } else {
            alert("Please fill in all fields.");
        }
    });
});