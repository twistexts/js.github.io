// script.js

function updateGreeting() {
    const greetingTextElement = document.getElementById('greeting-text');
    const currentHour = new Date().getHours(); // Get current hour

    if (currentHour < 12) {
        greetingTextElement.textContent = 'bom dia!'; // Morning greeting
    } else if (currentHour < 18) {
        greetingTextElement.textContent = 'boa tarde!'; // Afternoon greeting
    } else {
        greetingTextElement.textContent = 'boa noite!'; // Evening greeting
    }
}

// Call the function on page load
window.onload = updateGreeting;