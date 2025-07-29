// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

document.addEventListener("DOMContentLoaded", () => {

    // Grab important form elements

    const email = document.getElementById('email');
    let comments = document.getElementById('comments');
    let info = document.getElementById('info');
    let button = document.getElementById('button');
    const form = document.querySelector("form");

    let form_errors = [];

    const userName = document.getElementById('name');
    let error = document.getElementById('error');
    const nameExp = /^[a-zA-Z]*$/;
    const nameExpG = /[^a-zA-Z]/g;
    const emailExp = /^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/;
    const emailExpG = /[^a-z0-9@._%+\-]/g;

    userName.addEventListener("input", (event) => {

    if (nameExpG.test(userName.value)) {
        userName.setCustomValidity("Illegal character detected");
        userName.value = userName.value.replace(/[^a-zA-Z]/g, "")
        error.textContent = "Error: Name must only contain characters.\n";
        form_errors.push("Illegal character in name field")
        error.classList.add("show")
        userName.classList.add("flash");
        error.classList.add("fade-out");

        setTimeout(() => {
            error.textContent = "";
        }, 4000);
    } else {
        userName.setCustomValidity("");
        userName.classList.remove("flash");
        error.classList.remove("fade-out");
    }
    userName.reportValidity();
    }); 

    email.addEventListener("input", (event) => {

    if (emailExpG.test(email.value)) {
        email.setCustomValidity("Illegal character detected");
        email.value = email.value.replace(emailExpG, "")
        error.textContent = "Error: Email must only contain valid characters.\n";
        form_errors.push("Illegal character in email field")
        error.classList.add("show")
        email.classList.add("flash");
        error.classList.add("fade-out");

        setTimeout(() => {
            error.textContent = "";
        }, 4000);
    } else {
        email.setCustomValidity("");
        email.classList.remove("flash");
        error.classList.remove("fade-out");
    }
    userName.reportValidity();
    }); 

    comments.addEventListener("input", () => {
        const charsRemaining = 1000 - comments.value.length;
        const chars = document.getElementById('chars')
        chars.innerHTML = "Characters remaining: " + charsRemaining;
        
        if (charsRemaining < 100) {
            chars.classList.add("warning")
        }
        else {
            chars.classList.remove("warning")
        }            
    });

    const formErrors = document.getElementById('form-errors');
    form.addEventListener("submit", (event) => {
        formErrors.value = JSON.stringify(form_errors);
    });
  
});


