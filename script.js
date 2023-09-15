document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const responseDiv = document.getElementById("response");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Simulate sending form data to a server (in real life, you would use AJAX/fetch)
        setTimeout(function () {
            const name = contactForm.querySelector("#name").value;
            const email = contactForm.querySelector("#email").value;
            const message = contactForm.querySelector("#message").value;

            responseDiv.innerHTML = `
                <p>Thank you, ${name}!</p>
                <p>Your message has been sent.</p>
                <p>We will contact you at ${email} shortly.</p>
            `;

            // Clear the form fields
            contactForm.reset();
        }, 1000); // Simulate a delay for sending data
    });
});
