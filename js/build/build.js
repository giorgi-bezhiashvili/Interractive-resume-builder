document.addEventListener("DOMContentLoaded", () => {
    let formLabels = [
        "First and Last Name", 
        "Your Passion", 
        "Your Hobbies", 
        "Learning", 
        "Technologies You Use", 
        "Gmail to Contact"
    ];

    let formHtml = "";
    const formElem = document.querySelector(".form");
    const newSubmitElem = document.querySelector(".submit");

    if (formElem) {
        formLabels.forEach(label => {
            let nameAttr = label.replace(/\s+/g, "_").toLowerCase();
            formHtml += `
                <div class="form-group">
                    <h4>${label}</h4>
                    <input type="text" name="${nameAttr}" placeholder="${label}" class="inputOneOf">
                </div>
            `;
        });

        formElem.innerHTML = formHtml;
    } 
    

    if (newSubmitElem) {
        newSubmitElem.addEventListener("click", () => {
            let inputValues = JSON.parse(localStorage.getItem("arrayInput")) || {};
            document.querySelectorAll(".inputOneOf").forEach(input => {
                inputValues[input.name] = input.value;
            });
            localStorage.setItem("arrayInput", JSON.stringify(inputValues));
            window.location.pathname = "/resume.html";

        });
    } 
});

// Export data from localStorage
export const dataExport = () => JSON.parse(localStorage.getItem("arrayInput")) || {};
