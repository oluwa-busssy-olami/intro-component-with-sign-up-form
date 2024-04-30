const input = document.querySelectorAll("input");
const submitButton = document.querySelector("button");
const errorIcon = document.querySelectorAll(".error-icon");
const errorMessage = document.querySelectorAll(".errorMessage");
const email = document.querySelector(".email");

for (let i = 0; i < input.length; i++) {
    const eachInput = input[i];
    const errorMessageInput = errorMessage[i];
    const errorIconInput = errorIcon[i];

    // Loop through the errorMessage

    eachInput.addEventListener("input", (e) => {
        if (eachInput.value.trim() === "") {
            eachInput.style.border = "1px solid red";
            errorMessageInput.style.display = "block";
            errorIconInput.style.display = "block";
        } else {
            eachInput.style.border = ""; // Reset border
            errorMessageInput.style.display = "none"; // Hide error message
            errorIconInput.style.display = "none"; //Hide error Icon
        }
    });
    submitButton.addEventListener("click", (e) => {
        if (eachInput.value.trim() === "") {
            eachInput.style.border = "1px solid red";
            errorMessageInput.style.display = "block";
            errorIconInput.style.display = "block";
        } else {
            eachInput.style.border = ""; // Reset border
            errorMessageInput.style.display = "none"; // Hide error message
            errorIconInput.style.display = "none"; //Hide error Icon
        }
    });
}