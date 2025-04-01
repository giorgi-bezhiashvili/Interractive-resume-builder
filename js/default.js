const popUpButtonElem = document.querySelector(".popup");
const popupContainerElem = document.querySelector(".popupContainer");
const closePopUpElem = document.querySelector(".closePopUp")
const mainElem = document.querySelector(".main")
const overlayElem = document.querySelector(".overlay")
const popUpOverlay = document.querySelector(".popUpOverlay")

// Show popup when button is clicked
popUpButtonElem.addEventListener("click", function () {
    if (popupContainerElem.classList.contains("show-popup")) {
        popupContainerElem.classList.remove("show-popup");
        console.log("Popup closed");
    } else {
        popupContainerElem.classList.add("show-popup");
        console.log("Popup opened");
        overlayElem.style.opacity = "0.2"
    }
});


// Close popup when clicking outside
popupContainerElem.addEventListener("click", function (event) {
    if (event.target === popupContainerElem) {
        popupContainerElem.classList.remove("show-popup");
    }
});
closePopUpElem.addEventListener("click" , function(){
    popupContainerElem.classList.remove("show-popup")
})