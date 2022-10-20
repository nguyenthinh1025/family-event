const sign_in_btn = document.getElementById("#sign-in-btn");
const sign_up_btn = document.getElementById("#sign-up-btn");
const container = document.getElementsByClassName(".containerLogin");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
    console.log('close');
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
    console.log('open');
});