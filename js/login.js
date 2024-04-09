const forms = document.querySelector(".forms"),
pwShowHide = document.querySelectorAll(".eye-icon"),
links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
eyeIcon.addEventListener("click", () => {
    let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

    pwFields.forEach(password => {

        if(password.type === "password"){
            password.type = "text";
            eyeIcon.classList.replace("bx-hide", "bx-show");
            return;
        }
        password.type = "password";
        eyeIcon.classList.replace("bx-show", "bx-hide");
}) 

})
})      

links.forEach(link => {
link.addEventListener("click", e => {
    e.preventDefault(); //preventing form submit
    forms.classList.toggle("show-signup");
})
})





document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.form.login');
    const signupForm = document.querySelector('.form.signup');
    const loginLink = document.querySelector('.login-link');
    const signupLink = document.querySelector('.signup-link');

    loginLink.addEventListener('click', function(e) {
        e.preventDefault();
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
    });

    signupLink.addEventListener('click', function(e) {
        e.preventDefault();
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    });
});
