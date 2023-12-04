// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Wait for the DOM to be fully loaded before executing the script

    // Function to change background gradient every 3 seconds
    function changeBackgroundGradient() {
        const body = document.body;

        // Array of gradient styles
        const gradients = [
            'linear-gradient(orange, blue)',
            'linear-gradient(purple, pink)',
            'linear-gradient(teal, coral)'
            // Add more gradients as needed
        ];

        // Get a random gradient from the array
        const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];

        // Apply the new gradient to the body
        body.style.background = randomGradient;

        // Repeat the function after 3 seconds
        setTimeout(changeBackgroundGradient, 3000);
    }

    // Start changing the background gradient
    changeBackgroundGradient();
});
