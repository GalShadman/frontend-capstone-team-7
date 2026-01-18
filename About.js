
const items = document.querySelectorAll(".reveal");

const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
        if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
        }
    });
}, { threshold: 0.15 });

items.forEach((el) => io.observe(el));

document.getElementById("joinBtn")?.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Join (demo)");
});

