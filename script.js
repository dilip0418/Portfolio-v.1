// Add this JavaScript code to your script.js file
$(document).ready(function () {
    // When the page loads, check if the navbar should be fixed initially (in case the user refreshes the page while scrolling)
    checkScroll();

    // Add an event listener to the window's scroll event
    $(window).scroll(function () {
        checkScroll();
    });

    function checkScroll() {
        // Get the scroll position
        var scrollPos = $(window).scrollTop();

        // Get the height of the navbar
        var navbarHeight = $('.navbar').outerHeight();

        // If the scroll position is greater than or equal to the navbar's height, add the fixed-top class; otherwise, remove it
        if (scrollPos >= navbarHeight) {
            $('.navbar').addClass('fixed-top');
        } else {
            $('.navbar').removeClass('fixed-top');
        }
    }
});


// Close the navbar on navigation item click in smaller screens
function closeNavbar() {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarNav = document.querySelector(".navbar-collapse");
    if (navbarToggler && navbarNav.classList.contains("show")) {
        navbarToggler.click(); // Simulate a click on the navbar toggler to close the navbar
    }
}


// JavaScript to handle the continuous typing animation
document.addEventListener("DOMContentLoaded", function () {
    const nameElement = document.querySelector(".name");
    const nameText = "DILIP KUMAR B K";
    let charIndex = 0;
    let isTyping = true;

    function typeAndErase() {
        if (isTyping) {
            nameElement.textContent += nameText.charAt(charIndex);
            charIndex++;
            if (charIndex >= nameText.length) {
                isTyping = false;
                setTimeout(typeAndErase, 1200); // Delay before starting the erasing animation
            } else {
                setTimeout(typeAndErase, 150); // Delay between typing each letter
            }
        } else {
            nameElement.textContent = nameText.substring(0, charIndex);
            charIndex--;
            if (charIndex >= 0) {
                setTimeout(typeAndErase, 75); // Delay between erasing each letter
            } else {
                isTyping = true;
                setTimeout(typeAndErase, 1200); // Delay before starting the typing animation again
            }
        }
    }

    typeAndErase(); // Start the initial typing animation
});




document.addEventListener("DOMContentLoaded", function () {
    // Get all skill images
    const skillImages = document.querySelectorAll(".skills-list img");

    // Apply the fadeInSkills animation to each skill image with a delay
    skillImages.forEach((image, index) => {
        image.style.animation = `fadeInSkills 1s ${0.2 * index}s forwards`;
    });
});


// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Add smooth scrolling effect
    });
}

// Show or hide the "Back to Top" button based on scroll position
window.addEventListener("scroll", function () {
    var backToTopBtn = document.getElementById("backToTopBtn");
    if (window.scrollY > 500) { // Adjust the value (500) to control when the button appears
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

