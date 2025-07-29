const phrases = ["finest dining", "comfortable stay"];
let currentPhrase = 0;
let charIndex = 0;
let isDeleting = false;
const textElement = document.getElementById("animated-text");
const typingSpeed = 60;
const deletingSpeed = 60;
const delayBetweenPhrases = 1500;

function type() {
    const currentText = phrases[currentPhrase];

    if (!isDeleting && charIndex < currentText.length) {
        textElement.textContent += currentText[charIndex];
        charIndex++;
        setTimeout(type, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
        textElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(type, deletingSpeed);
    } else if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(type, delayBetweenPhrases);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentPhrase = (currentPhrase + 1) % phrases.length;
        setTimeout(type, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    type();
});


var year = new Date().getFullYear();
document.getElementById("year").innerHTML = `&copy; ${year} Sheena's Pension House. All Rights Reserved.`;