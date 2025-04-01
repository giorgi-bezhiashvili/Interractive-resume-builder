let resumeElem;

function applyTheme(theme) {
    if (!resumeElem) {
        resumeElem = document.querySelector(".resume");
    }
    if (resumeElem) {
        resumeElem.className = "resume"; 
        resumeElem.classList.add(theme);
        localStorage.setItem("resumeTheme", theme);
        console.log("Updated class list:", resumeElem.classList); 
    } else {
        console.warn("Resume element not found. Theme applied to localStorage only.");
    }
}

// Attach applyTheme to the global window object
window.applyTheme = applyTheme;

// Load saved theme when page reloads
document.addEventListener("DOMContentLoaded", () => {
    resumeElem = document.querySelector(".resume");
    const savedTheme = localStorage.getItem("resumeTheme");
    if (savedTheme) {
        applyTheme(savedTheme);
    }
});


