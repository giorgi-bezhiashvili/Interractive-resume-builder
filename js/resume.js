import { dataExport } from "./build/build.js";

document.addEventListener("DOMContentLoaded", () => {
    const resumeElem = document.querySelector(".resume");
    
    if (resumeElem) {
        const data = dataExport(); // Get stored data
        if (Object.keys(data).length === 0) {
            resumeElem.innerHTML = "<p>No data available. Please fill out the form first.</p>";
            return;
        }

        let resumeHtml = `

            <h2>📌 Introduction</h2>
            <h2>Hello, I am 👨‍💻${data["first_and_last_name"] || "No Name"} 🧍, a passionate ${data["your_passion"] || "N/A"}</h2>
            <h2><strong>About me:i love </strong> ${data["your_hobbies"] || "N/A"} I like doing it in the free time</h2>
            <h2><strong>Now i am Learning</strong> ${data["learning"] || "N/A"} to enhance my skills</h2>
            <h2><strong>Technologies:</strong> ${data["technologies_you_use"] || "N/A"}</h2>
            <h2><strong>Contact:</strong> ${data["gmail_to_contact"] || "N/A"}</h2>
        `;

        resumeElem.innerHTML = resumeHtml;
    } 
    
});
