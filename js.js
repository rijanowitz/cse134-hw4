// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

document.addEventListener("DOMContentLoaded", () => {

    // Grab important form elements

    let email = document.getElementById('email');
    let comments = document.getElementById('comments');
    let info = document.getElementById('info');
    let button = document.getElementById('button');

    const userName = document.getElementById('name');
    let error = document.getElementById('error');
    const nameExp = /^[a-zA-Z]*$/;
    const nameExpG = /[^a-zA-Z]/g;

    userName.addEventListener("input", (event) => {

    if (nameExpG.test(userName.value)) {
        userName.setCustomValidity("Illegal character detected");
        userName.value = userName.value.replace(/[^a-zA-Z]/g, "")
        error.textContent = "Error: Name must only contain characters.\n";
        error.classList.add("show")
        userName.classList.add("flash");

        error.classList.remove("fade-out");
        void error.offsetWidth;
        error.classList.add("fade-out");

        setTimeout(() => {
            error.textContent = "";
        }, 4000);
    } else {
        userName.setCustomValidity("");
        userName.classList.remove("flash");
    }
    userName.reportValidity();
    }); 
  
});


