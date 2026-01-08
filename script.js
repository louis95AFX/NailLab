// LOADER
window.addEventListener("load", () => {
    document.getElementById("loader").style.display = "none";
});

// GOLD PARTICLES
const hero = document.querySelector(".hero");

for (let i = 0; i < 40; i++) {
    const dot = document.createElement("span");
    dot.style.position = "absolute";
    dot.style.width = "6px";
    dot.style.height = "6px";
    dot.style.background = "#e6c68a";
    dot.style.borderRadius = "50%";
    dot.style.left = Math.random() * 100 + "%";
    dot.style.bottom = "-10px";
    dot.style.opacity = Math.random();
    dot.style.animation = `floatUp ${Math.random() * 5 + 5}s linear infinite`;
    hero.appendChild(dot);
}

// FLOAT ANIMATION
const style = document.createElement("style");
style.innerHTML = `
@keyframes floatUp {
    from { transform: translateY(0); opacity: 0; }
    to { transform: translateY(-120vh); opacity: 1; }
}`;
document.head.appendChild(style);

// BOOKING FORM → WHATSAPP
document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;

    const message = 
`Hello, my name is ${name}.
I would like to book the following:

• Service: ${service}
• Date: ${date}
• Phone: ${phone}`;

    window.open(
        `https://wa.me/27680509626?text=${encodeURIComponent(message)}`,
        "_blank"
    );
});
const dateInput = document.getElementById("date");
const today = new Date().toISOString().split("T")[0];
dateInput.setAttribute("min", today);
