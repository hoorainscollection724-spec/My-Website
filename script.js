// Navbar Scroll Effect
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 80) {
        header.style.background = "rgba(0,0,0,0.95)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";
        header.style.padding = "14px 8%";
    } else {
        header.style.background = "rgba(0,0,0,0.75)";
        header.style.boxShadow = "none";
        header.style.padding = "18px 8%";
    }
});

// Add To Cart Animation & Popup
const buttons = document.querySelectorAll(".buy-btn");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        // Button Animation
        button.innerHTML = "✓ Added";
        button.style.background = "#d4af37";
        button.style.color = "#000";
        button.style.transform = "scale(1.08)";

        // Create Notification
        const notification = document.createElement("div");

        notification.innerText = "🛍️ Product Added To Cart";
        notification.style.position = "fixed";
        notification.style.top = "30px";
        notification.style.right = "30px";
        notification.style.background = "#111";
        notification.style.color = "#fff";
        notification.style.padding = "15px 25px";
        notification.style.borderRadius = "50px";
        notification.style.boxShadow = "0 10px 25px rgba(0,0,0,0.25)";
        notification.style.zIndex = "9999";
        notification.style.fontWeight = "600";
        notification.style.animation = "slideIn 0.5s ease";

        document.body.appendChild(notification);

        // Remove Notification
        setTimeout(() => {
            notification.remove();

            button.innerHTML = "Add To Cart";
            button.style.background = "#111";
            button.style.color = "#fff";
            button.style.transform = "scale(1)";
        }, 2500);
    });
});

// Product Card Hover Glow
const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const x = e.offsetX;
        const y = e.offsetY;

        card.style.background = `
        radial-gradient(circle at ${x}px ${y}px,
        rgba(212,175,55,0.15),
        #fff 40%)
        `;
    });

    card.addEventListener("mouseleave", () => {
        card.style.background = "#fff";
    });
});

// Typing Effect
const text = "Luxury Fashion Redefined";
let index = 0;

function typingEffect() {

    const heading = document.querySelector(".hero-content h1");

    if(index < text.length){
        heading.innerHTML += text.charAt(index);
        index++;
        setTimeout(typingEffect, 80);
    }
}

document.querySelector(".hero-content h1").innerHTML = "";
typingEffect();


// Dynamic Animation Style
const style = document.createElement('style');

style.innerHTML = `
@keyframes slideIn {
    from{
        opacity:0;
        transform:translateX(100px);
    }
    to{
        opacity:1;
        transform:translateX(0);
    }
}
`;

document.head.appendChild(style);