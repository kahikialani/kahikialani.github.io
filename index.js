const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')
const fullText = "[ OM ]";
const typedTextElement = document.getElementById('typed-text');
const cursorElement = document.getElementById('cursor');

let displayText = "";
let isDeleting = false;
let charIndex = 0;

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

// Cursor blink
setInterval(() => {
    cursorElement.classList.toggle('hidden');
}, 500);

// Typing effect
function type() {
    if (!isDeleting && charIndex < fullText.length) {
        displayText += fullText.charAt(charIndex);
        typedTextElement.textContent = displayText;
        charIndex++;
        setTimeout(type, 150);
    } else if (!isDeleting && charIndex === fullText.length) {
        setTimeout(() => {
            isDeleting = true;
            type();
        }, 4000);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        displayText = fullText.substring(0, charIndex);
        typedTextElement.textContent = displayText;
        setTimeout(type, 100);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        setTimeout(type, 1000);
    }
}

type();