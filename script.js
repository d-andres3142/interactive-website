// Set up the click counter
let clickCount = 0;
const clickButton = document.getElementById("clickButton");
const clickCountDisplay = document.getElementById("clickCount");

clickButton.addEventListener("click", function() {
    clickCount++;
    clickCountDisplay.textContent = clickCount;
});

// Handle form submission to get the user's favorite color
const colorForm = document.getElementById("colorForm");
const colorInput = document.getElementById("colorInput");
const colorMessage = document.getElementById("colorMessage");

colorForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission (page reload)
    const color = colorInput.value.trim();

    if (color) {
        colorMessage.textContent = `Your favorite color is ${color}!`;
        colorMessage.style.color = color;
        colorInput.value = ''; // Clear input field after submission
    } else {
        colorMessage.textContent = 'Please enter a color!';
        colorMessage.style.color = 'red';
    }
});
