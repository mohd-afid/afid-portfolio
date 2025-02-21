// Add any JavaScript for animations or interactivity here
document.addEventListener("DOMContentLoaded", function () {
    // Example: Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
            });
        });
    });
});

// Add this to your existing JavaScript
document.getElementById("download-resume").addEventListener("click", (e) => {
    e.preventDefault();
    // Replace with actual resume file path
    const resumeUrl = "assests/afid resume.pdf";
    window.open(resumeUrl, "_blank");
});

// Add scroll reveal animations
window.addEventListener("scroll", () => {
    const elements = document.querySelectorAll(".skill-item, .project-card");
    elements.forEach((element) => {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
            element.classList.add("animate-fade-in");
        }
    });
});

// Contact form submission
document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Basic validation
    if (!name || !email || !message) {
        alert("Please fill in all fields");
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return;
    }

    try {
        // Create the email content
        const mailtoLink = `mailto:afidhdy@gmail.com?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        )}`;

        // Open default email client
        window.location.href = mailtoLink;

        // Clear the form
        e.target.reset();

        // Show success message
        alert(
            "Thank you for your message! Your email client should open shortly."
        );
    } catch (error) {
        alert(
            "There was an error sending your message. Please try again later."
        );
        console.error("Error:", error);
    }
});
