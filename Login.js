
document.querySelectorAll("[data-toggle]").forEach((btn) => {
    btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-toggle");
        const input = document.getElementById(id);
        if (!input) return;

        const willShow = input.type === "password";
        input.type = willShow ? "text" : "password";


        btn.setAttribute("aria-pressed", String(willShow));
        btn.setAttribute("aria-label", willShow ? "Hide password" : "Show password");
    });
});


const loginForm = document.getElementById("loginForm");
const statusEl = document.getElementById("formStatus");

const emailEl = document.getElementById("loginEmail");
const passEl = document.getElementById("loginpass");
const emailErr = document.getElementById("emailError");
const passErr = document.getElementById("passError");

function setError(el, msg) {
    el.textContent = msg;
    el.hidden = !msg;
}

loginForm?.addEventListener("submit", (e) => {
    e.preventDefault();

    let ok = true;

    setError(emailErr, "");
    setError(passErr, "");

    if (!emailEl.value.trim()) {
        setError(emailErr, "Please enter your email.");
        ok = false;
    }

    if (!passEl.value.trim()) {
        setError(passErr, "Please enter your password.");
        ok = false;
    }

    if (!ok) {
        statusEl.textContent = "Please fix the errors in the form.";
        (emailErr.hidden ? passEl : emailEl).focus();
        return;
    }

    statusEl.textContent = "Logging in (demo).";
    alert("Login (demo)");
    window.location.href = "MainPage3.html";
});

document.getElementById("forgotLink")?.addEventListener("click", (e) => {
    e.preventDefault();
    statusEl.textContent = "Forgot password selected (demo).";
    alert("Forgot password (demo)");
});

document.getElementById("goSignup")?.addEventListener("click", (e) => {
    e.preventDefault();
    statusEl.textContent = "Create account (demo).";
    alert("Signup page not added yet ");
});
