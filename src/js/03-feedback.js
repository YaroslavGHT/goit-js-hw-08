import throttle from 'lodash.throttle';

const userform = document.querySelector(".feedback-form");
const userEmail = userform.querySelector('input[name="email"]');
const userMessage = userform.querySelector('textarea[name="message"]');
const btnSubmit = userform.lastElementChild;

function setFromLocalStorage() {
    const savedEmail = localStorage.getItem("feedback-form-state-email");
    const savedMassage = localStorage.getItem("feedback-form-state-message");
    if (savedEmail) {
        userEmail.value = savedEmail;
    }
    if (savedMassage) {
        userMessage.value = savedMassage;
    }
};

document.addEventListener("DOMContentLoaded", setFromLocalStorage);

userform.addEventListener("input", throttle((event) => {
    event.preventDefault();
    localStorage.setItem("feedback-form-state-email", userEmail.value);
    localStorage.setItem("feedback-form-state-message", userMessage.value);    
}, 500));

userform.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(localStorage.getItem("feedback-form-state-email"));
    console.log(localStorage.getItem("feedback-form-state-message"));
    userEmail.value = "";
    userMessage.value = "";
    localStorage.removeItem("feedback-form-state-email");
    localStorage.removeItem("feedback-form-state-message");
});

