// script.js

// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Select all navbar links
    var navLinks = document.querySelectorAll('.navbar-nav>li>a');

    // Loop through each navbar link
    navLinks.forEach(function(navLink) {
        // Add click event listener to each link
        navLink.addEventListener('click', function() {
            // Check if the navbar is collapsed (for mobile view)
            if (document.querySelector('.navbar-collapse').classList.contains('show')) {
                // Close the navbar by removing 'show' class
                document.querySelector('.navbar-collapse').classList.remove('show');
            }
        });
    });
});
