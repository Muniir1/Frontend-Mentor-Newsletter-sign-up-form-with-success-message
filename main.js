const container = document.querySelector(".container");
const input = document.querySelector("input");
const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");
const form = document.querySelector("form");
const success = document.querySelector(".success");

let errorLabel; 

form.addEventListener("submit", (e) => {
    e.preventDefault();
    getValues();
});

const getValues = () => {
    const inputValue = input.value.trim();
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const email = input.value;
    document.getElementById("email").innerHTML = email;

    if (inputValue.match(mailformat)) {
        container.classList.add("remove");
        success.style.display = "block";
    } else {
        input.classList.add("error");


        if (!errorLabel) {
            errorLabel = document.createElement("label");
            errorLabel.classList.add("error_label");
            errorLabel.innerHTML = "Valid Email Required";
            form.appendChild(errorLabel);
        }
    }
};

const dismisMessage = () => {
    input.classList.remove("error");
    success.style.display = "none";
    container.classList.remove("remove");
    input.value = "";

    if (errorLabel) {
        errorLabel.remove();
        errorLabel = null; 
    }
};

btn2.addEventListener("click", dismisMessage);
