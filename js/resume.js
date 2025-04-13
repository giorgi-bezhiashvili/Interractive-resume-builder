import { dataExport } from "./build/build.js";

document.addEventListener("DOMContentLoaded", () => {
    const resumeElem = document.querySelector(".resume");
    
    if (resumeElem) {
        const data = dataExport(); // Your existing function
        if (Object.keys(data).length === 0) {
            resumeElem.innerHTML = "<p>No data available. Please fill out the form first.</p>";
            return;
        }

        let resumeHtml = `
        <div class="resume-header">
        <p>
            <h2>📌 Introduction</h2>
            <h2>Hello, I am 👨‍💻${data["first_and_last_name"] || "No Name"} 🧍, a passionate ${data["your_passion"] || "N/A"}</h2>
            <h2><strong>About me:</strong> I love ${data["your_hobbies"] || "N/A"}, I like doing it in my free time</h2>
            <h2><strong>Now I am Learning:</strong> ${data["learning"] || "N/A"} to enhance my skills</h2>
            <h2><strong>Technologies:</strong> ${data["technologies_you_use"] || "N/A"}</h2>
            <h2><strong>Contact:</strong> ${data["gmail_to_contact"] || "N/A"}</h2>
        </p>
            
            <label for="photo-upload" id="custom-upload" style="cursor: pointer; padding: 10px 15px; background: #007bff; color: white; border-radius: 5px; display: inline-block;">
            Upload Photo
            </label>


            <input type="file" id="photo-upload" accept="image/*" style="display: none;">

            <div class="img-container">

            <img id="preview" style="max-width: 200px; margin-top: 10px; display: none;" alt="Image Preview">
            </div>
            </div>
            `;

        resumeElem.innerHTML = resumeHtml;

        document.getElementById("photo-upload").addEventListener("change", function (event) {
            const file = event.target.files[0];
            if (file) {
                const imgPreview = document.getElementById("preview");
                imgPreview.src = URL.createObjectURL(file);
                imgPreview.style.display = "block";
        
                document.getElementById("custom-upload").style.display = "none";
            }
        });
        
        

        const downloadBtn = document.querySelector("#download-btn");
        if (downloadBtn) {
            downloadBtn.addEventListener("click", () => {
                html2pdf().from(resumeElem).save("resume.pdf");
            });
        }
    }
});
