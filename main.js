const container = document.querySelector(".container");
const input = document.querySelector("input");
const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");
const form = document.querySelector("form");
const success = document.querySelector(".success");

form.addEventListener("submit", (e)=> {
    e.preventDefault();

    getValues();
})

const getValues = () => {
    const inputValue = input.value.trim();
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputValue.match(mailformat) ){
        container.classList.add("remove")
        success.style.display = "block"
    }
    else{
        input.classList.add("error")
        const errorLabel = document.createElement("label")
        form.appendChild(errorLabel);
        errorLabel.classList.add("error_label")
        errorLabel.innerHTML = "Valid Email Required"
    }
}

const dismisMessage = () => {
    success.style.display = "none"
    container.classList.remove("remove")
}

btn2.addEventListener("click", dismisMessage);
