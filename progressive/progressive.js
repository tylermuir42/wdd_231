function submitForm(event){
    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");

    console.log(this.name.value);
    let error = "";

    if (nameInput.value === ""){
        error += "Name is required. \n";
    }

    if (emailInput.value === ""){
        error += "Email is required. \n";
    }
    else if (!validateEmail(email)){
        error += "Invalid email address. \n";
    }

    if(error){
        event.preventDefault();
        document.getElementById("form-error").textContent = error;
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

document.getElementById("contact-form").addEventListener("submit", submitForm);