
document.querySelectorAll("[data-toggle]").forEach((btn) => {
    btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-toggle");
        const input = document.getElementById(id);
        if (!input) return;

        const isHidden = input.type === "password";
        input.type = isHidden ? "text" : "password";


        btn.setAttribute("aria-label", isHidden ? "Hide password" : "Show password");
    });
});


document.getElementById("forgotLink")?.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Forgot password (demo)");
});


document.getElementById("loginForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Login (demo)");
});


document.getElementById("goSignup")?.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Signup page not added yet 🙂");
});
